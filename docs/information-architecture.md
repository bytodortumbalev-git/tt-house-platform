# TT House Information Architecture

Page-by-page responsibilities and URL structure for the platform defined
in `docs/master-blueprint.md`. This is the reference for "what page is
this" and "what does this URL resolve to" — component structure lives in
`docs/component-map.md`, and data ownership per page lives in
`docs/shopify-architecture.md`.

## URL structure

```
/                                   Home
/the-house                          The House (landing)
/the-house/about                    About
/the-house/founder                  Founder
/the-house/manifesto                Manifesto
/the-house/collaborations           Collaborations (index)
/the-house/collaborations/[slug]    Individual collaboration
/the-house/shows                    Shows (index)
/the-house/shows/[slug]             Individual show
/the-house/press                    Magazine and press features

/chapters                           Chapter archive
/chapters/[chapter]                 Individual Chapter page

/objects                            Object directory
/objects/[object]                   Individual Object page

/journal                            Journal index
/journal/[entry]                    Individual Journal article

/contact                            Contact
```

Notes:

- All slugs are lowercase, hyphenated, and derived from a human-editable
  handle (Shopify handle for Chapters/Objects; a repository- or
  Metaobject-defined slug for The House/Journal entries) — never an
  opaque ID.
- `/objects/[object]` is a **permanent URL**: it must keep resolving
  after an Object is archived or made unavailable (see "Permanent Object
  URLs" in the master blueprint and the archived-state rule below).
- `/chapters/[chapter]` uses the Chapter's slug, which is always
  identical to the underlying Shopify Collection handle in v1.0 — no
  divergence is permitted (see `docs/shopify-architecture.md`).
- PR events (under The House) do not get individual permanent detail
  pages in v1.0 — they are entries within `/the-house/press` unless a
  future sprint decides otherwise (see `docs/roadmap.md`).

## Home — `/`

**Responsibility:** the current entry point to the archive. Entirely
oriented around "what's current" rather than a static welcome page.

Sections, top to bottom:

1. **Dynamic hero** — presents the single most current thing: a Chapter
   launch, a collaboration, a show, an editorial feature, or a house
   announcement. Exactly one hero state is shown at a time; the mechanism
   for choosing which is defined in `docs/shopify-architecture.md`
   (content ownership) — not decided here.
2. **Current Chapter** — a dedicated module surfacing the active/featured
   Chapter distinctly from the hero (the hero may or may not be about
   this same Chapter).
3. **Featured Objects** — a curated set of Objects, editorially selected
   rather than algorithmically generated in v1.0.
4. **Journal highlights** — a small number of recent/featured Journal
   entries.
5. **The House preview** — a short teaser into The House section (e.g.
   Manifesto or About), linking through, not a duplicate of that content.

Home reads content from every other section but owns no content itself —
it has no independent data beyond curation choices (which Chapter is
"current," which Objects are "featured").

## The House — `/the-house`

**Responsibility:** brand narrative and credibility. The house's story,
people, and public presence — not a corporate "About Us" page.

| Page                                   | Responsibility                                                                   |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `/the-house`                           | Landing/index — orients into the sub-pages below, does not duplicate their copy. |
| `/the-house/about`                     | The house's story and positioning.                                               |
| `/the-house/founder`                   | Founder profile and voice.                                                       |
| `/the-house/manifesto`                 | The house's stated values/point of view — short, declarative, editorial.         |
| `/the-house/collaborations`, `/[slug]` | Past and current collaborations; index plus individual detail pages.             |
| `/the-house/shows`, `/[slug]`          | Runway/presentation history; index plus individual detail pages.                 |
| `/the-house/press`                     | Magazine and press features, and PR event coverage (see URL notes above).        |

Collaboration and Show detail pages may reference associated Objects or
Chapters (a collaboration that produced a Chapter, a show that launched
one) but they are House content, not Chapter content — the reverse link
(Chapter referencing the Show/Collaboration that produced it) is the
canonical direction; see `docs/component-map.md` for the shared
cross-reference component.

## Chapters — `/chapters`

**Responsibility:** the editorial, curated grouping layer between Home
and individual Objects. A Chapter is a story with Objects in it, not a
category filter.

| Page                  | Responsibility                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/chapters`           | Chapter archive — every Chapter, past and current, in an editorial (not necessarily chronological-grid) presentation.                            |
| `/chapters/[chapter]` | Individual Chapter: campaign imagery, the editorial story/copy, and the Objects belonging to this Chapter, in full TT House visual presentation. |

A Chapter page is never a re-skinned Shopify Collection listing — it is
an editorial page that happens to pull its product set from a Collection.
Shopify Collections are the product-container primitive underneath; see
`docs/shopify-architecture.md` for exactly which fields come from Shopify
versus the repository/Metafields.

Each Chapter maps to exactly one Shopify Collection in v1.0 (see
`docs/master-blueprint.md`). An incomplete Chapter — one missing the
required editorial Metafields, see `docs/shopify-architecture.md` — is
excluded from `/chapters` and from all navigation/listing surfaces. Its
direct URL still resolves rather than 404ing, but renders a controlled
unavailable state instead of a partial or broken Chapter page, mirroring
the archived-Object rule below.

## Objects — `/objects`

**Responsibility:** the archive of individual pieces, and the only place
commerce intent (Acquire) occurs.

| Page                | Responsibility                                                                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/objects`          | Object directory — a browsable list of all available Objects. No filtering, sorting, faceted navigation, or search in v1.0 (see `docs/roadmap.md`).                                                 |
| `/objects/[object]` | Individual Object page: media, price, variant selection and Acquire action (Shopify-controlled) plus Object Passport, materials, Chapter/Family context, and archive content (TT House-controlled). |

Object pages must resolve permanently (see URL structure notes). An
archived or unavailable Object still renders its page — with an
archived-state presentation instead of the Acquire action — rather than
404ing. This determination is based on Shopify product status alone in
v1.0 (see `docs/shopify-architecture.md`). Exact archived-state UI is a
component-level decision for the sprint that builds it, not specified
here.

"Continue Exploring" (never "Related Products") appears on the Object
page to surface adjacent Objects — same Chapter and/or same Family.
Family is cross-reference-only in v1.0: it has no dedicated browsing page
or route.

## Journal — `/journal`

**Responsibility:** editorial writing not tied to a specific Object or
Chapter transaction — process, materials, designer notes, collaborations,
atelier stories.

| Page               | Responsibility                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `/journal`         | Index of Journal entries.                                                                                    |
| `/journal/[entry]` | Individual article. May reference/link Objects, Chapters or House pages, but is not itself commerce content. |

Journal is called out in `docs/master-blueprint.md` as the most likely
first CMS candidate — its IA here should not be read as implying any
particular storage mechanism.

## Contact — `/contact`

**Responsibility:** a single page routing enquiries to the right channel.
Not a content pillar — no sub-pages, no archive.

Content on the page: general enquiries, press, collaborations, custom
projects, studio appointments, and social links. Whether these are
sections on one page or a light in-page tab/anchor structure is a
component-level decision (`docs/component-map.md`), not an IA-level
routing decision — there is exactly one URL, `/contact`.

## Cross-cutting pages

Not part of the five-section model above, but required for a production
site. Included here so later sprints don't invent inconsistent routes;
exact scope/timing is in `docs/roadmap.md`.

| Page                    | Notes                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| `/legal/*` (or similar) | Privacy, terms, shipping/returns — repository-owned static pages (see `docs/shopify-architecture.md`). |
| `404` / not-found       | Standard Next.js not-found page, editorially styled.                                                   |

No search page, account/login area, or cart page is specified in this
document — see `docs/roadmap.md` for deferred-feature status of each.
