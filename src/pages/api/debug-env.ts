import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const env = globalThis.process?.env || {};
  return new Response(JSON.stringify({
    hasAdminPw: !!env['ADMIN_PASSWORD'],
    adminPwLength: (env['ADMIN_PASSWORD'] || '').length,
    hasSheetsUrl: !!env['SHEETS_WEBHOOK_URL'],
    hasReadToken: !!env['SHEETS_READ_TOKEN'],
    nodeEnv: env['NODE_ENV'],
    vercel: env['VERCEL'],
    envKeysCount: Object.keys(env).length,
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
