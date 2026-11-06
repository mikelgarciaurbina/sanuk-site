# Sanuk · web

La web de [Sanuk](https://github.com/mikelgarciaurbina/sanuk-app), la app para aprender thai desde el español: landing (`/`), catálogo de juegos (`/juegos`) y design system con su historia (`/design-system`). Astro 7, todo estático.

```bash
npm install
npm run dev             # http://localhost:4321
npm run build           # estático en dist/
npm run check           # comprueba tipos y plantillas
```

## La marca viene de la app

El dibujo de Noi y los tokens del design system tienen una sola fuente: `src/brand` del repo de la app. Antes de cada `dev` y `build`, `scripts/sync-brand.mjs` los copia a `src/brand` si el repo de la app está al lado, en `../app` (la carpeta del proyecto tiene `app/` y `site/` juntas). Si no está, por ejemplo en un servidor que solo clona este repo, usa las copias de `src/brand`, que también están en el repo.
