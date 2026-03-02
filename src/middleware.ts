import { defineMiddleware } from 'astro:middleware';
import { verifySessionCookie, COOKIE_NAME } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
  if (!isAdminRoute) return next();

  const isLoginRoute = pathname === '/admin/login' || pathname === '/api/admin/login';
  if (isLoginRoute) return next();

  const cookie = context.cookies.get(COOKIE_NAME)?.value;
  const _env = process.env;
  const secret = _env['ADMIN_PASSWORD'];

  if (!cookie || !secret || !(await verifySessionCookie(cookie, secret))) {
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      });
    }
    return context.redirect('/admin/login');
  }
  return next();
});
