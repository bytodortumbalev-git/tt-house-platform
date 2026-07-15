# TT House Shopify Architecture

Defines what Shopify owns, what this repository owns, and how the two
meet. This is the reference for "where does this field live" and "which
API do we call." Page-level responsibilities are in
`docs/information-architecture.md`; this document is about data, not
layout.

## Principle

**Shopify is the commerce layer. This repository is the editorial
layer.** Every piece of content in the platform belongs to exactly one of
three owners:

1. **Shopify** — commerce-critical data: price, inventory, variants,
   media used at checkout, order/customer data. Changed daily by the
   team in Shopify Admin.
2. **Shopify Metafields / Metaobjects** — structured editorial data that
   needs to stay attached to a Shopify object (a product, a collection)
   or needs its own admin-editable record, but isn't commerce data
   itself. Changed occasionally, by whoever maintains content, still
   inside Shopify Admin.
3. **Repository** — content that has no natural home on a Shopify object,
   changes rarely, and is effectively part of the codebase/design system
   (page copy for Manifesto, static IA, component structure). Changed via
   a pull request.

Nothing is ever duplicated across two owners. If a field could plausibly
live in two places, this document (or its extension, when a later sprint
needs a field not yet listed) is where that's decided — not a per-page
judgment call.

## Ownership by content type

### Objects (Shopify Product)

| Data                                                                    | Owner                                    | Mechanism                                                                                                          |
| ----------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Price, compare-at price                                                 | Shopify                                  | Product/Variant                                                                                                    |
| Variants (size, etc.)                                                   | Shopify                                  | Product Variants                                                                                                   |
| Inventory/availability                                                  | Shopify                                  | Inventory API                                                                                                      |
| Checkout/Acquire flow                                                   | Shopify                                  | Storefront API Cart/Checkout                                                                                       |
| Primary product media (photos used in Acquire flow)                     | Shopify                                  | Product Media                                                                                                      |
| Object Passport (materials, origin, construction, care)                 | Repository-defined shape, Shopify-stored | Metafields, namespace `tt_house.passport.*`                                                                        |
| Chapter assignment                                                      | Shopify                                  | Collection membership                                                                                              |
| Family assignment (a cross-Chapter grouping, e.g. recurring silhouette) | Shopify                                  | Metafield, `tt_house.family` (reference to a Metaobject)                                                           |
| Editorial/archive copy (distinct from Shopify's product description)    | Shopify-stored                           | Metafield, `tt_house.editorial_copy` (rich text)                                                                   |
| Archived/unavailable state                                              | Shopify                                  | Product status + Metafield override if the house needs a state Shopify's native status doesn't capture (see below) |

**Permanent URLs:** an Object's route (`/objects/[object]`) resolves by
handle. If a Product is archived or set unavailable in Shopify, the page
must still render — Next.js queries the Product regardless of status and
renders `ArchivedNotice` (see `docs/component-map.md`) instead of
`VariantSelector`/`AcquireButton` when the status indicates it. The
Product is never deleted from Shopify as a way to "remove" it from the
site; if a piece must stop resolving entirely, that is a deliberate,
separate decision outside this architecture.

### Chapters (Shopify Collection + editorial layer)

| Data                                      | Owner          | Mechanism                                                                                     |
| ----------------------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| Membership (which Objects belong)         | Shopify        | Collection (manual or automated/rule-based)                                                   |
| Chapter title, handle                     | Shopify        | Collection title/handle — must match the public Chapter name                                  |
| Campaign imagery, editorial story copy    | Shopify-stored | Metafields on the Collection, namespace `tt_house.chapter.*` (e.g. `campaign_media`, `story`) |
| "Current Chapter" flag (surfaced on Home) | Shopify-stored | Metafield, `tt_house.chapter.is_current` (boolean) — see "Hero and Current selection" below   |
| Chapter archive ordering                  | Shopify-stored | Metafield, `tt_house.chapter.sort_order`, or Collection-level custom sort                     |

A Chapter page is never generated purely from a Collection's default
fields — `title`, `description` and product list are not sufficient; the
Metafields above are required for the page to render in full TT House
presentation. A Collection without them is treated as incomplete, not as
a valid minimal Chapter.

### The House (about, founder, manifesto, collaborations, shows, press)

| Data                                   | Owner          | Mechanism                                                                                                                                                                                              |
| -------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| About / Founder / Manifesto copy       | Repository     | Static content — page-level content files/components under `src/`, per `docs/roadmap.md` timing. Rarely changes; treated as part of the site, not day-to-day editorial.                                |
| Collaborations, Shows (index + detail) | Shopify-stored | Metaobjects (`tt_house_collaboration`, `tt_house_show`) — these need admin-editable records with structured fields (title, date, partner, media, copy) but no natural Product/Collection to attach to. |
| Press / magazine features              | Shopify-stored | Metaobject (`tt_house_press_feature`) — publication, title, link/excerpt, date, media.                                                                                                                 |
| PR events                              | Shopify-stored | Folded into the press Metaobject set unless volume/structure later justifies a dedicated type — see `docs/roadmap.md`.                                                                                 |

Metaobjects are chosen over repository content for Collaborations, Shows
and Press specifically because they change more often than About/Founder/
Manifesto and because the team already works inside Shopify Admin daily —
adding a second authoring surface for frequently-changing content would
violate "Shopify Admin remains the daily operational interface."

### Journal

| Data            | Owner          | Mechanism                                                                                                           |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| Journal entries | Shopify-stored | Metaobject (`tt_house_journal_entry`): title, dek, body, media, published date, optional Object/Chapter references. |

Journal is Shopify-stored (not repository-static) in v1.0 because it's
the highest-frequency content type on the site — but per
`docs/master-blueprint.md`, it is the flagged first candidate for
migration to a dedicated CMS if Metaobjects prove limiting (rich text
authoring, editorial workflow, preview). Journal's data-access code must
go through the content boundary described below specifically so that
migration is possible without touching page components.

### Contact

| Data                                  | Owner      | Mechanism                                                                          |
| ------------------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| Channel copy, addresses, social links | Repository | Static content — changes rarely, no admin-editing need justifies a Shopify record. |

## Content data-access boundary

All Shopify reads used for editorial rendering (Chapters, Objects,
Journal, Collaborations, Shows, Press) go through a single boundary
module, not ad hoc Storefront API calls scattered across page components:

```
src/lib/shopify/            Storefront API client (per src/lib/shopify/README.md)
src/lib/content/            Content data-access boundary (introduced when
                             Chapters/Objects/Journal are first built)
  chapters.ts                 getChapter(handle), listChapters()
  objects.ts                  getObject(handle), listObjects(), listObjectsForChapter(handle)
  journal.ts                  getJournalEntry(slug), listJournalEntries()
  house.ts                    getCollaboration(slug), getShow(slug), listPressFeatures()
```

Each function in `src/lib/content/` returns a repository-defined
TypeScript type (living in `src/types/`), never a raw Shopify Storefront
API response shape. Page/Section components import from
`src/lib/content/`, never from `src/lib/shopify/` directly. This is the
mechanism that makes the CMS-readiness principle in
`docs/master-blueprint.md` real rather than aspirational: introducing a
CMS later means changing what's inside these functions, not every call
site.

No code implementing this boundary is written in Sprint 3 — this section
specifies the shape for the sprint that first needs it (see
`docs/roadmap.md`).

## Hero and "Current Chapter" selection

The Home dynamic hero and the "Current Chapter" module both need a
single source of truth for "what's current right now," since a Chapter,
collaboration, show, editorial or announcement can each be a valid hero
subject:

- Each candidate content type carries its own `is_current` /
  `is_featured`-style Metafield (Chapter, Collaboration, Show) or is
  surfaced via `listJournalEntries()`'s natural recency ordering
  (Journal).
- Exactly one item across all candidate types should be marked current
  for the hero at any time — this is an editorial/operational discipline
  enforced by whoever curates Shopify Admin, not a technical constraint
  this architecture can guarantee. The Next.js implementation (built in
  a later sprint) should pick a deterministic precedence order (e.g.
  Chapter > Collaboration/Show > Journal > fallback) for the case where
  more than one item is marked current, so the hero never has ambiguous
  behavior.
- The "Current Chapter" module (distinct from the hero) always reflects
  whichever Chapter has `is_current = true`, independent of what the
  hero is currently showing.

Exact query/precedence implementation is deferred to the sprint that
builds the Home hero (see `docs/roadmap.md`) — this section fixes the
data model, not the selection code.

## Environment and API surface

- **Storefront API** (public, token-scoped): all reads used for
  rendering pages — Products, Collections, Metafields, Metaobjects,
  Cart/Checkout for Acquire. This is the only Shopify API the rendered
  site calls at request time.
- **Admin API**: not called from the rendered site. Reserved for
  build-time/tooling use only if a future sprint needs it (e.g. a script
  that provisions Metaobject definitions) — never from a user-facing
  request path.
- Environment variables (`SHOPIFY_STORE_DOMAIN`,
  `SHOPIFY_STOREFRONT_ACCESS_TOKEN`) are already documented in
  `.env.example` and `src/lib/shopify/README.md`; no new variables are
  introduced by this document.

## What this document does not do

- It does not create the Metafield/Metaobject definitions in Shopify
  Admin — that's an implementation step for the sprint that builds each
  content type, using this document as the spec.
- It does not implement `src/lib/shopify/` or `src/lib/content/` — both
  remain unbuilt per `docs/roadmap.md` until their sprint.
- It does not change how Shopify Admin is used operationally beyond what
  "Shopify Admin remains the daily operational interface" already implies.
