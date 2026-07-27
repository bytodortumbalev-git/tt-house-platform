# TT House Experience Bible

This is not a technical specification. It is the design constitution of
TT House — the philosophy that every future UI, UX, and engineering
decision must answer to, regardless of sprint or feature.

Where `docs/design-system.md` defines _what the tokens are_ and
`docs/development-rules.md` defines _what is and isn't in scope_, this
document defines _why the platform looks and behaves the way it does_.
Nothing here contradicts `CLAUDE.md`, `docs/master-blueprint.md`,
`docs/design-system.md`, or `docs/development-rules.md` — where a
concrete rule already exists in one of those documents, this document
explains the reasoning behind it rather than restating or overriding it.

Every future sprint, feature, and design decision must be read against
this document before implementation begins.

## 1. Purpose

TT House is not an ecommerce website that happens to have some editorial
content bolted on. It is a fashion house's digital archive and magazine
that happens to be able to transact.

This document exists because token systems and component maps can be
followed correctly and still produce something that feels wrong — a
page that is technically on-brand but reads as a storefront. This bible
is the layer above tokens and components: the judgment that decides
whether a correct implementation is also a true one.

Every person and every agent who builds on TT House — human or AI —
should be able to read this document once and from then on make
consistent, unprompted decisions about pace, silence, imagery, and
restraint without needing to ask.

## 2. The House Philosophy

TT House behaves like a house, not a shop.

A house has a point of view. It does not chase every visitor's
attention with equal urgency; it presents itself, and the visitor is
invited to spend time with it or not. A shop optimizes for transactions
per visit. A house optimizes for whether the visit was worth having.

This produces a standing principle that overrides default ecommerce
instinct wherever the two conflict:

- **Commerce exists to support the House — not the other way around.**
  The Acquire action exists because the House makes Objects that people
  want to own, not because the platform's job is to maximize
  conversions.
- **Editorial always comes before product.** A Chapter's story is not
  packaging around a product grid; the product grid is what the story
  earns.
- **Every Object deserves context.** An Object is never presented as a
  bare SKU — material, origin, construction, and its place in a
  Chapter or Family are part of what is being shown, not optional
  metadata.
- **Every Chapter deserves narrative.** A Chapter is a chapter — it has
  a beginning, a reason to exist, and a story, not just a Shopify
  Collection handle and a grid of thumbnails.

If a proposed feature makes sense for a shop but not for a house, it
does not belong here, no matter how standard it is elsewhere.

## 3. Emotional Journey

A visitor's experience of TT House should feel closer to walking through
a small, well-lit gallery or leafing through a considered print
magazine than to browsing a catalogue.

The intended arc, section by section:

1. **Arrival (Home)** — orientation and a single, current point of
   focus. Not a wall of choices; one thing worth looking at first.
2. **Immersion (Chapters, The House)** — narrative depth. The visitor
   is reading and looking, not yet deciding.
3. **Consideration (Objects)** — the moment intent narrows to a
   specific piece. Detail, materials, and context are available in
   full, because this is the one place a decision is actually being
   made.
4. **Acquisition (Acquire)** — quiet, brief, and confident. It is the
   conclusion of the journey, not a separate funnel bolted onto it.
5. **Continuation (Journal, Continue Exploring)** — the visitor is
   invited back into the archive rather than ejected at checkout.

At no point should the visitor feel chased, gamified, or upsold. The
emotional register throughout is calm confidence — the House knows what
it is, and is not anxious about whether the visitor buys today.

## 4. Pace

TT House sets its own pace, and that pace is slower than a typical
ecommerce site's.

- Pages are meant to be read, not scanned for the fastest exit to
  checkout.
- There is no mechanism, anywhere in the platform, designed to rush a
  decision.
- Loading more content (`LoadMore`) is a deliberate visitor action, not
  an auto-triggered infinite scroll designed to maximize time-on-site
  or engagement metrics.
- A slower page that tells a true story is preferred over a faster page
  that tells no story at all. Performance work should chase
  perceived-quality and craft (smooth image loading, no layout shift,
  no jank), not "reduce clicks to purchase."

Pace is a deliberate design decision, not a metric to be optimized
downward by default.

## 5. White Space

White space is a design material in TT House, on the same footing as
typography or imagery — not leftover space to be filled once content is
placed.

- Archive White is not "the background" waiting for content; it is
  substance. Per `docs/design-system.md`, Archive White and Chocolate
  form roughly 95% of any screen, and that ratio exists because empty
  space is doing real communicative work — it signals confidence,
  quality, and editorial restraint.
- Generous space around an Object or a headline is part of how value is
  communicated. Crowding content to "fit more above the fold" is a
  retail habit this platform does not adopt.
- When in doubt between adding another element and leaving space,
  leave the space. A page that feels sparse but intentional is correct;
  a page that feels full but noisy is not.

## 6. Typography Behaviour

Typography leads the interface. Imagery supports it; UI chrome should
almost disappear beside it.

- The type scale defined in `docs/design-system.md` (Display through
  Caption/Eyebrow) exists to create a clear, editorial voice hierarchy
  — headline, deck, body, label — the way a magazine spread is
  composed, not the way a dashboard labels its widgets.
- Headlines are set with room to breathe and are never competing for
  attention with buttons, badges, or UI decoration on the same plane.
- Body copy is set at a comfortable reading measure (see the `content`/
  `narrow` container widths) because long-form reading is a first-class
  activity on this platform, not an afterthought squeezed beside a
  product photo.
- Eyebrow labels (uppercase, tracked-out) are used the way a magazine
  uses a section kicker — quiet orientation, never shouting.
- Type never gets smaller or louder to manufacture urgency (no
  countdown-style numerals, no oversized "SALE" treatment). Emphasis is
  achieved through scale and hierarchy already present in the system,
  not through new, louder typographic tricks.

## 7. Photography Language

Photography is the House's primary storytelling medium, and it is
treated with the same discipline as an editorial publication's.

- Images are art-directed and full of context — an Object is shown in
  a considered setting or in isolation with intent, not as a
  studio-white catalogue thumbnail cropped for a grid.
- Aspect ratios and cropping stay consistent within a context (per the
  `Image` element's house aspect ratios in `docs/component-map.md`) so
  grids feel curated rather than assembled from mismatched product
  photography.
- Photography is never obscured by UI chrome laid on top of it —
  no gradient scrims for the sake of legibility hacks, no badges or
  ribbons pasted over an image, no cluttered overlay CTAs.
- An image is allowed to be the entire message. A full-bleed campaign
  image with no caption is a valid, often preferable, editorial choice.

## 8. Motion Principles

Motion in TT House is restrained to the point of being almost invisible
— it should be felt as quality, not noticed as animation.

- Per `docs/design-system.md`, motion favours fades and the house's
  editorial easing curves over bouncy, springy, or elastic effects.
  Durations stay in the "fast" to "slow" range defined in tokens —
  nothing lingers, nothing snaps.
- Motion's only jobs are: confirming that an interaction registered,
  smoothing a transition between states, and guiding attention to
  something that genuinely changed. It never exists to demonstrate that
  the site "has animations."
- No parallax spectacle, no scroll-jacking, no bouncing or pulsing
  elements designed to attract the eye. A House does not need to wave
  its arms to be noticed.
- If a motion effect would look at home in a mobile game or a SaaS
  onboarding flow, it does not belong here.

## 9. Navigation Behaviour

Navigation orients; it does not sell.

- Primary navigation (per `docs/master-blueprint.md`) is flat and
  legible: The House, Chapters, Objects, Journal, Contact. It states
  what exists rather than merchandising what's on offer.
- No navigation surface uses urgency devices — no "X left," no
  countdown badges, no red dots manufacturing a reason to click.
- Wayfinding is always available (a visitor can always tell where they
  are and how to get back to a Chapter or the archive), but it never
  interrupts. No modals demanding attention on arrival, no
  exit-intent popups, no sticky bars that persist across scroll purely
  to keep a CTA in view.
- Search, filtering, and faceted navigation are deliberately absent in
  v1.0 (see `docs/roadmap.md`) not merely as a scope cut but as a
  philosophy: browsing the archive the way it was curated is part of
  the experience, not a limitation to route around.

## 10. Editorial Rules

- Every page that can carry a story does. A Chapter page, a Collaboration,
  a Show — none of these are ever reduced to a bare listing when a
  narrative frame is available.
- Copy is written in the House's own editorial voice (see the
  terminology table in `CLAUDE.md`) — never generic ecommerce copy
  ("Shop Now," "Add to Cart," "Best Sellers").
  "Continue Exploring" invites; it does not upsell.
- Editorial content is never truncated or hidden behind a "read more"
  interaction purely to shorten a page — if a story is worth telling,
  it is told in full, at the pace in §4.
- An Object's editorial copy (materials, origin, construction, the
  Object Passport) is written to be read, not skimmed for spec-sheet
  facts. It should sound like an archivist describing a piece, not a
  product description auto-generated from attributes.

## 11. Commerce Philosophy

Commerce in TT House is quiet, confident, and singular.

- Acquire appears in exactly one place with intent: the Object page.
  Per `docs/component-map.md`, it is never surfaced from an `ObjectCard`
  or any grid/listing context — there is no "quick add," because a
  quick add treats an Object as inventory rather than a considered
  piece.
- **No artificial urgency, ever.** No countdown timers, no "only 2
  left," no fake scarcity banners, no manufactured flash sales. If
  something is genuinely limited, it is stated once, plainly, as fact
  — not as a pressure tactic.
- **No manipulative ecommerce techniques.** No dark patterns, no
  pre-checked upsells, no guilt-tripping exit modals, no disguised ads
  presented as editorial content, no algorithmic "customers also
  bought" dressed up as curation. "Featured Objects" and "Continue
  Exploring" are editorially curated, per `docs/shopify-architecture.md`
  and `docs/roadmap.md`, precisely so they never become a
  recommendation engine wearing an editorial mask.
- Price is stated plainly (via the `Price` element) with no
  strikethrough-discount theatrics, no anchoring tricks.
- An archived or unavailable Object is shown honestly, in its permanent
  place in the archive, rather than deleted or hidden — the House does
  not pretend a piece never existed just because it can no longer be
  acquired.

## 12. Interaction Principles

Every interaction must respect the visitor's attention as something
borrowed, not owned.

- Nothing moves, opens, or plays without the visitor initiating it.
  No autoplay video with sound, no auto-advancing carousels, no
  surprise modals.
- Every interactive element does exactly one legible thing, and its
  affordance is honest — a button looks like a button, a link looks
  like a link, using the house's own restrained visual language, not
  borrowed SaaS conventions (no shadcn-style component chrome, per
  `CLAUDE.md`).
- Feedback for an action (Acquire added, form submitted) is immediate,
  brief, and calm — never a celebratory animation or a full-screen
  interruption.
- Nothing on the platform is designed to be difficult to leave, cancel,
  or back out of. Respecting attention includes respecting the
  visitor's choice to stop.

## 13. Accessibility Philosophy

Accessibility is treated as part of the House's craft, not as a
compliance checklist bolted on at the end.

- Restraint and accessibility are natural allies here: high-contrast
  Archive White/Chocolate as the dominant palette, generous type sizes,
  and calm, minimal motion (§8) already serve visitors who need clear
  contrast, comfortable reading sizes, and reduced motion.
- Motion must respect `prefers-reduced-motion`; nothing essential to
  understanding a page may depend on an animation completing.
- Every image carries meaningful alternative text — a house that treats
  photography as its primary language must ensure that language is
  available to visitors who use a screen reader.
- Keyboard and assistive-technology users get the same editorial
  experience as everyone else, not a stripped-down fallback. A
  beautiful site that is only beautiful for sighted mouse users is not
  finished.
- Accessibility is never solved by adding visual noise (loud focus
  rings, intrusive skip-link chrome by default) — it is solved by
  making the restrained system work correctly for everyone, revealing
  extra affordances (like focus indication) only to the interaction
  mode that needs them.

## 14. Luxury Principles

Luxury, in this platform, is expressed through restraint and care, not
through embellishment.

- Fewer, better-considered elements on a screen read as more luxurious
  than more elements decorated more heavily. This is why
  `docs/design-system.md` limits the interface to two neutrals and one
  restrained accent.
- Consistency is a luxury signal. Aspect ratios, spacing rhythm, and
  type hierarchy stay predictable across the whole platform so nothing
  ever feels improvised or templated.
- Corners stay near-square (per `docs/design-system.md`) because
  rounded, "friendly" surfaces read as approachable software, not as an
  atelier's considered object.
- Nothing is ever loud to prove its value. A House that has to raise
  its voice to be noticed has already lost the argument it was trying
  to make.
- Slowness, silence, and empty space are not the absence of design —
  in a luxury context, they are the design.

## 15. Things We Never Do

A concrete, standing list. If a proposed feature matches any line
below, it does not ship in this form, regardless of who requested it or
how standard it is elsewhere:

- We never use TT Burgundy, or any colour outside the three brand
  tokens, in the digital interface.
- We never introduce countdown timers, low-stock banners, or fake
  scarcity messaging.
- We never autoplay media with sound, or auto-advance a carousel
  without visitor input.
- We never use exit-intent popups, newsletter interstitials that block
  content, or guilt-trip-style dismiss copy ("No thanks, I don't like
  saving money").
- We never present algorithmic recommendations as if they were
  editorial curation.
- We never surface Acquire from a grid, card, or listing context — only
  from the Object page.
- We never adopt shadcn/ui conventions, dashboard sidebar shells, dense
  data tables, or badge/pill-heavy status UI.
- We never add rounded, "friendly SaaS" corners, drop shadows for
  depth, gradients, glassmorphism, or decorative effects added purely
  for flourish.
- We never truncate an editorial story to shorten a page, or hide
  Object context behind an extra click to make a listing look denser.
- We never delete an Object or Chapter's permanent URL as a way to
  "remove" it — archived content is shown honestly in place.
- We never hardcode a colour, spacing value, font size, radius,
  duration, or z-index outside `src/styles/tokens.css`.
- We never build a feature "because most ecommerce sites have it"
  without first passing it through §16.

## 16. The TT House Design Test

Before any future feature, page, or interaction ships, it must be able
to answer **yes** to every question below. This test applies at every
layer — a new Element, a new Pattern, a full Section, a copy change, a
motion effect.

1. **Does it belong to the House?** Would this feel at home in a
   fashion house's archive or magazine, or does it feel borrowed from a
   generic storefront or SaaS product?
2. **Does it increase clarity?** Does it help the visitor understand
   the House, a Chapter, or an Object more clearly — or does it add
   noise, choice, or friction without adding understanding?
3. **Does it respect silence?** Does it leave white space, pace, and
   quiet where they belong (§4, §5), or does it fill space and time
   just because it can?
4. **Does it improve storytelling?** Does it deepen the narrative
   around a Chapter, Object, or the House itself — or is it purely
   transactional/mechanical with no editorial value?
5. **Would it still feel timeless in ten years?** Or is it chasing a
   current web-design trend, a growth-hacking tactic, or a visual
   fashion that will look dated quickly?
6. **Does it avoid generic ecommerce behaviour?** Does it steer clear
   of the patterns in §15 and the instincts described throughout this
   document — urgency, manipulation, clutter, borrowed SaaS chrome?

**If any answer is No, the feature must be reconsidered** — either
redesigned until it passes, or not built at all. Passing this test is
not optional polish; it is a precondition for the feature existing on
TT House, on the same level as passing `npm run lint`, `npm run
typecheck`, and `npm run build`.

## 17. Future Experience Ideas

Ideas below are exploratory. None are approved for building; they exist
so future sprints have a place to weigh possibilities against this
bible before they are ever scoped. Nothing here overrides
`docs/roadmap.md` — a roadmap sprint still has to be opened, planned,
and passed through §16 before any of this is built.

- **A slower "reading mode" for Journal** — a distraction-free
  presentation for long-form entries, closer to a print magazine layout
  than a typical blog post.
- **Seasonal or archival "House moments"** — a rare, editorially
  curated full-bleed takeover of Home for a genuinely significant
  event (a show, a major collaboration), used sparingly enough that it
  never becomes a routine marketing banner.
- **An Object's provenance trail** — for pieces with a story worth
  telling beyond the Passport (a collaboration piece, a runway piece
  later archived for sale), a quiet narrative thread connecting the
  Object back to the Show or Collaboration that produced it.
- **Considered sound and print companions** — e.g. a printable,
  editorially typeset PDF of a Chapter's story, or a quiet ambient
  audio note on a Show page — explored only if they clear §16 cleanly,
  since they carry real risk of tipping into gimmick.
- **A visitor-controlled "quiet mode"** — an explicit way to strip any
  future non-essential chrome back further, for visitors who want nothing
  but the imagery and the words. A hedge against the platform ever
  drifting away from the restraint this document asks for.

Any of these — or any other future idea — must pass The TT House Design
Test in §16 before a sprint is opened for it.
