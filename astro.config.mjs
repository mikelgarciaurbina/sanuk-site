import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER: aún no hay dominio. Cámbialo cuando exista (se usa para canonical y og:url).
  site: 'https://sanuk.example',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
