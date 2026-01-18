# Visor CCTV — versión Vite + TypeScript (arranque)

Este folder es la **evolución inteligente** del visor: seguimos usando tu motor 3D actual, pero ahora tenemos:

- **Vite** para desarrollo rápido (hot reload)
- **TypeScript** para crecer sin romper cosas
- `public/` para tus archivos JSON/imágenes como siempre (scene.json, camera_plan.json, ground.jpg, etc.)

## Requisitos
- Node.js 18+ (recomendado 20+)

## Arrancar en local
```bash
npm install
npm run dev
```

Vite te dará una URL local (por ejemplo `http://localhost:5173/`).

## Build (para publicar)
```bash
npm run build
npm run preview
```

> En esta etapa, `index.html` todavía contiene el script actual.
> La siguiente etapa es **migrar ese script a `src/`** por módulos (sin perder funcionalidad).

## Qué sigue (Roadmap por etapas)
1) **Extraer el “estado” a TypeScript** (`state.ts`): scale, per, bld, cams.
2) **Extraer IO** (`io.ts`): autosave, export/import, default_state.
3) **Extraer UI** (`ui/`): Modo Fácil/Pro, toasts, undo.
4) Opcional: empaquetar como **PWA** (instalable y offline real).
