# discord-invite
¡Claro! Aquí tienes una documentación profesional y un `README.md` listo para copiar en tu repositorio de GitHub. He estructurado todo para que cualquier colaborador (o tú mismo en el futuro) entienda cómo funciona el sistema de un vistazo.

---

### Estructura de Archivos Recomendada

Para que todo funcione con los scripts que hemos diseñado, tu proyecto debería verse así:

| Carpeta/Archivo | Función |
| --- | --- |
| `/api/log.js` | El "cerebro" que captura la IP y la envía al Webhook. |
| `/assets/` | Donde guardarás el `logo.png` y otros recursos visuales. |
| `/legal/` | Contiene `tos.html` y `privacy.html`. |
| `/servidor-ejemplo/` | Carpeta con el `index.html` de cada servidor específico. |
| `index.html` | La página de inicio principal. |
| `404.html` | La página de error personalizada. |
| `vercel.json` | Configuración de rutas y URLs limpias. |

---

### Contenido para tu `README.md`

Copia el siguiente bloque de código en un archivo llamado `README.md` en la raíz de tu proyecto:

```markdown
# 🌐 Discord Invite Portal & IP Tracker

Un sistema de redirección personalizado para invitaciones de Discord, diseñado para ser desplegado en **Vercel**. Permite mostrar embeds estéticos en Discord, redirigir usuarios automáticamente y mantener un registro de seguridad mediante capturas de IP enviadas vía Webhook.

## ✨ Características

- 🎨 **Embeds Personalizados:** Control total sobre el título, descripción e imagen que aparece en Discord.
- 🚀 **Redirección Inteligente:** Delay de 1.5s con animaciones SVG para una transición fluida.
- 🛡️ **Seguridad (IP Logging):** Registro automático de direcciones IP enviado a un canal privado de Discord mediante Webhooks.
- 📂 **Multi-Servidor:** Estructura basada en carpetas para gestionar múltiples comunidades.
- ⚖️ **Legal Ready:** Incluye plantillas de Términos de Servicio y Política de Privacidad.

## 🚀 Instalación y Despliegue

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/tu-repo.git](https://github.com/tu-usuario/tu-repo.git)

```

2. **Configurar Variables de Entorno en Vercel:**
Es vital para la seguridad no exponer el Webhook en el código. En el panel de Vercel, añade:
* `DISCORD_WEBHOOK`: La URL del Webhook de tu canal de seguridad.


3. **Desplegar:**
Simplemente haz un `git push` a tu rama principal o conecta tu repo a Vercel.

## 🛠️ Cómo añadir un nuevo servidor

1. Crea una nueva carpeta con el nombre de la URL deseada (ej: `/mi-comunidad`).
2. Copia el archivo `index.html` base en esa carpeta.
3. Edita los Meta Tags para el embed y cambia la URL de redirección en el script:
```javascript
window.location.href = "[https://discord.gg/TU_CODIGO](https://discord.gg/TU_CODIGO)";

```



## 📋 Requisitos Legales

Este sistema registra la dirección IP de los usuarios por motivos de seguridad. Para cumplir con normativas como el **RGPD**:

* Se ha incluido una **Política de Privacidad** en `/legal/privacy`.
* Se recomienda mantener el banner de advertencia en el pie de página del portal.

## 🛠️ Tecnologías utilizadas

* **Frontend:** HTML5, CSS3 (Animaciones SVG), JavaScript.
* **Backend:** Vercel Serverless Functions (Node.js).
* **Integración:** Discord Webhooks API.

---

Creado con ❤️ para comunidades de Discord.

```

---

### Guía de Mantenimiento

Aquí te dejo unos puntos clave para gestionar el sistema una vez esté en línea:

1.  **Rotación de Webhooks:** Si sospechas que alguien ha descubierto tu URL de Webhook, simplemente elimínalo en Discord, crea uno nuevo y actualiza la Variable de Entorno en Vercel. No necesitas tocar el código.
2.  **Logs de Vercel:** Si el Webhook falla, puedes entrar a la pestaña "Runtime Logs" en el dashboard de Vercel para ver si hay errores en la función `/api/log.js`.
3.  **Caché de Discord:** Si cambias la imagen de un servidor y Discord sigue mostrando la vieja, recuerda usar el truco de añadir un parámetro al final de la URL en el chat (ej: `tu-web.com/servidor?v=2`).

### Un último consejo de "pro"
Si vas a manejar muchos servidores (más de 10), el sistema de carpetas se volverá un poco caótico. En ese caso, lo ideal sería mover toda la configuración a un archivo JSON centralizado, pero para empezar, la estructura de carpetas es la más robusta y fácil de entender.

**¿Te gustaría que te prepare un archivo `package.json` por si quieres añadir dependencias de Node.js en el futuro?**

```
