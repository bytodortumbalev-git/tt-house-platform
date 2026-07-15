# TT House Development Rules

Project rules for anyone (human or agent) building on TT House. These
govern positioning, terminology, and scope; see `docs/design-system.md`
for the visual token reference.

## Positioning

TT House is a **luxury editorial fashion platform** — think a fashion
house's digital archive or magazine, not a SaaS product or a generic
ecommerce storefront. Every feature, layout, and interaction should be
judged against that: does it feel like an archive/editorial experience, or
does it feel like an admin tool or a template store?

Concretely, avoid patterns borrowed from SaaS dashboards: dense data
tables as a primary UI, sidebar app-shell navigation, badge/pill-heavy
status UI, card-grid "product tiles" with SaaS-style hover chrome. Favour
generous whitespace, editorial typography hierarchy, and restraint.

## Shopify is the commerce layer only

Shopify (via the Storefront API, once integrated — see
`src/lib/shopify/README.md`) exists to power checkout, inventory, and
order data. It is infrastructure, not a design reference.

- Do not model UI, routes, or terminology after Shopify's admin or default
  theme conventions.
- Do not expose Shopify concepts (e.g. "variants," "collections" as a raw
  term, "cart") directly in UI copy — translate through the house
  terminology below.
- Storefront integration itself is out of scope for this sprint (see
  "Sprint boundaries").

## UI terminology

Use these house terms in UI copy, route segments, and component/prop
names. Do not reach for the generic ecommerce/SaaS equivalents.

| House term    | Replaces                | Notes                                               |
| ------------- | ----------------------- | --------------------------------------------------- |
| **Objects**   | Products, Items         | An individual piece in the archive.                 |
| **Chapters**  | Collections, Categories | A curated grouping of Objects.                      |
| **The House** | About, Brand, Company   | Brand/company narrative pages.                      |
| **Journal**   | Blog, News, Articles    | Editorial content.                                  |
| **Acquire**   | Buy, Add to cart, Shop  | The call to action around commerce/checkout intent. |

If a new concept needs a name, pick something in this same editorial
register rather than defaulting to ecommerce boilerplate — and add it to
this table.

## Visual restrictions

Enforced by the token system in `docs/design-system.md`, but stated
explicitly as rules:

- **No shadcn/ui visual system.** Don't adopt its component conventions,
  default styling, or visual language.
- **No generic gradients, glassmorphism, or excessive/decorative
  shadows.** Flat, considered surfaces only.
- **No decorative effects for their own sake** — no neon glows, skeuomorphic
  textures, or animation added purely for flourish.
- **No new brand colours.** Only TT Archive White, TT Chocolate, and TT
  Midnight Navy exist. TT Burgundy is retired from the digital interface
  and must never be reintroduced. Archive White and Chocolate should form
  ~95% of any screen; Midnight Navy is a restrained accent, never a
  primary surface.

## Sprint boundaries (current: Sprint 2)

Sprint 2 delivers the design-token foundation, project rules, and layout
primitives — nothing more. Explicitly out of scope, do not build
speculatively:

- The production **Hero** section.
- Primary **navigation**.
- **Shopify Storefront API** integration (client, queries, cart/Acquire
  flow).

The homepage in this sprint is a minimal foundation preview only — it
exists to demonstrate the tokens and layout primitives, not to be the
final homepage. When later sprints build the real Hero/nav/Shopify
integration, they should replace this preview rather than build alongside
it.

## Code conventions

- Next.js 15 App Router + TypeScript + Tailwind CSS v4. No
  `tailwind.config.js` — theme lives in CSS (`@theme`) in
  `src/app/globals.css`, sourced from `src/styles/tokens.css`.
- Absolute imports via `@/*` → `src/*` (see `tsconfig.json`).
- ESLint (`next/core-web-vitals`, `next/typescript`) owns correctness;
  Prettier owns formatting — don't fight Prettier with manual formatting.
- Never hardcode a colour, spacing value, font size, radius, duration, or
  z-index in a component. Use an existing token/utility, or extend
  `src/styles/tokens.css` if genuinely new.
- Prefer the `Container` / `Section` / `Stack` layout primitives
  (`src/components/layout/`) over hand-rolled structural markup.
- Don't add abstractions, dependencies, or scaffolding beyond what the
  current sprint's task requires.

Before committing:

```bash
npm run lint
npm run typecheck
npm run build
```
