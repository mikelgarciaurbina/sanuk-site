// Copia la fuente única de la marca desde la app (app/src/brand) a site/src/brand.
// Si la app no está presente (p. ej. CI que solo clona site/), usa las copias ya existentes.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const from = resolve(here, '../../app/src/brand');
const to = resolve(here, '../src/brand');
mkdirSync(to, { recursive: true });

for (const f of ['noi-art.ts', 'tokens.ts']) {
  const src = resolve(from, f);
  if (existsSync(src)) {
    copyFileSync(src, resolve(to, f));
    console.log(`sync-brand: ${f} copiado desde app/src/brand`);
  } else if (existsSync(resolve(to, f))) {
    console.log(`sync-brand: ${f} no está en la app; se usa la copia local`);
  } else {
    console.error(`sync-brand: falta ${f}`);
    process.exit(1);
  }
}
