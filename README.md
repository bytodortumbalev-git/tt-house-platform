# TT House Platform

Foundation for the TT House Platform: a Next.js 15 application using the App
Router and TypeScript, styled with Tailwind CSS v4.

## Requirements

- Node.js 20+
- npm

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Build for production                     |
| `npm run start`        | Run the production build                 |
| `npm run lint`         | Run ESLint                               |
| `npm run typecheck`    | Run the TypeScript compiler (no emit)    |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Architecture

```
src/
  app/         Next.js App Router routes, layout, and global styles
  components/  Shared React components
  lib/         Framework-agnostic utilities and integrations
    shopify/   Reserved for the future Shopify Storefront API client (not yet implemented)
  types/       Shared TypeScript types
  config/      App-level configuration (e.g. site metadata)
```

Absolute imports are configured via the `@/*` alias (see `tsconfig.json`),
resolving to `src/*`. For example: `import { siteConfig } from "@/config/site"`.

### Styling

Tailwind CSS v4 is configured via `@import "tailwindcss"` and the `@theme`
block in `src/app/globals.css` — there is no `tailwind.config.js`. Design
tokens (colours, typography, spacing, containers, breakpoints, borders,
motion, z-index) live in `src/styles/tokens.css` and are documented in
[`docs/design-system.md`](docs/design-system.md). Reusable layout
primitives (`Container`, `Section`, `Stack`) live in
`src/components/layout/`.

### Project rules

See [`CLAUDE.md`](CLAUDE.md) and
[`docs/development-rules.md`](docs/development-rules.md) for the project's
positioning, UI terminology, and visual/scope rules before adding
features.

### Linting and formatting

ESLint uses `eslint-config-next` for Next.js/React/TypeScript rules, with
`eslint-config-prettier` layered on top to disable stylistic rules that would
conflict with Prettier. Prettier owns all formatting; ESLint owns correctness.

### Shopify Storefront API (planned)

The project is structured to add a Shopify Storefront API integration later,
but no Shopify code exists yet:

- `src/lib/shopify/` is reserved for the API client, queries, and types.
- `.env.example` documents the environment variables (`SHOPIFY_STORE_DOMAIN`,
  `SHOPIFY_STOREFRONT_ACCESS_TOKEN`) that integration will need.

## Deployment

Any Next.js-compatible host works. See the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
