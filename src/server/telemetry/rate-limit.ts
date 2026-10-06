import { Request, Response, NextFunction } from 'express';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // Max 60 events/min per client

// Periodic cleanup every 5 minutes to prevent memory accumulation
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (record.resetAt <= now) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

if (cleanupTimer.unref) {
  cleanupTimer.unref();
}

/**
 * Lightweight in-memory rate limiter strictly for POST /api/telemetry.
 */
export function telemetryRateLimiter(req: Request, res: Response, next: NextFunction): void {
  const clientKey =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'global-client';

  const now = Date.now();
  let record = rateLimitMap.get(clientKey);

  if (!record || record.resetAt <= now) {
    record = { count: 1, resetAt: now + WINDOW_MS };
    rateLimitMap.set(clientKey, record);
    return next();
  }

  record.count += 1;

  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    // 429 Too Many Requests, silent empty response
    res.status(429).json({ error: 'Rate limit exceeded' });
    return;
  }

  return next();
}
