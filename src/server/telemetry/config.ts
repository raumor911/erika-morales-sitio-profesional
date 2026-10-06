import dotenv from 'dotenv';

// Load environment variables if not already loaded
dotenv.config();

export interface TelemetryConfig {
  telemetryEnabled: boolean;
  siteId: string;
  siteHost: string;
  dbHost?: string;
  dbPort: number;
  dbUser?: string;
  dbPassword?: string;
  dbName?: string;
  ipSalt: string;
}

export const telemetryConfig: TelemetryConfig = {
  telemetryEnabled: process.env.TELEMETRY_ENABLED === '1',
  siteId: process.env.TELEMETRY_SITE_ID || 'erika-morales',
  siteHost: process.env.TELEMETRY_SITE_HOST || 'erikamorales.rauviaweb.mx',
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT || 3306),
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  ipSalt: process.env.TELEMETRY_IP_SALT || 'rauvia-telemetry-erika-morales-salt',
};
