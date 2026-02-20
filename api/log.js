export default async function handler(req, res) {
    // 1. Capturamos la IP real del usuario a través de Vercel
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { server } = req.query; // Sabemos a qué servidor intentaba entrar

    // Que no envie nada si es mia o de dinvi
        if (ip === '79.117.215.135' || ip === '149.74.52.175') {
        return res.status(200).json({ success: true, message: "IP de prueba detectada, no se envió al webhook." });
    }

    // 2. CONFIGURA AQUÍ TU WEBHOOK DE DISCORD
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

    const logData = {
        embeds: [{
            title: "🚨 Registro de Acceso",
            color: 0x00FF66, // Color verde como tu logo
            fields: [
                { name: "Dirección IP", value: `\`${ip}\``, inline: true },
                { name: "Servidor Destino", value: `**${server}**`, inline: true },
                { name: "Agente de Usuario", value: req.headers['user-agent'] }
            ],
            footer: { text: "Sistema de Seguridad Log-IP" },
            timestamp: new Date()
        }]
    };

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logData)
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: "Error enviando al webhook" });
    }
}
