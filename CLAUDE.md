# CLAUDE.md

Guidance for Claude Code (and any other contributor) working in this
repository.

## What this project is

TT House is a **luxury editorial fashion platform** — closer to a fashion
house's digital archive or magazine than a SaaS dashboard or generic
storefront template. Every UI decision should read as considered, editorial
and restrained, not as "admin panel" or "component library demo."

**Shopify is the commerce layer only.** It powers checkout, inventory and
order data behind the scenes. It is not a design or UX reference — nothing
in this app should look, feel or be structured like a Shopify admin screen
or a generic Shopify theme.

Full rules: see `docs/development-rules.md`. Full token/visual reference:
see `docs/design-system.md`.

**Before making any UI, UX, or product decision, read
`docs/experience-bible.md`.** It is the design constitution of TT
House — the philosophy behind the tokens and rules, not a restatement
of them. Every future feature must pass its Design Test (chapter 16)
before it ships.

## Current state (Sprint 2)

This sprint establishes the **design-token foundation and project rules
only**:

- Central design tokens (colour, typography, spacing, containers,
  breakpoints, borders, motion, z-index) in `src/styles/tokens.css`.
- Tailwind v4 wiring for those tokens in `src/app/globals.css`.
- Layout primitives: `Container`, `Section`, `Stack`
  (`src/components/layout/`).
- A minimal homepage that previews the foundation.

**Not built yet:** the production Hero, primary navigation, and Shopify
Storefront integration. Do not add these speculatively — they belong to a
later sprint. Keep the homepage as a foundation preview until that sprint.

## UI terminology

Use house language in UI copy, routes, and component names — not generic
ecommerce/SaaS terms:

| Use       | Not                              |
| --------- | -------------------------------- |
| Objects   | Products, Items                  |
| Chapters  | Collections, Categories          |
| The House | About, Brand, Company            |
| Journal   | Blog, News, Articles             |
| Acquire   | Buy, Add to cart, Checkout, Shop |

## Brand colours

Only three colours exist in the digital interface:

- **TT Archive White** `#F3EFE6`
- **TT Chocolate** `#2B1F1A`
- **TT Midnight Navy** `#0D1B2A` — restrained accent only, never a primary
  surface.

**TT Burgundy must never be used in the digital interface.** Archive White
and Chocolate should form roughly 95% of any given screen; Midnight Navy is
a small mark, not a background. Never introduce a new brand colour or a raw
hex value in a component — extend `src/styles/tokens.css` instead.

## Visual constraints

- No shadcn/ui visual system or shadcn-style component conventions.
- No generic gradients, glassmorphism, or excessive/decorative shadows.
- No decorative effects for their own sake (blurs, neon glows, skeuomorphism).
- Corners stay near-square (see the radius tokens) — this is not a rounded,
  "friendly SaaS" surface.

## Working with tokens

- All design values live in `src/styles/tokens.css` as CSS custom
  properties (`--tt-*`). Tailwind utility classes are generated from these
  via the `@theme inline` block in `src/app/globals.css`.
- Never hardcode a colour, spacing value, font size, radius, duration, or
  z-index in a component. Reference an existing token or a Tailwind
  utility backed by one. If nothing fits, extend `tokens.css` — don't
  invent a one-off value inline.
- Prefer the layout primitives (`Container`, `Section`, `Stack`) over
  hand-rolled flex/width markup for page structure.

## Stack and conventions

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, no
`tailwind.config.js` (theme lives in CSS via `@theme`). See `README.md`
for setup, scripts, and import aliasing (`@/*` → `src/*`). ESLint
(`next/core-web-vitals`, `next/typescript`) owns correctness; Prettier
owns formatting.

Run before committing:

```bash
npm run lint
npm run typecheck
npm run build
```
