import mysql, { Pool } from 'mysql2/promise';
import { telemetryConfig } from './telemetry/config';

let pool: Pool | null = null;

export interface DbHealthState {
  enabled: boolean;
  configured: boolean;
  connected: boolean;
  poolSize: number;
  lastDbSuccessAt: string | null;
  lastDbErrorAt: string | null;
  lastErrorMessage: string | null;
  queryCount: number;
}

const healthState: DbHealthState = {
  enabled: telemetryConfig.telemetryEnabled,
  configured: Boolean(telemetryConfig.dbHost && telemetryConfig.dbUser && telemetryConfig.dbName),
  connected: false,
  poolSize: 3,
  lastDbSuccessAt: null,
  lastDbErrorAt: null,
  lastErrorMessage: null,
  queryCount: 0,
};

export function getDbHealthState(): DbHealthState {
  return {
    ...healthState,
    enabled: telemetryConfig.telemetryEnabled,
    configured: Boolean(telemetryConfig.dbHost && telemetryConfig.dbUser && telemetryConfig.dbName),
  };
}

export function recordDbSuccess(): void {
  healthState.connected = true;
  healthState.lastDbSuccessAt = new Date().toISOString();
  healthState.queryCount += 1;
}

export function recordDbError(err: unknown): void {
  const message = err instanceof Error ? err.message : String(err);
  healthState.lastDbErrorAt = new Date().toISOString();
  healthState.lastErrorMessage = message;
}

/**
 * Returns the MySQL connection pool if telemetry is enabled and DB credentials are provided.
 * Uses a small connection limit (3) to prevent connection leaks.
 * If credentials are not configured or connection fails, returns null without breaking the app.
 */
export function getDbPool(): Pool | null {
  if (!telemetryConfig.telemetryEnabled) {
    return null;
  }

  if (!telemetryConfig.dbHost || !telemetryConfig.dbUser || !telemetryConfig.dbName) {
    return null;
  }

  if (!pool) {
    try {
      pool = mysql.createPool({
        host: telemetryConfig.dbHost,
        port: telemetryConfig.dbPort,
        user: telemetryConfig.dbUser,
        password: telemetryConfig.dbPassword,
        database: telemetryConfig.dbName,
        waitForConnections: true,
        connectionLimit: 3,
        queueLimit: 0,
        connectTimeout: 5000,
      });

      // Handle pool-level error events gracefully
      (pool as any).on('error', (err: any) => {
        recordDbError(err);
        console.warn('[Telemetry DB] Pool background error:', err?.message || err);
      });
    } catch (err) {
      recordDbError(err);
      console.warn('[Telemetry DB] Failed to initialize connection pool:', err instanceof Error ? err.message : err);
      pool = null;
    }
  }

  return pool;
}

/**
 * Gracefully ends the MySQL connection pool during server shutdown.
 */
export async function closeDbPool(): Promise<void> {
  if (pool) {
    try {
      const activePool = pool;
      pool = null;
      await activePool.end();
      healthState.connected = false;
      console.log('[Telemetry DB] Pool closed cleanly.');
    } catch (err) {
      console.warn('[Telemetry DB] Error closing pool:', err instanceof Error ? err.message : err);
    }
  }
}
