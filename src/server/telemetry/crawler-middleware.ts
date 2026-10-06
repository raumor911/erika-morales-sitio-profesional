import { Request, Response, NextFunction } from 'express';
import { telemetryConfig } from './config';
import { getDbPool, recordDbSuccess, recordDbError } from '../db';
import { detectCrawler } from './crawler-detector';
import { isStaticAsset, classifyPath } from './page-map';
import { hashIp } from './ip-hash';

/**
 * Express middleware that intercepts incoming requests, identifies AI crawlers and bots,
 * serves the response with zero latency or alteration, and asynchronously records crawler
 * visits into `ai_crawler_visits` upon completion.
 */
export function crawlerTelemetryMiddleware(req: Request, res: Response, next: NextFunction): void {
  // If telemetry is disabled, pass through immediately
  if (!telemetryConfig.telemetryEnabled) {
    return next();
  }

  // Skip static assets (scripts, images, css, fonts, etc.)
  if (isStaticAsset(req.path)) {
    return next();
  }

  const userAgent = req.headers['user-agent'] || '';
  const detection = detectCrawler(userAgent);

  // If not a recognized crawler, proceed normally
  if (!detection.isCrawler) {
    return next();
  }

  const startTime = Date.now();
  const requestedAt = new Date();
  const requestPath = req.path.slice(0, 255);
  const requestMethod = req.method.slice(0, 16);
  const referer = ((req.headers['referer'] || req.headers['referrer']) as string || '').slice(0, 255);
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket?.remoteAddress || '';
  const ipHash = hashIp(clientIp);

  const classification = classifyPath(requestPath);
  const properties = JSON.stringify({
    page_type: classification.page_type,
    semantic_intent: classification.semantic_intent,
    host: telemetryConfig.siteHost,
  });

  // Attach completion listener to record metrics after response has been fully flushed
  res.on('finish', () => {
    const responseTimeMs = Date.now() - startTime;
    const statusCode = res.statusCode;

    // Asynchronously insert into MySQL without blocking
    setImmediate(async () => {
      try {
        const pool = getDbPool();
        if (!pool) return;

        const query = `
          INSERT INTO ai_crawler_visits (
            site_id,
            crawler_name,
            crawler_family,
            user_agent,
            request_path,
            request_method,
            status_code,
            referer,
            requested_at,
            response_time_ms,
            ip_hash,
            properties
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
          telemetryConfig.siteId,
          detection.crawlerName || 'unknown',
          detection.crawlerFamily || 'Other',
          userAgent.slice(0, 1000),
          requestPath,
          requestMethod,
          statusCode,
          referer || null,
          requestedAt,
          responseTimeMs,
          ipHash,
          properties,
        ];

        await pool.execute(query, values);
        recordDbSuccess();
      } catch (err) {
        // Controlled warning; never affect response or SEO
        recordDbError(err);
        console.warn(
          `[Crawler Telemetry] Non-blocking visit write skipped:`,
          err instanceof Error ? err.message : err
        );
      }
    });
  });

  return next();
}
