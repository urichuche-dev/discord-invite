export default async function handler(req, res) {
    // 1. Capturamos la IP real del usuario a través de Vercel
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { server } = req.query; // Sabemos a qué servidor intentaba entrar

    // 2. CONFIGURA AQUÍ TU WEBHOOK DE DISCORD
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1473725067006574632/S0nmrPxaLN7Bij5Ng00dW5vsoUwCrI6JAslmTOK-f23gJoIfaYRQ1qpaGCWLtXHK2mWY";

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
