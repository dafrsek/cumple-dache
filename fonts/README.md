# 🎨 Configuración de Fuentes - Cumple Dache

## 📝 Fuentes Utilizadas

### 🥇 Outrunner (Principal)
- **Uso**: Títulos principales, nombres de eventos
- **Estilo**: Script cursiva retro, glam disco
- **Descarga**: [dafontfree.io/outrunner-retro-script-font/](https://www.dafontfree.io/outrunner-retro-script-font/)
- **Archivos necesarios**:
  - `Outrunner.woff2` (recomendado)
  - `Outrunner.woff` (fallback)
  - `Outrunner.ttf` (fallback)

### 🥈 Orbitron (Secundaria)
- **Uso**: Texto del cuerpo, detalles, formularios
- **Estilo**: Futurista, tecnológica, perfecta para estética ochentera
- **Fuente**: Google Fonts (ya configurada)

## 🔧 Instalación de Outrunner

### Opción 1: Archivo de fuente
1. Descarga el archivo `Outrunner.ttf` o `Outrunner.woff2`
2. Colócalo en esta carpeta (`fonts/`)
3. El sitio lo cargará automáticamente

### Opción 2: CDN (si está disponible)
Si Outrunner está disponible en un CDN, actualiza el CSS en `index.html`:

```html
<link href="URL_DEL_CDN" rel="stylesheet">
```

### Opción 3: Google Fonts (alternativa)
Si no tienes Outrunner, puedes usar una alternativa similar:

```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
```

Y cambiar en `styles.css`:
```css
.font-outrunner {
    font-family: 'Dancing Script', cursive;
}
```

## 📁 Estructura de Archivos
```
fonts/
├── README.md
├── Outrunner.woff2    (agregar cuando tengas la fuente)
├── Outrunner.woff     (agregar cuando tengas la fuente)
└── Outrunner.ttf      (agregar cuando tengas la fuente)
```

## 🎯 Notas Importantes
- Outrunner es gratuita para uso personal y comercial
- Orbitron está disponible gratuitamente en Google Fonts
- El sitio funcionará sin Outrunner, pero con menos estilo ochentero
- Para mejor performance, usa formato WOFF2 cuando sea posible 