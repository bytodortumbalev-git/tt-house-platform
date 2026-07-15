# TT House Master Blueprint

Sprint 3 deliverable. This is the top-level reference for what TT House
is, how the platform is structured, and how work is sequenced across
sprints. It sits above the other Sprint 3 documents and links out to them
rather than repeating their detail:

- [`docs/information-architecture.md`](./information-architecture.md) —
  every page, its responsibility, and its URL.
- [`docs/component-map.md`](./component-map.md) — the reusable component
  hierarchy and responsive templates.
- [`docs/shopify-architecture.md`](./shopify-architecture.md) — how
  Shopify, Next.js and this repository each own data.
- [`docs/roadmap.md`](./roadmap.md) — v1.0 scope, deferred features, and
  sprint sequencing.

This document does not introduce new rules that contradict `CLAUDE.md`,
`docs/design-system.md`, or `docs/development-rules.md`. Where anything
here appears to conflict with those three, the earlier documents win.

## What TT House is

TT House is a luxury editorial fashion platform: a fashion house's digital
archive and magazine, with commerce running quietly underneath it. It is
never described as a SaaS platform, a dashboard, or a storefront template
— not in this document, not in UI copy, not in code comments.

**Shopify is the commerce layer only.** It is the system of record for
checkout, inventory, price, variants and order data, and it remains the
daily operational tool for the team running the business. It is not a
design reference, an information-architecture reference, or a source of
UI terminology. TT House (this repository, the Next.js frontend) is the
system of record for editorial presentation, archive structure, and house
narrative.

## The five sections

The platform has five top-level sections, matching primary navigation:

1. **Home** — the current entry point. Presents whatever is most current
   (a Chapter, collaboration, show, editorial or announcement), then
   surfaces the Current Chapter, Featured Objects, Journal highlights, and
   a preview of The House.
2. **The House** — brand narrative: About, Founder, Manifesto,
   Collaborations, Shows, PR events, and magazine/press features.
3. **Chapters** — the curated, editorial groupings of Objects. A Chapter
   archive plus individual Chapter pages, each carrying a campaign,
   editorial story, and its associated Objects. Shopify Collections are
   the underlying product containers; the visible pages are entirely
   TT House-designed.
4. **Objects** — the individual archive pieces. A directory plus
   individual Object pages. Shopify owns media, price, variants,
   inventory and checkout for each Object; TT House owns editorial
   presentation, the Object Passport, materials, Chapter/Family
   assignment, and archive content.
5. **Journal** — editorial articles: designer notes, process, materials,
   collaborations, atelier stories.

**Contact** is a sixth, lighter-weight top-level page (general enquiries,
press, collaborations, custom projects, studio appointments, social
links) — present in navigation but not treated as a content pillar the
way the five sections above are.

Full page-by-page detail, including URLs and responsibilities, lives in
`docs/information-architecture.md`.

## Navigation

Primary navigation, left to right:

```
[TT logo]   The House   Chapters   Objects   Journal   Contact
```

No sub-navigation is specified in Sprint 3. Any dropdown/mega-menu
structure is a UI decision for the sprint that builds primary navigation
— see `docs/roadmap.md`.

## Core terminology

House language is mandatory in UI copy, route names, component names, and
prop names. This restates (does not replace) the terminology table in
`CLAUDE.md` and `docs/development-rules.md`, with the two additions this
sprint introduces:

| Use                | Not                                   |
| ------------------ | ------------------------------------- |
| Object             | Product                               |
| Chapter            | Collection (in the visible interface) |
| The House          | About Us                              |
| Journal            | Blog, News, Articles                  |
| Acquire            | Buy, Add to Cart, Checkout, Shop      |
| Continue Exploring | Related Products                      |

"Collection" remains the correct term for the underlying Shopify object
and may appear in code (variable names, Shopify API calls, Shopify Admin
context) — it must never appear in UI copy or route segments.

## Technical principles

These hold across every sprint from here forward:

- **Next.js is the frontend.** All rendering, routing and editorial
  presentation logic lives in this repository.
- **Shopify is the commerce layer**, accessed via the Storefront API (and
  Admin API where a server-side/administrative action is required). It is
  never the design or UX reference.
- **Shopify Admin remains the daily operational interface** for the team
  — inventory, fulfilment, order management, and day-to-day product
  upkeep happen there, not in a custom admin UI built in this repo.
- **Shopify Collections organize Chapters and product groupings.** Every
  Chapter maps to (at least) one Shopify Collection; a Collection is the
  product-container primitive, a Chapter is the editorial page built on
  top of it.
- **Shopify Metafields and Metaobjects hold structured TT House data**
  that needs to live alongside commerce data — Object Passport fields,
  Chapter editorial metadata, Family assignment, and similar. See
  `docs/shopify-architecture.md` for the full ownership model.
- **No separate CMS in v1.0.** Editorial content is authored via Shopify
  Metafields/Metaobjects and, where noted in the IA, repository-level
  content. The architecture must not foreclose introducing a headless CMS
  later — see "CMS-readiness" below and `docs/roadmap.md`.
- **Permanent Object URLs.** An Object's URL must remain resolvable even
  after the Object is archived, discontinued, or out of stock. Archived
  Objects render an archive/unavailable state at their permanent URL
  rather than 404ing or redirecting away.
- **This repository's documentation is the source of truth for permanent
  house rules** — positioning, terminology, visual constraints, and the
  architecture decisions in these five documents. Shopify Admin
  configuration (Collection names, product data entry conventions, etc.)
  must follow this documentation, not the other way around.

## CMS-readiness

"No separate CMS in v1.0" is a scope decision, not an architectural dead
end. To keep a future CMS introduction low-risk:

- All content-reading code goes through a data-access boundary
  (`src/lib/content/` or equivalent, defined when Chapters/Journal are
  built) rather than calling the Shopify Storefront API directly from
  page components. Swapping or supplementing the data source later means
  changing that boundary, not every page.
- Content shapes (an Object Passport, a Chapter's editorial fields, a
  Journal entry) are defined as TypeScript types independent of where the
  data currently lives (Shopify Metafield vs. future CMS field). Pages
  consume the type, not the storage mechanism.
- Journal is the most likely first candidate for a future CMS, since it
  is the least commerce-adjacent content type. Nothing in Sprint 3 should
  make Journal harder to migrate later (e.g. don't model Journal entries
  as Shopify Metaobjects tied to product data if a simpler, storage-agnostic
  shape works).

No CMS integration, adapter, or abstraction is built in Sprint 3. This
section is a constraint on how later sprints write data-access code, not
a task for this sprint.

## Non-goals for this document

Per the Sprint 3 brief, this and the other four documents:

- Define architecture and content ownership; they do not add application
  code.
- Do not install packages.
- Do not change `src/styles/tokens.css` or any existing design token.

Any code, routes, or components implied by this blueprint are built in
later sprints per the sequencing in `docs/roadmap.md`.
