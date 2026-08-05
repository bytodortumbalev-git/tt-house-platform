# Shopify Storefront API integration

The Storefront API client and content mapping for Chapters (Shopify
Collections) and Objects (Shopify Products). See
`docs/shopify-architecture.md` for the full ownership model this
implements, and the doc comment at the top of
`src/lib/content/gateway.ts` for how routes actually consume it.

```
src/lib/shopify/
  config.ts        Environment/content-mode resolution
  client.ts         Typed, timeout-guarded GraphQL request helper
  errors.ts         ShopifyConfigError, ShopifyRequestError
  types.ts          Raw Storefront API response shapes (internal only)
  queries/           GraphQL query documents (Collections, Products)
src/lib/content/
  gateway.ts         Shared local/shopify/auto mode-resolution logic
  chapters.ts         Public gateway: getChapters, getChapterByHandle, getCurrentChapter
  chapters.local.ts   Local placeholder-data implementation
  chapters.shopify.ts Shopify-backed implementation
  objects.ts           Public gateway: getObjects, getObjectByHandle, getObjectsByChapter
  objects.local.ts
  objects.shopify.ts
  journal.ts           Repository-local only (see "Current limitations")
```

Route/page components only ever import from `src/lib/content/` — never
from `src/lib/shopify/` directly, and never from `src/data/` directly.

## Required environment variables

See `.env.example` at the project root. Copy it to `.env.local` (already
gitignored) and fill in real values there — never commit credentials.

| Variable                                      | Required for             | Notes                                                                 |
| --------------------------------------------- | ------------------------ | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`            | `shopify` / `auto` modes | Your `*.myshopify.com` domain, no protocol.                           |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | `shopify` / `auto` modes | See "Creating a Storefront API access token" below.                   |
| `SHOPIFY_STOREFRONT_API_VERSION`              | optional                 | Defaults to `2024-10`.                                                |
| `SHOPIFY_CONTENT_MODE`                        | optional                 | `local` (default) \| `shopify` \| `auto` — see "Content modes" below. |

**Why the `NEXT_PUBLIC_` prefix on a "secret"?** Shopify Storefront API
tokens are, by Shopify's own design, public/scoped tokens meant to be
usable from a browser (unlike Admin API tokens) — this is the standard
naming Shopify's own headless starters use. This codebase still never
sends the token to the browser: `src/lib/shopify/client.ts` is only ever
imported by server-only modules (`src/lib/content/*.shopify.ts`), which
are in turn only imported by Server Components and route files, never by
a `"use client"` component. Next.js only inlines a `NEXT_PUBLIC_` value
into code that actually ships to the browser — since that never happens
here, the prefix is inert in practice. `shopifyFetch` also throws if it
is ever somehow invoked with `window` defined, as a second guard.

## Creating a Storefront API access token

1. In Shopify Admin, go to **Settings → Apps and sales channels → Develop
   apps** (enable custom app development first if you haven't already).
2. Create an app (e.g. "TT House Storefront").
3. Under **API credentials → Storefront API**, select the scopes this
   site needs: `unauthenticated_read_product_listings`,
   `unauthenticated_read_product_inventory`,
   `unauthenticated_read_collection_listings`.
4. Install the app, then copy the **Storefront API access token** (not
   the Admin API token) into `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
5. Copy your store domain (`your-store.myshopify.com`) into
   `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`.

No Admin API token is used anywhere in this codebase — see "Scope
control" in the Sprint 7 brief and `docs/shopify-architecture.md`
("Environment and API surface").

## Content modes

Set `SHOPIFY_CONTENT_MODE` in your environment:

- **`local`** (default) — always reads `src/data/*.ts`. No credentials
  needed. This is what a fresh `git clone` gets with no `.env.local` at
  all, and what CI/build-preview environments should generally use.
- **`shopify`** — requires valid configuration. If
  `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` / `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
  are missing, every content call throws a `ShopifyConfigError` — a
  build or request in this mode fails loudly rather than silently
  serving placeholder content.
- **`auto`** — uses Shopify when configured; otherwise reads local data
  silently (this is the expected shape for local development with no
  store yet). If Shopify **is** configured but a request fails at
  runtime (outage, bad token, network error), the affected read falls
  back to local data and logs a `console.warn` — it never crashes the
  page.

## Expected Collection and Product data

A Collection/Product only renders in full TT House presentation once it
carries the Metafields below (namespace/key pairs — see
`docs/shopify-architecture.md`, "Metafield and Metaobject notation").
This sprint adds two keys not yet listed in that document:
`tt_house_chapter.number` and `tt_house.edition`.

**Collection (Chapter)** — namespace `tt_house_chapter`:

| Key              | Type                                             | Purpose                                                                                                  |
| ---------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `story`          | Multi-line text                                  | Chapter narrative. Required for the Chapter to be "published" — missing it marks the Chapter incomplete. |
| `campaign_media` | Single line text (image URL)                     | Hero/campaign image. Also required for "published" status.                                               |
| `number`         | Single line text                                 | Display number, e.g. `Chapter III`.                                                                      |
| `is_current`     | Boolean (or single line text `"true"`/`"false"`) | Feeds `getCurrentChapter()`.                                                                             |

The Chapter's public slug is always the Collection **handle** — see
`docs/information-architecture.md`.

**Product (Object)** — namespace `tt_house`:

| Key                     | Type             | Purpose                                                                                     |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| `passport_materials`    | Single line text | Object Passport "Material" row.                                                             |
| `passport_origin`       | Single line text | Object Passport "Origin" row.                                                               |
| `passport_construction` | Single line text | Object Passport "Construction" row.                                                         |
| `edition`               | Single line text | Object Passport "Edition" row (e.g. "Edition of forty, numbered on the interior placket."). |
| `editorial_copy`        | Multi-line text  | Reserved for a future editorial copy block — modeled but not yet rendered.                  |

**Price, availability and variants** come directly from the Product/Variant
data Shopify already has — no Metafields needed. **Chapter membership**
comes from Collection membership (add the Product to the matching
Collection) — exactly one Collection per Chapter, per
`docs/master-blueprint.md`.

## Current limitations

- **Archived Objects are derived from `availableForSale`, not Shopify's
  product status.** The Storefront API only ever returns
  published/active products — a Product set to Draft or Archived status
  in Shopify Admin is invisible to it entirely, and its permanent
  `/objects/[handle]` URL would 404 rather than show an archived-state
  page. To retire an Object while keeping its permanent URL and
  `ArchivedNotice` working, keep the Product **Active** and set its
  inventory to zero with "Continue selling when out of stock" turned
  off, so `availableForSale` is `false`. Using the Admin API to read the
  literal product status is out of scope for this sprint (see "Scope
  control" in the Sprint 7 brief) — a future sprint could revisit this if
  it becomes a real operational problem.
- **Journal stays repository-local.** No Shopify Metaobject integration
  for Journal entries in this sprint (see `docs/shopify-architecture.md`
  for the target design, which remains unbuilt).
- **No cart, checkout, or customer accounts.** The Object page's Acquire
  action is a disabled placeholder regardless of content mode.
- **A Chapter's "current" tie-break** (multiple Collections flagged
  `is_current`) logs a `console.warn` and picks the most recently
  updated one, per `docs/shopify-architecture.md` — it does not surface
  the conflict in the UI.
- **Media** is modeled (`Chapter.heroMedia`, `TTObject.media`) but pages
  still render `MediaPlaceholder` regardless of whether a real image URL
  is present — wiring real Shopify photography into the UI (including
  `next.config.ts` remote image config) is out of scope for this sprint.
