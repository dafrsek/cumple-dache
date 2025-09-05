# 📊 Google Sheets - Configuración Súper Fácil

## ¿Por qué Google Sheets?
- ✅ **SIN LÍMITES** de respuestas
- ✅ **Fácil de ver** todos los datos en una tabla
- ✅ **Fácil de exportar** a Excel
- ✅ **Configuración en 5 minutos**
- ✅ **Gratis** para siempre

## 🚀 Configuración en 3 pasos simples

### Paso 1: Crear tu Google Sheet
1. Ve a [sheets.google.com](https://sheets.google.com)
2. Haz clic en **"Blank"** para crear una hoja nueva
3. Ponle nombre: **"RSVP Cumple Dache"**
4. En la primera fila, escribe estos títulos:
   - A1: `Fecha y Hora`
   - B1: `Nombre`
   - C1: `Asistencia`
   - D1: `Comentario`

### Paso 2: Crear el script de Google Apps Script
1. En tu Google Sheet, ve a **"Extensions"** → **"Apps Script"**
2. Borra todo el código que aparece
3. Copia y pega este código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja de cálculo
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Agregar una nueva fila con los datos
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.attendance,
      data.comment
    ]);
    
    // Respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Haz clic en **"Save"** (Ctrl+S)
5. Ponle nombre al proyecto: **"RSVP Handler"**

### Paso 3: Desplegar el script
1. Haz clic en **"Deploy"** → **"New deployment"**
2. En **"Type"**, selecciona **"Web app"**
3. En **"Execute as"**, selecciona **"Me"**
4. En **"Who has access"**, selecciona **"Anyone"**
5. Haz clic en **"Deploy"**
6. **Copia el Web App URL** (algo como: `https://script.google.com/macros/s/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/exec`)

### Paso 4: Actualizar tu código
En el archivo `script.js`, línea 73, reemplaza:

```javascript
const SHEET_ID = 'tu_sheet_id_aqui';
```

Por:

```javascript
const SHEET_ID = 'TU_WEB_APP_URL_AQUI';
```

**Ejemplo:**
```javascript
const SHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
```

## 🎯 ¡Listo!

Ahora cada vez que alguien llene el formulario RSVP:
1. Los datos se guardarán automáticamente en tu Google Sheet
2. Verás una nueva fila con: fecha, nombre, asistencia y comentario
3. Puedes exportar todo a Excel cuando quieras

## 📊 Ventajas de Google Sheets:
- **Ilimitado:** Sin límites de respuestas
- **Organizado:** Todos los datos en una tabla clara
- **Accesible:** Puedes ver los datos desde cualquier dispositivo
- **Exportable:** Fácil exportar a Excel o PDF
- **Colaborativo:** Puedes compartir el Sheet con otros si quieres

## 🔄 Sistema de respaldo:
Si Google Sheets falla por cualquier razón, automáticamente usará Formspree como respaldo.

## 🧪 Probar:
1. Actualiza el SHEET_ID en tu código
2. Abre tu página web
3. Llena el formulario RSVP
4. Envía la confirmación
5. Ve a tu Google Sheet - deberías ver una nueva fila

¡Es súper fácil y sin límites! 🎉
