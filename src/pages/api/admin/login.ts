import type { APIRoute } from 'astro';
import { createSessionCookie, COOKIE_NAME, SESSION_DURATION } from '../../../lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!password || !adminPassword || password !== adminPassword) {
      return new Response(
        JSON.stringify({ success: false, error: 'Contraseña incorrecta' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cookieValue = await createSessionCookie(adminPassword);
    cookies.set(COOKIE_NAME, cookieValue, {
      path: '/', httpOnly: true,
      secure: process.env.NODE_ENV === 'production' || import.meta.env.PROD,
      sameSite: 'lax', maxAge: SESSION_DURATION,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error del servidor' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
