import { defineConfig } from 'vite';

// base: './' = rutas relativas (ideal para GitHub Pages, subcarpetas, etc.)
export default defineConfig({
  base: './',

  // ✅ Fix para "Top-level await is not available..."
  build: {
    target: 'es2022', // (o 'esnext' si quieres lo más flexible)
  },
  esbuild: {
    target: 'es2022',
  },

  server: {
    port: 5175,
    strictPort: true,
    host: true,
  },
});
