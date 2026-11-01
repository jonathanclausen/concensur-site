// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://concensur.dk',
  // WordPress served every page with a trailing slash; keep URLs identical.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'da', locales: { da: 'da-DK', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
