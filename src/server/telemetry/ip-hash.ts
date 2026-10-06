import crypto from 'crypto';
import { telemetryConfig } from './config';

/**
 * Creates an irreversible, anonymous SHA-256 hash of an IP address using a server-side salt.
 * Ensures compliance with data privacy without storing plain text IP addresses.
 */
export function hashIp(rawIp: string | undefined): string {
  if (!rawIp) {
    return '0000000000000000000000000000000000000000000000000000000000000000';
  }

  // Extract client IP if comma-separated list from proxy headers
  const clientIp = rawIp.split(',')[0].trim();

  return crypto
    .createHash('sha256')
    .update(`${clientIp}-${telemetryConfig.ipSalt}`)
    .digest('hex');
}
