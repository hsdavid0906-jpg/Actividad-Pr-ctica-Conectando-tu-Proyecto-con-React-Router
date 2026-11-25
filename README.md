# Aula Norte · Práctica de React Router

Aplicación de una sola página (SPA) para practicar navegación declarativa y programática con React Router. El proyecto está construido con React y Vite y tiene interfaz en español adaptable a móvil y escritorio.

## Requisitos

- Node.js 20 o posterior recomendado
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal. Para validar la compilación de producción:

```bash
npm run build
npm run preview
```

## Rutas incluidas

| Ruta | Vista |
| --- | --- |
| `/` | Landing Page |
| `/login` | Formulario de acceso |
| `/quienes-somos` | Información del equipo |
| `/terminos` | Términos de uso |
| `/condiciones` | Condiciones del servicio |
| `/dashboard` | Panel de demostración |
| `*` | Página amigable 404 |

La aplicación usa `<BrowserRouter>` en `src/main.jsx`, `<Routes>`/`<Route>` en `src/App.jsx` y enlaces `<Link>` para la navegación interna. Al enviar el formulario en `/login`, `useNavigate()` dirige al dashboard sin recargar la página.

> **Importante:** El acceso es intencionalmente una demostración académica sin autenticación. No uses una contraseña real. Los datos no se envían ni se guardan.

## Comprobación manual sugerida

1. Desde `/`, abre Quiénes somos y regresa con «Volver al inicio».
2. Abre Términos y Condiciones desde el pie de página y vuelve al inicio.
3. En `/login`, completa ambos campos y entra al Dashboard; la URL debe cambiar a `/dashboard`.
4. Usa «Cerrar sesión» para volver a `/`.
5. Visita `/cualquier-cosa` para comprobar la página 404.
6. Usa Atrás/Adelante del navegador para revisar el historial SPA.

## Estructura

```text
src/
├── App.jsx
├── main.jsx
├── index.css
└── pages/
    ├── LandingPage.jsx
    ├── Login.jsx
    ├── Dashboard.jsx
    ├── QuienesSomos.jsx
    ├── Terminos.jsx
    ├── Condiciones.jsx
    └── NotFound.jsx
```


## Evidencia visual

Capturas generadas con el servidor local para documentar las vistas principales:

- [Landing Page](evidence/landing.png)
- [Dashboard](evidence/dashboard.png)
- [Ruta 404](evidence/not-found.png)
