# Portafolio — React + Vite + Express

Plantilla creada para un Portafolio de programador, realizado por su servidor Estuardo Gómez

- **Frontend:** React + Vite (JavaScript puro, sin TypeScript) + Tailwind CSS + React Router DOM + Framer Motion (animaciones) + lucide-react (iconos)
- **Backend:** Node.js + Express (opcional, sirve los mismos datos vía API)
- **Gestor de paquetes:** pnpm
- **Datos:** todos editables en archivos `.json` dentro de `src/data/`, no hay que tocar código para cambiar contenido
- **Tema claro/oscuro:** funcional, con botón en la barra de navegación y persistencia en `localStorage`
- Sin ningún logo ni marca de terceros: el círculo con iniciales, la insignia rotatoria y la ilustración decorativa son elementos genéricos 100% tuyos y editables.

## Estructura

```
portfolio/
├── index.html
├── package.json
├── vite.config.js          # incluye proxy /api -> http://localhost:4000
├── tailwind.config.js
├── postcss.config.js
├── server/
│   └── index.js             # backend Express (opcional)
├── src/
│   ├── main.jsx
│   ├── App.jsx               # rutas
│   ├── index.css
│   ├── data/
│   │   ├── profile.json      # datos de Inicio
│   │   ├── about.json        # datos de Sobre mí
│   │   ├── projects.json     # datos de Proyectos
│   │   └── articles.json     # datos de Artículos
│   ├── context/
│   │   └── ThemeContext.jsx  # tema claro/oscuro
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   ├── CornerCrosses.jsx
│   │   ├── ImagePlaceholder.jsx
│   │   ├── RotatingBadge.jsx  # insignia circular rotatoria
│   │   ├── BulbIllustration.jsx
│   │   ├── SocialIcons.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SkillsOrbit.jsx    # skills en anillos concéntricos
│   │   └── Timeline.jsx       # experiencia / educación
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       └── Articles.jsx
```

## Instalación

```bash
pnpm install
```

## Desarrollo (solo frontend, datos leídos directo de los JSON)

```bash
pnpm dev
```

Abre http://localhost:5173

## Desarrollo con backend Express (opcional)

Si quieres que el frontend consuma los datos vía API en lugar de importar los JSON directamente:

```bash
# Terminal 1
pnpm server

# Terminal 2
pnpm dev
```

El proxy configurado en `vite.config.js` redirige `/api/*` hacia `http://localhost:4000`.

> Por ahora, las páginas importan los JSON directamente (`import profile from "../data/profile.json"`), que es la forma más simple. El backend queda listo por si luego prefieres hacer `fetch("/api/profile")` en vez de importar el archivo.

## Cómo editar el contenido

Todo el contenido vive en `src/data/*.json`. Por ejemplo, para cambiar tu nombre y resumen en el Home, edita `src/data/profile.json`.

## Cómo agregar tus imágenes

Cada entrada en los JSON tiene un campo `"image"` o `"photo"` vacío (`""`). Mientras esté vacío, se muestra un placeholder con borde punteado. Para agregar una imagen:

1. Coloca el archivo en `public/` (ej. `public/foto-perfil.jpg`)
2. En el JSON correspondiente, pon `"photo": "/foto-perfil.jpg"`

No se incluyó ningún logo ni marca de terceros — el círculo con iniciales en la barra de navegación (`profile.initials` en `profile.json`) es 100% tuyo y editable.

## Build de producción

```bash
pnpm build
pnpm preview
```
