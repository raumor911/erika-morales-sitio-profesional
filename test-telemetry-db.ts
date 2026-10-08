import dotenv from 'dotenv';
import { getDbPool, closeDbPool } from './src/server/db.js';
import { hashIp } from './src/server/telemetry/ip-hash.js';
import { classifyPath } from './src/server/telemetry/page-map.js';

dotenv.config();

async function testCrawlerInsert() {
  console.log('=== TESTING CRAWLER INSERT ===');
  const pool = getDbPool();
  if (!pool) {
    console.error('Failed to get DB pool. Check .env credentials.');
    return;
  }

  const siteId = process.env.TELEMETRY_SITE_ID || 'erika-morales';
  const crawlerName = 'TestBot-GPT';
  const crawlerFamily = 'OpenAI';
  const userAgent = 'Mozilla/5.0 (compatible; TestBot-GPT/1.0; +https://testbot.com)';
  const requestPath = '/perspectiva/';
  const requestMethod = 'GET';
  const statusCode = 200;
  const referer = 'https://google.com';
  const requestedAt = new Date();
  const responseTimeMs = 42;
  const ipHash = hashIp('192.168.1.100');
  
  const classification = classifyPath(requestPath);
  const properties = JSON.stringify({
    page_type: classification.page_type,
    semantic_intent: classification.semantic_intent,
    host: process.env.TELEMETRY_SITE_HOST,
    test_run: true
  });

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
    siteId, crawlerName, crawlerFamily, userAgent, requestPath,
    requestMethod, statusCode, referer, requestedAt, responseTimeMs,
    ipHash, properties
  ];

  try {
    const [result] = await pool.execute(query, values);
    console.log('✅ Crawler insert SUCCESS!', result);
  } catch (err) {
    console.error('❌ Crawler insert FAILED:', err);
  }
}

async function testHumanInsert() {
  console.log('\n=== TESTING HUMAN EVENTS INSERT ===');
  const pool = getDbPool();
  if (!pool) return;

  const siteId = process.env.TELEMETRY_SITE_ID || 'erika-morales';
  const visitorId = '123e4567-e89b-12d3-a456-426614174000'; // Fake UUID
  const sessionId = '987fcdeb-51a2-43d7-9012-345678901234'; // Fake UUID
  const requestPath = '/como-puedo-ayudarte/';
  
  try {
    // 1. Visitor
    console.log('Inserting visitor...');
    await pool.execute(`
      INSERT INTO visitors (site_id, visitor_id, first_seen_at, last_seen_at) 
      VALUES (?, ?, NOW(), NOW())
      ON DUPLICATE KEY UPDATE last_seen_at = NOW();
    `, [siteId, visitorId]);
    console.log('✅ Visitor insert/upsert SUCCESS!');

    // 2. Session
    console.log('Inserting session...');
    await pool.execute(`
      INSERT INTO sessions (
        site_id, session_id, visitor_id, started_at, last_activity_at, 
        landing_page, exit_page, referrer, utm_source, utm_medium, utm_campaign, device_type
      ) VALUES (?, ?, ?, NOW(), NOW(), ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE last_activity_at = NOW(), exit_page = VALUES(exit_page);
    `, [siteId, sessionId, visitorId, requestPath, requestPath, 'https://linkedin.com', 'linkedin', 'social', 'post', 'desktop']);
    console.log('✅ Session insert/upsert SUCCESS!');

    // 3. Web Event
    console.log('Inserting web event...');
    const classification = classifyPath(requestPath);
    const propertiesJson = JSON.stringify({
      page_type: classification.page_type,
      semantic_intent: classification.semantic_intent,
      host: process.env.TELEMETRY_SITE_HOST,
      test_run: true
    });

    await pool.execute(`
      INSERT INTO web_events (
        site_id, visitor_id, session_id, event_name, event_timestamp, properties
      ) VALUES (?, ?, ?, ?, NOW(), ?);
    `, [siteId, visitorId, sessionId, 'page_view', propertiesJson]);
    console.log('✅ Web event insert SUCCESS!');

  } catch (err) {
    console.error('❌ Human insert FAILED:', err);
  }
}

async function runTests() {
  await testCrawlerInsert();
  await testHumanInsert();
  await closeDbPool();
  process.exit(0);
}

runTests();
