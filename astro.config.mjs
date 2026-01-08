import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/sueroterapia-2': '/sueroterapia',
    '/productos-post-operatorio': '/productos-postoperatorio'
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@styles': path.resolve(__dirname, './src/styles')
      }
    }
  }
});
