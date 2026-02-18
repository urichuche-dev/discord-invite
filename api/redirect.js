export default function handler(req, res) {
    // 1. Obtener la IP del usuario
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { to } = req.query; // El servidor al que quieren ir

    // 2. Aquí es donde "guardarías" la IP. 
    // Por ahora, solo la mostraremos en los logs de Vercel.
    console.log(`[SEGURIDAD] Acceso detectado - IP: ${ip} - Destino: ${to}`);

    // 3. Redirección automática
    const links = {
        'jm': 'https://discord.gg/yk2WjsZxRm',
        'servidor2': 'https://discord.gg/CODIGO2'
    };

    const target = links[to] || 'https://discord-invite-delta.vercel.app/404';
    
    res.redirect(302, target);
}
