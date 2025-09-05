# 📧 Configuración de EmailJS para RSVP

## ¿Qué es EmailJS?
EmailJS te permite enviar emails directamente desde tu página web a tu Gmail, sin necesidad de un servidor. Es perfecto para formularios de contacto y RSVP.

## ✅ Ventajas de EmailJS
- **200 emails/mes GRATIS** (vs 50 de Formspree)
- **Emails directos a tu Gmail** (no necesitas revisar otra plataforma)
- **Fácil de configurar** (solo 3 datos)
- **Respuesta inmediata** (recibes el email al instante)

## 🚀 Pasos para configurar EmailJS

### Paso 1: Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://www.emailjs.com)
2. Haz clic en **"Sign Up"**
3. Regístrate con tu cuenta de Gmail
4. Confirma tu email

### Paso 2: Configurar tu servicio de email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Conecta tu cuenta de Gmail (autoriza el acceso)
5. **Copia el Service ID** (algo como `service_abc123`)

### Paso 3: Crear plantilla de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura así:

**Template Name:** `RSVP Cumple Dache`

**Subject:** `Nueva confirmación de asistencia - Cumple Dache`

**Content:**
```
¡Hola!

Tienes una nueva confirmación de asistencia para tu cumpleaños:

👤 Nombre: {{from_name}}
✅ Asistencia: {{attendance}}
💬 Comentario: {{message}}

¡Que tengas una gran celebración! 🎉

---
Enviado desde tu página web de cumpleaños
```

4. **Copia el Template ID** (algo como `template_xyz789`)

### Paso 4: Obtener tu Public Key
1. Ve a **"Account"** → **"General"**
2. **Copia tu Public Key** (algo como `user_abcdef123456`)

### Paso 5: Actualizar tu código
Una vez que tengas los 3 datos, actualiza estos archivos:

#### En `script.js` (líneas 73-75):
```javascript
const serviceID = 'service_TU_SERVICE_ID_AQUI'; // Reemplazar
const templateID = 'template_TU_TEMPLATE_ID_AQUI'; // Reemplazar  
const publicKey = 'TU_PUBLIC_KEY_AQUI'; // Reemplazar
```

#### En `index.html` (línea 531):
```javascript
emailjs.init("TU_PUBLIC_KEY_AQUI"); // Reemplazar
```

## 🎯 Ejemplo de configuración completa

Si tus datos son:
- Service ID: `service_abc123`
- Template ID: `template_xyz789`
- Public Key: `user_abcdef123456`

Entonces actualizarías así:

**script.js:**
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'user_abcdef123456';
```

**index.html:**
```javascript
emailjs.init("user_abcdef123456");
```

## 🔄 Sistema de respaldo
Si EmailJS falla por cualquier razón, automáticamente usará Formspree como respaldo, así que siempre recibirás las confirmaciones.

## 📊 Límites gratuitos
- **EmailJS:** 200 emails/mes
- **Formspree:** 50 emails/mes
- **Total:** Hasta 250 confirmaciones/mes gratis

## 🧪 Probar la configuración
1. Actualiza los 3 datos en tu código
2. Abre tu página web
3. Llena el formulario RSVP
4. Envía la confirmación
5. Revisa tu Gmail - deberías recibir el email inmediatamente

## ❓ ¿Necesitas ayuda?
Si tienes problemas:
1. Revisa la consola del navegador (F12) para ver errores
2. Verifica que los 3 IDs estén correctos
3. Asegúrate de que tu Gmail esté conectado en EmailJS

¡Con esto tendrás un sistema de RSVP profesional que envía emails directamente a tu Gmail! 🎉
