import { defineConfig } from 'astro/config';

// SITE_URL permite sobreescribir el dominio público en otros entornos.
const site = process.env.SITE_URL ?? 'https://sanuk.overlayon.com';
if (site) {
  const url = new URL(site);
  if (url.protocol !== 'https:' || url.hostname.endsWith('.example') || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL debe ser un origen HTTPS real, sin ruta, query ni fragmento.');
  }
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
