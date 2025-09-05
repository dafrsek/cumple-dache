# 🎉 Cumple Dache - Sitio de Invitación Ochentera

Un sitio web de una sola página (SPA) con estética ochentera para invitar a un cumpleaños. Diseñado con colores neón, animaciones retro y completamente responsive.

## ✨ Características

- 🎨 **Estética Ochentera**: Colores neón, efectos de luz y animaciones retro
- 📱 **Mobile-First**: Completamente responsive y optimizado para móviles
- ⏰ **Contador Regresivo**: Cuenta regresiva dinámica hasta el evento
- 📝 **Formulario RSVP**: Integración con Formspree para confirmaciones
- 🎵 **Efectos Interactivos**: Sonidos, vibraciones y animaciones
- 🌟 **Efectos Visuales**: Partículas, confeti y efectos neón

## 🚀 Instalación

1. **Clona o descarga** los archivos del proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** El sitio está funcionando localmente

## ⚙️ Configuración

### Formspree (Formulario RSVP)

Para que el formulario funcione correctamente:

1. Ve a [Formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Copia tu endpoint (algo como `xqkndvzw`)
5. Abre `script.js` y reemplaza `TU_ENDPOINT_FORMSPREE` con tu endpoint real:

```javascript
// En script.js, línea 67
const response = await fetch('https://formspree.io/f/TU_ENDPOINT_FORMSPREE', {
```

Cambia por:

```javascript
const response = await fetch('https://formspree.io/f/xqkndvzw', {
```

### Google Maps

Para integrar el mapa real:

1. Ve a [Google Maps Platform](https://developers.google.com/maps)
2. Crea un proyecto y obtén una API key
3. Reemplaza el placeholder en la sección de detalles del evento con:

```html
<iframe 
    width="100%" 
    height="300" 
    frameborder="0" 
    style="border:0" 
    src="https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=Parque+Centenario,Maicao,La+Guajira" 
    allowfullscreen>
</iframe>
```

### Personalización

#### Cambiar Fecha del Evento

En `script.js`, línea 2:

```javascript
const targetDate = new Date('2025-10-11T20:00:00');
```

#### Cambiar Colores Neón

En `styles.css`, variables CSS:

```css
:root {
    --neon-pink: #FF5CFF;
    --neon-green: #39FF14;
    --neon-cyan: #00FFFF;
    --neon-purple: #8A2BE2;
    --neon-orange: #FF6B35;
    --neon-yellow: #FFFF00;
}
```

#### Agregar Imágenes Reales

1. Reemplaza los placeholders en el HTML con imágenes reales
2. Agrega las URLs en `script.js` para preload:

```javascript
const imageUrls = [
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
];
```

## 📁 Estructura del Proyecto

```
cumple-dache/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🎨 Secciones del Sitio

1. **Hero**: Pantalla completa con título y elementos decorativos
2. **Detalles del Evento**: Fecha, lugar, dress code y moodboard
3. **Cuenta Regresiva**: Contador dinámico hasta el evento
4. **Mensaje Personal**: Sección con ícono de regalo
5. **Galería**: Grid de imágenes ochenteras
6. **RSVP**: Formulario de confirmación de asistencia

## 🌐 Despliegue

### GitHub Pages (Gratis)

1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://tuusuario.github.io/turepo`

### Netlify (Gratis)

1. Ve a [Netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará disponible inmediatamente

### Vercel (Gratis)

1. Ve a [Vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Despliega automáticamente

## 📱 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Móviles (iOS/Android)
- ⚠️ Internet Explorer (limitado)

## 🎯 Optimizaciones

- **Performance**: Lazy loading de imágenes
- **SEO**: Meta tags optimizados
- **Accesibilidad**: Navegación por teclado
- **PWA**: Listo para convertir en app

## 🔧 Personalización Avanzada

### Agregar Música de Fondo

```html
<!-- En index.html, después del body -->
<audio id="bgMusic" loop>
    <source src="path/to/your/music.mp3" type="audio/mpeg">
</audio>
```

### Cambiar Fuentes

En `index.html`, cambia las fuentes de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Agregar Más Animaciones

En `styles.css`, puedes agregar más keyframes:

```css
@keyframes tu-animacion {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

## 🐛 Solución de Problemas

### El formulario no envía
- Verifica que hayas configurado correctamente Formspree
- Revisa la consola del navegador para errores

### Las animaciones son lentas
- En móviles, las animaciones se reducen automáticamente
- Puedes desactivarlas completamente en `styles.css`

### El contador no funciona
- Verifica que la fecha en `script.js` sea correcta
- Asegúrate de que el formato sea `YYYY-MM-DDTHH:MM:SS`

## 📞 Soporte

Si tienes problemas o quieres personalizar algo específico:

1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén en la misma carpeta
3. Asegúrate de que el servidor web esté funcionando

## 🎉 ¡Disfruta tu fiesta!

El sitio está listo para compartir. ¡Que sea una noche legendaria! 🕺💃

---

*Creado con ❤️ y estética ochentera* 