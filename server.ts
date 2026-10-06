import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { getDbHealthState, closeDbPool } from './src/server/db';
import { crawlerTelemetryMiddleware } from './src/server/telemetry/crawler-middleware';
import { handleHumanTelemetry } from './src/server/telemetry/human-events';
import { telemetryRateLimiter } from './src/server/telemetry/rate-limit';
import { telemetryConfig } from './src/server/telemetry/config';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  // Body parser for JSON with strict size limit
  app.use(express.json({ limit: '20kb' }));

  // Non-blocking health check endpoint
  app.get('/healthz', (_req, res) => {
    res.json({
      status: 'ok',
      site_id: telemetryConfig.siteId,
      host: telemetryConfig.siteHost,
      uptime_seconds: Math.floor(process.uptime()),
      telemetry: getDbHealthState(),
    });
  });

  // Human telemetry ingestion endpoint
  app.post('/api/telemetry', telemetryRateLimiter, handleHumanTelemetry);

  // Server-side crawler telemetry middleware for HTML & semantic resources
  app.use(crawlerTelemetryMiddleware);

  if (!isProduction) {
    // Development mode: Mount Vite dev server middleware
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port,
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
    console.log(`[Dev Server] Vite middleware mounted.`);
  } else {
    // Production mode: Serve static build assets from dist/
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    console.log(`[Prod Server] Serving static build from dist/.`);
  }

  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`[RAUVIA Server] Listening on http://0.0.0.0:${port}`);
    console.log(`[Telemetry] Status: ${telemetryConfig.telemetryEnabled ? 'ENABLED (1)' : 'DISABLED (0)'}`);
    console.log(`[Telemetry] Site ID: ${telemetryConfig.siteId}`);
  });

  // Graceful shutdown handling
  let isShuttingDown = false;
  const handleShutdown = async (signal: string) => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log(`[Server] Received ${signal}. Initiating graceful shutdown...`);

    server.close(async () => {
      console.log(`[Server] HTTP server closed.`);
      await closeDbPool();
      process.exit(0);
    });

    // Force exit after 5 seconds if hanging
    setTimeout(() => {
      console.warn(`[Server] Forced shutdown after timeout.`);
      process.exit(1);
    }, 5000).unref();
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
}

startServer().catch((err) => {
  console.error('[Server] Fatal startup error:', err);
  process.exit(1);
});
