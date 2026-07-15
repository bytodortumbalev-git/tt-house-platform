# TT House Roadmap

v1.0 scope, deferred features, and the development sequence for sprints
after Sprint 3. This is the reference for "is this in scope" and "which
sprint builds this" — the architecture itself lives in the other four
Sprint 3 documents.

## Sprint history

| Sprint | Delivered                                                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | Initial TT House platform foundation (Next.js/TypeScript/Tailwind scaffold).                                                             |
| 2      | Design-token foundation, project rules, layout primitives (`Container`/`Section`/`Stack`), minimal homepage preview.                     |
| 3      | Master blueprint: information architecture, component map, Shopify architecture, this roadmap. Documentation only — no application code. |

## v1.0 scope

Everything in `docs/information-architecture.md` is in scope for v1.0
unless explicitly listed under "Deferred beyond v1.0" below:

- Home (dynamic hero, Current Chapter, Featured Objects, Journal
  highlights, The House preview)
- The House (About, Founder, Manifesto, Collaborations, Shows, Press —
  including PR events folded into Press)
- Chapters (archive + individual pages)
- Objects (directory + individual pages, Object Passport, Acquire flow,
  permanent archived-Object URLs)
- Journal (index + individual entries)
- Contact (single page, all six channels)
- Primary navigation and footer
- Shopify Storefront API integration (Products, Collections, Metafields,
  Metaobjects, Cart/Checkout)

## Deferred beyond v1.0

Explicitly out of scope until a future decision reopens them. Not built
speculatively in any v1.0 sprint:

- **Separate CMS.** v1.0 uses Shopify Metafields/Metaobjects plus
  repository-static content, per `docs/shopify-architecture.md`. The
  content data-access boundary keeps this reversible, but no CMS
  integration is built now.
- **Search, filtering, sorting and faceted navigation.** No site search
  UI, and the Objects directory carries no filter/sort/facet controls in
  v1.0; Object/Chapter/Journal discovery happens via browsing and
  navigation only (see `docs/information-architecture.md`).
- **Family browsing pages.** Family is cross-reference-only in v1.0
  (used by "Continue Exploring"); no `/families/*` route or dedicated
  Family archive is built (see `docs/shopify-architecture.md`).
- **Archive-override Metafield for Objects.** v1.0 uses Shopify product
  status alone to determine archived/unavailable state (see
  `docs/shopify-architecture.md`); a supplementary override Metafield is
  not introduced until a concrete need arises.
- **Accounts / login / order history.** No customer-facing account area.
  Checkout (Acquire) uses Shopify's standard guest/hosted checkout flow.
- **Wishlisting / saved Objects.** No save-for-later feature.
- **Multi-currency / multi-region storefronts.** Single storefront,
  single currency in v1.0.
- **Personalization or algorithmic recommendations.** "Continue
  Exploring" and "Featured Objects" are editorially curated (Chapter/
  Family-based or manual selection), not behavior-driven, in v1.0.
- **Dedicated PR-event pages.** PR events are covered within
  `/the-house/press` in v1.0; a dedicated type/route is only introduced
  if volume or structure later justifies it.
- **Sub-navigation / mega-menu.** Primary navigation in v1.0 is the flat
  six-item structure in `docs/master-blueprint.md`; dropdown structure is
  not designed or built unless a later sprint decides IA depth requires
  it.
- **Admin tooling inside this repository.** All day-to-day content and
  commerce management stays in Shopify Admin; TT House does not grow a
  custom admin UI.

## Development sequence

Proposed order for the sprints after Sprint 3. Each sprint should re-read
the relevant sections of `docs/information-architecture.md`,
`docs/component-map.md` and `docs/shopify-architecture.md` before
starting, since those documents — not this list — are the detailed spec.
Sequencing may be adjusted, but later sprints should not skip ahead into
work that depends on an earlier sprint's foundation (e.g. Object pages
depend on the Shopify Storefront client existing first).

1. **Sprint 4 — Shopify Storefront client and content boundary.**
   Implement `src/lib/shopify/` (Storefront API client) and
   `src/lib/content/` (content data-access boundary), plus the
   TypeScript content types in `src/types/`. No pages yet — this is the
   data foundation every content sprint after it depends on. Provision
   the Metafield/Metaobject definitions in Shopify Admin specified in
   `docs/shopify-architecture.md`.
2. **Sprint 5 — Primary navigation and footer.** Build `PrimaryNav` and
   `Footer` (per `docs/component-map.md`) and wire them into the root
   layout, replacing the Sprint 2 homepage preview's lack of navigation.
   Flat structure only, per "Deferred beyond v1.0."
3. **Sprint 6 — Objects.** Object directory and individual Object page:
   `ObjectCard` (preview only — no quick-acquire), `ObjectGrid`,
   `LoadMore`, `ObjectGallery` (including the pan/zoom and advanced
   interaction work deferred from the Sprint 3 documentation-only
   pattern definition), `ObjectPassport`, `VariantSelector`,
   `AcquireButton` (Object page only), `ArchivedNotice`,
   `CrossReference`. The directory remains browse-only — no filtering,
   sorting, or search (see "Deferred beyond v1.0"). This is the
   commerce-critical path and the first full exercise of the Shopify
   ownership model, so it comes before Chapters.
4. **Sprint 7 — Chapters.** Chapter archive and individual Chapter pages:
   `ChapterCard`, `ChapterDetail`, `LoadMore`, campaign/editorial
   presentation. Incomplete Chapters (missing required Metafields) are
   excluded from the archive and navigation but still resolve at their
   direct URL in a controlled unavailable state (see
   `docs/shopify-architecture.md`). Depends on Objects existing (a
   Chapter page renders an `ObjectGrid` of its members).
5. **Sprint 8 — Home (production).** Replace the Sprint 2 homepage
   preview with the real Home: `HomeHero` (composing `EditorialHero`,
   not a separate implementation) driven by the deterministic Home
   feature selection rule in `docs/shopify-architecture.md` (type
   precedence, same-type tie-break, static fallback), Current Chapter,
   Featured Objects, Journal-highlights placeholder (Journal itself
   isn't built yet — see Sprint 9), The House preview. This is
   sequenced after Objects/Chapters because Home composes them.
6. **Sprint 9 — Journal.** Journal index and individual entries, using
   `LoadMore` for the index. Update Home's Journal highlights module
   (stubbed in Sprint 8) to pull real entries.
7. **Sprint 10 — The House.** About, Founder, Manifesto (repository-
   static content), Collaborations, Shows, Press (Metaobject-backed).
   Sequenced later since it's the least commerce-critical section and
   has the fewest cross-page dependencies.
8. **Sprint 11 — Contact.** Single page, all six channels. Small and
   dependency-free; scheduled last primarily because it's low-risk filler
   once the content pillars are done, not because it's technically
   blocked on anything.
9. **Sprint 12+ — Hardening.** Cross-cutting concerns not owned by any
   single page: SEO metadata, sitemap, analytics, accessibility pass,
   performance/image optimization audit, `/legal/*` pages (repository-owned
   static content, per `docs/shopify-architecture.md`), 404 page styling.
   Scoped precisely when reached, based on what the prior sprints
   actually need.

This sequence assumes each sprint ships independently reviewable,
working functionality rather than long-lived partial features — consistent
with `docs/development-rules.md`'s instruction not to build speculatively
or leave half-finished implementations.
