const COOKIE_NAME = 'tty_admin_session';
const SESSION_DURATION = 24 * 60 * 60;

async function getKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function hexToBuffer(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

export async function createSessionCookie(secret: string): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const key = await getKey(secret);
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(timestamp));
  return `${timestamp}.${bufferToHex(signature)}`;
}

export async function verifySessionCookie(cookie: string, secret: string): Promise<boolean> {
  const parts = cookie.split('.');
  if (parts.length !== 2) return false;
  const [timestamp, hex] = parts;
  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) return false;
  const now = Math.floor(Date.now() / 1000);
  if (now - ts > SESSION_DURATION) return false;
  const key = await getKey(secret);
  const expectedSignature = hexToBuffer(hex);
  return crypto.subtle.verify('HMAC', key, expectedSignature, new TextEncoder().encode(timestamp));
}

export { COOKIE_NAME, SESSION_DURATION };
