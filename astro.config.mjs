// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://KahnishgaSolaidurairaj.github.io',

  // Add Vite alias support (REQUIRED for GitHub build to work)
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
