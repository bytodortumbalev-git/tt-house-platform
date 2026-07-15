# TT House Component Map

Reusable component hierarchy and responsive page templates for the
platform defined in `docs/master-blueprint.md` and
`docs/information-architecture.md`. This document defines structure and
naming only — no components are built in Sprint 3. When a later sprint
builds a component listed here, it should live at the path implied by
its layer below and follow `docs/design-system.md` for every visual
value.

## Layer model

Components are organized in four layers, each only depending on the
layer(s) above it:

```
1. Primitives   src/components/layout/        Container, Section, Stack (exist — Sprint 2)
2. Elements     src/components/elements/       Small, single-purpose, no page knowledge
3. Patterns     src/components/patterns/       Composed, reusable across 2+ sections
4. Sections     src/components/sections/       Page-specific composition, used by one route family
```

`src/app/**/page.tsx` files compose Sections (and occasionally Patterns
directly); they should not import Elements or reach into Primitives
beyond what a Pattern/Section already wraps. This keeps route files thin
and keeps visual rules centralized in the lower layers.

### 1. Primitives (existing, Sprint 2)

`Container`, `Section`, `Stack` — already implemented in
`src/components/layout/`. No changes proposed here.

### 2. Elements

Small, single-purpose, style-only components with no awareness of
Shopify, routing, or page context. Each wraps token-driven styling so
call sites never hand-roll it.

| Element   | Purpose                                                                         |
| --------- | ------------------------------------------------------------------------------- |
| `Eyebrow` | Small uppercase label (uses `text-eyebrow`) — chapter/section labels.           |
| `Heading` | Display/H1–H4 text role wrapper, `as` prop for semantic level.                  |
| `Body`    | Body/body-lg/body-sm/caption text role wrapper.                                 |
| `Button`  | Primary/secondary/text button variants — powers Acquire and other CTAs.         |
| `Link`    | Styled Next.js `Link` wrapper (internal) with the house's link/hover treatment. |
| `Price`   | Formats a Shopify money value consistently (currency, locale).                  |
| `Tag`     | Small label for Family/material/status — flat, no badge/pill SaaS styling.      |
| `Image`   | `next/image` wrapper enforcing house aspect ratios and loading rules.           |
| `Divider` | Hairline rule (`--tt-border-width-hairline`) for editorial section breaks.      |

### 3. Patterns

Composed from Elements and Primitives, reused across multiple sections of
the site. Patterns know about content shape but not about a specific
page's data source.

| Pattern              | Used by                                                               | Purpose                                                                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PrimaryNav`         | Root layout                                                           | TT logo + The House / Chapters / Objects / Journal / Contact links.                                                                                                                          |
| `Footer`             | Root layout                                                           | Site-wide footer: secondary nav, legal links, social links.                                                                                                                                  |
| `ObjectCard`         | Objects directory, Chapter page, Featured Objects, Continue Exploring | Single Object preview: image, name, Price, link to Object page.                                                                                                                              |
| `ChapterCard`        | Chapter archive, Home (Current Chapter)                               | Single Chapter preview: campaign image, name, short line, link.                                                                                                                              |
| `JournalCard`        | Journal index, Home (Journal highlights)                              | Single Journal entry preview: image, title, dek, date.                                                                                                                                       |
| `ObjectGrid`         | Objects directory, Chapter page, Continue Exploring                   | Responsive grid of `ObjectCard`s.                                                                                                                                                            |
| `EditorialHero`      | Home (dynamic hero), Chapter page, House sub-pages                    | Large image/copy hero block; content-agnostic, driven by props.                                                                                                                              |
| `ObjectPassport`     | Object page                                                           | Structured display of Object Passport fields (materials, origin, etc).                                                                                                                       |
| `VariantSelector`    | Object page                                                           | Shopify variant/size selection, feeds `AcquireButton`.                                                                                                                                       |
| `AcquireButton`      | Object page only                                                      | Wraps `Button`; triggers the Acquire (checkout) flow. Acquire is never exposed from `ObjectCard` or any grid/listing context — see `docs/development-rules.md`.                              |
| `CrossReference`     | Object page, Chapter page, Collaboration/Show pages                   | "Continue Exploring" and House↔Chapter/Object cross-links.                                                                                                                                   |
| `ArchivedNotice`     | Object page, Chapter page                                             | Renders in place of `VariantSelector`/`AcquireButton` for archived/unavailable Objects, and in place of campaign/editorial content for an incomplete Chapter resolved at its direct URL.     |
| `ObjectGallery`      | Object page                                                           | Multiple media images/angles for an Object. Static gallery in v1.0 — pan/zoom and other advanced interaction are deferred to the sprint that builds the Object page (see `docs/roadmap.md`). |
| `LoadMore`           | Objects directory, Chapter archive, Journal index, Press index        | Reveals additional items in an unbounded listing — the single mechanism all paginated grids use rather than each inventing its own.                                                          |
| `ContactChannelList` | Contact page                                                          | Renders the enquiry/press/collaboration/custom/appointment/social entries.                                                                                                                   |

Patterns never fetch data themselves — they receive fully-shaped props.
Data fetching happens in route-level Server Components, which call the
content data-access boundary described in `docs/shopify-architecture.md`.

### 4. Sections

Page-specific composition, each used by exactly one route family. These
are where a page's particular arrangement of Patterns lives, so that
route files (`page.tsx`) stay declarative.

| Section                                        | Route(s)                                  |
| ---------------------------------------------- | ----------------------------------------- |
| `HomeHero`                                     | `/`                                       |
| `HomeCurrentChapter`                           | `/`                                       |
| `HomeFeaturedObjects`                          | `/`                                       |
| `HomeJournalHighlights`                        | `/`                                       |
| `HomeHousePreview`                             | `/`                                       |
| `ChapterArchiveGrid`                           | `/chapters`                               |
| `ChapterDetail`                                | `/chapters/[chapter]`                     |
| `ObjectDirectory`                              | `/objects`                                |
| `ObjectDetail`                                 | `/objects/[object]`                       |
| `JournalIndex`                                 | `/journal`                                |
| `JournalDetail`                                | `/journal/[entry]`                        |
| `HouseLanding`                                 | `/the-house`                              |
| `HouseAbout`, `HouseFounder`, `HouseManifesto` | corresponding `/the-house/*` pages        |
| `CollaborationDetail`, `ShowDetail`            | corresponding `/the-house/*` detail pages |
| `PressIndex`                                   | `/the-house/press`                        |
| `ContactPage`                                  | `/contact`                                |

`HomeHero` composes `EditorialHero` with Home-specific data (the selected
current item — see the Home feature selection rule in
`docs/shopify-architecture.md`); it is not a separate hero
implementation. This is the general rule wherever a Section wraps a
Pattern: a Section supplies data and composition, never a parallel
visual implementation of a Pattern that already exists.

## Responsive page templates

Every page template is built from `Container`/`Section` breakpoints
already defined in `docs/design-system.md` (`sm`/`md`/`lg`/`xl`/`2xl`).
Three recurring templates cover the whole IA:

### Grid template

Used by: Objects directory, Chapter archive, Journal index.

- **Mobile (`< md`):** single column, `Container` size `wide`, cards
  stacked with `Stack gap="lg"`.
- **Tablet (`md`–`lg`):** 2-column grid.
- **Desktop (`≥ lg`):** 3–4 column grid depending on card type
  (`ObjectCard` denser than `ChapterCard`/`JournalCard`).
- All three listings reveal additional items via the `LoadMore` pattern
  rather than numbered pagination or unbounded infinite scroll, keeping
  the browse-only positioning explicit (no filter/sort/search controls —
  see `docs/roadmap.md`).

### Detail template

Used by: Object page, Chapter page, Journal entry, Collaboration/Show
detail.

- **Mobile:** full-width hero/media, content in a single `Container` size
  `content` or `narrow` (body copy) below it.
- **Desktop:** for Object/Chapter pages, a two-column split (media
  left/fixed, content right/scrolling) at `≥ lg`; Journal/House detail
  pages stay single-column at `content` width even on desktop, since
  they're long-form reading, not commerce or campaign layouts.

### Narrative template

Used by: Home, The House landing, Manifesto, About, Founder, Press index,
Contact.

- Full-bleed `Section`s of alternating `tone`, each capped by `Container`,
  stacked vertically — no persistent sidebar, no dashboard-style app
  shell at any breakpoint. This is the template that most directly
  encodes "editorial magazine," not "product listing."

## Naming and placement conventions

- Component directories mirror the layer names above:
  `src/components/elements/`, `src/components/patterns/`,
  `src/components/sections/`. Each exports through a local `index.ts`
  (see the existing `src/components/layout/index.ts` for the convention).
- Section components are named `<Area><Purpose>` (e.g. `HomeHero`,
  `ChapterDetail`) so their route is inferable from the name.
- No component name, prop name, or exported type may use non-house
  terminology (`Product`, `Cart`, `Collection` as a UI-facing name, etc.)
  — see the terminology table in `docs/master-blueprint.md`. Shopify SDK
  types themselves keep their Shopify names where they cross the data
  boundary; house components wrap and rename at that boundary.
