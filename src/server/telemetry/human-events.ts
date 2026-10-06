import { Request, Response } from 'express';
import { telemetryConfig } from './config';
import { getDbPool, recordDbSuccess, recordDbError } from '../db';
import { classifyPath } from './page-map';

const ALLOWED_EVENTS = new Set([
  'page_view',
  'section_view',
  'linkedin_click',
  'contact_click',
  'email_click',
  'whatsapp_click',
  'vcard_download',
  'form_start',
  'form_submit',
]);

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface TelemetryPayload {
  event: string;
  visitor_id: string;
  session_id: string;
  path?: string;
  referrer?: string;
  properties?: Record<string, any>;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  device_type?: string;
}

/**
 * Sanitizes string input to prevent SQL/log issues and control length.
 */
function sanitizeString(val: unknown, maxLength = 255): string | null {
  if (typeof val !== 'string') return null;
  const clean = val.trim().slice(0, maxLength);
  return clean || null;
}

/**
 * Validates and ingests human web events into visitors, sessions, and web_events.
 */
export async function handleHumanTelemetry(req: Request, res: Response): Promise<void> {
  // If telemetry is disabled, return 204 immediately
  if (!telemetryConfig.telemetryEnabled) {
    res.status(204).end();
    return;
  }

  const body = req.body as TelemetryPayload;

  // Validate body structure
  if (!body || typeof body !== 'object') {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const eventName = body.event;
  if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
    res.status(400).json({ error: 'Unrecognized or unauthorized event' });
    return;
  }

  // Validate UUIDs
  const visitorId = body.visitor_id;
  const sessionId = body.session_id;

  if (!visitorId || typeof visitorId !== 'string' || !UUID_REGEX.test(visitorId)) {
    res.status(400).json({ error: 'Invalid visitor_id' });
    return;
  }

  if (!sessionId || typeof sessionId !== 'string' || !UUID_REGEX.test(sessionId)) {
    res.status(400).json({ error: 'Invalid session_id' });
    return;
  }

  // Extract and sanitize path and referrer
  const requestPath = sanitizeString(body.path, 255) || '/';
  const referrer = sanitizeString(body.referrer, 255);
  const utmSource = sanitizeString(body.utm_source, 64);
  const utmMedium = sanitizeString(body.utm_medium, 64);
  const utmCampaign = sanitizeString(body.utm_campaign, 64);
  const deviceType = sanitizeString(body.device_type, 32) || 'desktop';

  // Enrich properties with semantic classification and host
  const pathClassification = classifyPath(requestPath);
  const rawProps = typeof body.properties === 'object' && body.properties !== null ? body.properties : {};

  // Strip any accidental sensitive fields from properties
  const safeProps: Record<string, any> = {};
  for (const [k, v] of Object.entries(rawProps)) {
    const keyLower = k.toLowerCase();
    if (
      keyLower.includes('password') ||
      keyLower.includes('email') ||
      keyLower.includes('phone') ||
      keyLower.includes('name') ||
      keyLower.includes('token')
    ) {
      continue;
    }
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      safeProps[k] = v;
    }
  }

  safeProps.page_type = pathClassification.page_type;
  safeProps.semantic_intent = pathClassification.semantic_intent;
  safeProps.host = telemetryConfig.siteHost;

  const propertiesJson = JSON.stringify(safeProps);

  // Send 204 No Content response immediately to free the client
  res.status(204).end();

  // Asynchronously write to MySQL in background
  setImmediate(async () => {
    try {
      const pool = getDbPool();
      if (!pool) return;

      const siteId = telemetryConfig.siteId;

      // 1. Upsert Visitor
      const visitorQuery = `
        INSERT INTO visitors (
          site_id,
          visitor_id,
          first_seen_at,
          last_seen_at
        ) VALUES (?, ?, NOW(), NOW())
        ON DUPLICATE KEY UPDATE
          last_seen_at = NOW();
      `;
      await pool.execute(visitorQuery, [siteId, visitorId]);

      // 2. Upsert Session
      const sessionQuery = `
        INSERT INTO sessions (
          site_id,
          session_id,
          visitor_id,
          started_at,
          last_activity_at,
          landing_page,
          exit_page,
          referrer,
          utm_source,
          utm_medium,
          utm_campaign,
          device_type
        ) VALUES (?, ?, ?, NOW(), NOW(), ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          last_activity_at = NOW(),
          exit_page = VALUES(exit_page);
      `;
      await pool.execute(sessionQuery, [
        siteId,
        sessionId,
        visitorId,
        requestPath,
        requestPath,
        referrer,
        utmSource,
        utmMedium,
        utmCampaign,
        deviceType,
      ]);

      // 3. Append Web Event
      const eventQuery = `
        INSERT INTO web_events (
          site_id,
          visitor_id,
          session_id,
          event_name,
          event_timestamp,
          properties
        ) VALUES (?, ?, ?, ?, NOW(), ?);
      `;
      await pool.execute(eventQuery, [
        siteId,
        visitorId,
        sessionId,
        eventName,
        propertiesJson,
      ]);

      recordDbSuccess();
    } catch (err) {
      recordDbError(err);
      console.warn(
        `[Human Telemetry] Non-blocking event write skipped:`,
        err instanceof Error ? err.message : err
      );
    }
  });
}
