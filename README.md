# Dev Stack

A responsive React + TypeScript + Vite + Tailwind CSS technology stack builder recreated from the supplied UI references.

## Run locally

```bash
npm install
npm run dev
```

Build with:

```bash
npm run build
```

## Architecture

- `src/data/technologies.json` — single source of truth for technology cards.
- `src/types/technology.ts` — TypeScript model.
- `src/components/` — focused UI components.
- `src/assets/stack-illustration.svg` — lightweight local hero illustration.
- `src/App.tsx` — loading simulation and stack state.

## Interaction flow

1. The app simulates a short JSON-loading state.
2. Technology cards render from `technologies.json`.
3. Add/remove/clear operations update React state.
4. Duplicate additions trigger a warning toast.
5. The selected stack is reflected in both card buttons and the sidebar.
