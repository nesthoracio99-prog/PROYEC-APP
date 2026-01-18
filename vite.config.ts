import { defineConfig } from 'vite';

// base: './' = rutas relativas (ideal para GitHub Pages, subcarpetas, etc.)
export default defineConfig({
  base: './',
  server: {
    port: 5175,
    strictPort: true,
    host: true,
  },
});
