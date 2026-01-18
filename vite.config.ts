import { defineConfig } from 'vite';

export default defineConfig({
  // ✅ Rutas relativas (GitHub Pages / subcarpeta / deploy)
  base: './',

  // ✅ Target moderno (evita broncas con "top-level await")
  build: {
    target: 'esnext',
  },
  esbuild: {
    target: 'esnext',
  },

  // ✅ Dev server fijo
  server: {
    port: 5175,
    strictPort: true,
    host: true,
  },
});
