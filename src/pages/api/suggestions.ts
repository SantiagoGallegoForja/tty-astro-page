import type { APIRoute } from 'astro';

export const prerender = false;

interface SuggestionPayload {
  name: string;
  phone: string;
  email?: string;
  tipo: string;
  message: string;
}

const _env = process.env;
const GOOGLE_SHEETS_WEBHOOK = _env['SHEETS_WEBHOOK_URL'] || 'https://script.google.com/macros/s/TU_WEBHOOK_AQUI/exec';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: SuggestionPayload = await request.json();

    if (!data.name || !data.phone || !data.tipo || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Todos los campos requeridos deben ser completados' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const sheetsPayload = {
      nombre: data.name,
      telefono: data.phone,
      email: data.email || '',
      tipo: data.tipo,
      mensaje: data.message,
      fuente: 'Buzón de Sugerencias',
    };

    const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetsPayload),
    });

    if (!response.ok) {
      console.error('Google Sheets error:', await response.text());
      return new Response(
        JSON.stringify({ success: false, error: 'Error al enviar el mensaje' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje recibido correctamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Suggestions API Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
