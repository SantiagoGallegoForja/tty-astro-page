import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  const token = process.env.SHEETS_READ_TOKEN;

  if (!webhookUrl || !token) {
    return new Response(JSON.stringify({ success: false, error: 'Configuración de servidor incompleta' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const url = `${webhookUrl}?token=${encodeURIComponent(token)}`;
    const response = await fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' } });

    if (!response.ok) {
      return new Response(JSON.stringify({ success: false, error: 'Error al leer las sugerencias' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await response.json();

    if (data.success && Array.isArray(data.data)) {
      data.data = data.data.map((row: Record<string, unknown>) => {
        const fechaRaw = String(row.Fecha || row.fecha || '');
        const horaRaw = String(row.Hora || row.hora || '');
        let fecha = fechaRaw;
        if (fechaRaw && horaRaw) {
          try {
            const datePart = fechaRaw.split('T')[0];
            const timePart = horaRaw.includes('T') ? horaRaw.split('T')[1] : '';
            if (datePart && timePart) fecha = `${datePart}T${timePart}`;
          } catch { /* keep original */ }
        }
        return {
          fecha, nombre: row.Nombre || row.nombre || '',
          telefono: row.Numero || row.numero || row.Telefono || row.telefono || '',
          email: row.Email || row.email || '',
          tipo: row.Tipo || row.tipo || '',
          mensaje: row.Mensaje || row.mensaje || '',
        };
      });
    }

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Error interno del servidor' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
