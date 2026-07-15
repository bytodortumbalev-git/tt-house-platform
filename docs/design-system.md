# TT House Design System

This is the reference for the token system introduced in Sprint 2. The
single source of truth for every value here is
`src/styles/tokens.css`; Tailwind utility classes are generated from those
tokens by the `@theme inline` block in `src/app/globals.css`. If a value
you need isn't documented below, extend `tokens.css` — don't hardcode it in
a component.

TT House is a luxury editorial fashion platform, not a SaaS dashboard. This
system is deliberately restrained: two neutrals carry almost everything,
one accent is used sparingly, corners stay square, and nothing is
decorative for its own sake.

## Colour

| Token                      | Hex       | Tailwind utility                          | Role                    |
| -------------------------- | --------- | ----------------------------------------- | ----------------------- |
| `--tt-color-archive-white` | `#F3EFE6` | `bg-archive-white` / `text-archive-white` | Primary neutral surface |
| `--tt-color-chocolate`     | `#2B1F1A` | `bg-chocolate` / `text-chocolate`         | Primary neutral ink     |
| `--tt-color-midnight-navy` | `#0D1B2A` | `bg-midnight-navy` / `text-midnight-navy` | Restrained accent only  |

Semantic aliases (prefer these in components over the raw brand tokens):

| Semantic token                  | Resolves to                  | Tailwind utility            |
| ------------------------------- | ---------------------------- | --------------------------- |
| `--tt-color-background`         | Archive White                | `bg-background`             |
| `--tt-color-foreground`         | Chocolate                    | `text-foreground`           |
| `--tt-color-surface`            | Archive White                | `bg-surface`                |
| `--tt-color-surface-inverse`    | Chocolate                    | `bg-surface-inverse`        |
| `--tt-color-foreground-inverse` | Archive White                | `text-foreground-inverse`   |
| `--tt-color-accent`             | Midnight Navy                | `bg-accent` / `text-accent` |
| `--tt-color-accent-foreground`  | Archive White                | `text-accent-foreground`    |
| `--tt-color-border`             | Chocolate at 16% opacity     | `border-border`             |
| `--tt-color-border-strong`      | Chocolate at 40% opacity     | `border-border-strong`      |
| `--tt-color-muted`              | Chocolate mixed toward white | `text-muted`                |

### Rules

- **TT Burgundy must never appear in the digital interface.** It is
  retired from this system entirely — do not add it as a token under any
  name.
- **Archive White and Chocolate must form ~95% of any screen.** They are
  the visual system, not "the neutrals next to the real colours."
- **Midnight Navy is a mark, not a surface.** Use it for small accents —
  a rule, a link state, a single line of eyebrow text, a thin band — never
  as a large background or a dominant UI colour. If a screen leans on navy
  for more than a small fraction of its area, that's a signal to pull back.
- No new brand colour may be introduced. If a design calls for one, that's
  a conversation to have explicitly — not something to solve by adding a
  hex value to a component.

## Typography

Font families are placeholder system stacks until licensed brand typefaces
are selected — swap `--tt-font-display` / `--tt-font-body` in
`tokens.css` when that happens, and every role updates automatically.

| Role       | Token               | Tailwind classes                                  | Size      |
| ---------- | ------------------- | ------------------------------------------------- | --------- |
| Display    | `--tt-text-display` | `text-display font-display`                       | 3.5rem    |
| Heading 1  | `--tt-text-h1`      | `text-h1 font-display`                            | 2.75rem   |
| Heading 2  | `--tt-text-h2`      | `text-h2 font-display`                            | 2.125rem  |
| Heading 3  | `--tt-text-h3`      | `text-h3 font-display`                            | 1.625rem  |
| Heading 4  | `--tt-text-h4`      | `text-h4 font-display`                            | 1.25rem   |
| Body large | `--tt-text-body-lg` | `text-body-lg font-body`                          | 1.125rem  |
| Body       | `--tt-text-body`    | `text-body font-body`                             | 1rem      |
| Body small | `--tt-text-body-sm` | `text-body-sm font-body`                          | 0.875rem  |
| Caption    | `--tt-text-caption` | `text-caption font-body`                          | 0.8125rem |
| Eyebrow    | `--tt-text-eyebrow` | `text-eyebrow font-body tracking-wider uppercase` | 0.75rem   |

Each role carries its own line-height (`--tt-leading-*`); the display and
eyebrow roles also carry their own letter-spacing. Weights are
`--tt-weight-regular` (400), `--tt-weight-medium` (500) and
`--tt-weight-semibold` (600) — mapped to the standard `font-weight-*`
Tailwind utilities.

`tracking-tight` / `tracking-wide` / `tracking-wider` are intentionally
overridden from Tailwind's defaults to match the editorial scale — using
these utilities anywhere in the app gets brand-consistent tracking for
free.

## Spacing

Spacing is powered by a single 4px base unit (`--tt-space-unit`, mapped to
Tailwind's `--spacing`), so every numeric Tailwind spacing utility
(`p-*`, `gap-*`, `space-y-*`, `m-*`, etc.) is already on-token. The named
steps in `tokens.css` document the editorial rhythm scale and which
utility suffix produces each value:

| Token           | Value   | Utility suffix |
| --------------- | ------- | -------------- |
| `--tt-space-1`  | 0.25rem | `1`            |
| `--tt-space-2`  | 0.5rem  | `2`            |
| `--tt-space-3`  | 0.75rem | `3`            |
| `--tt-space-4`  | 1rem    | `4`            |
| `--tt-space-6`  | 1.5rem  | `6`            |
| `--tt-space-8`  | 2rem    | `8`            |
| `--tt-space-10` | 2.5rem  | `10`           |
| `--tt-space-12` | 3rem    | `12`           |
| `--tt-space-16` | 4rem    | `16`           |
| `--tt-space-20` | 5rem    | `20`           |
| `--tt-space-24` | 6rem    | `24`           |
| `--tt-space-32` | 8rem    | `32`           |
| `--tt-space-40` | 10rem   | `40`           |

Prefer the `Stack` and `Section` primitives over hand-picked `gap-*`/`py-*`
values so spacing stays consistent across the app.

## Container widths

Named distinctly from Tailwind's built-in `max-w-sm/md/lg/xl/...` scale so
this brand scale extends it rather than silently overriding those defaults
elsewhere in the app.

| Token                    | Value | Tailwind utility | Typical use                       |
| ------------------------ | ----- | ---------------- | --------------------------------- |
| `--tt-container-narrow`  | 40rem | `max-w-narrow`   | Narrow forms, focused content     |
| `--tt-container-content` | 42rem | `max-w-content`  | Editorial body copy measure       |
| `--tt-container-base`    | 56rem | `max-w-base`     | Default article/detail width      |
| `--tt-container-wide`    | 72rem | `max-w-wide`     | Standard page container           |
| `--tt-container-widest`  | 88rem | `max-w-widest`   | Full editorial spreads, galleries |

`--tt-container-gutter` (1.5rem) is the horizontal padding the `Container`
primitive applies (`px-6 md:px-8`).

## Breakpoints

`--tt-breakpoint-sm/md/lg/xl/2xl` match Tailwind v4's built-in
`--breakpoint-*` scale exactly (40rem / 48rem / 64rem / 80rem / 96rem) and
exist in `tokens.css` purely as documentation. They are **not**
re-declared in the `@theme` block: CSS forbids `var()` inside `@media`
conditions, so breakpoints must stay literal values. Use Tailwind's
standard `sm:` / `md:` / `lg:` / `xl:` / `2xl:` prefixes as normal.

## Borders

Corners stay near-square — this is deliberately not a rounded "friendly
SaaS" surface. `--radius-sm` and `--radius-md` intentionally override
Tailwind's defaults (0.25rem→0.125rem, 0.375rem→0.25rem) so `rounded-sm`
and `rounded-md` are on-brand everywhere they're used.

| Token                        | Value    |
| ---------------------------- | -------- |
| `--tt-border-width-hairline` | 1px      |
| `--tt-border-width-thick`    | 2px      |
| `--tt-radius-none`           | 0        |
| `--tt-radius-sm`             | 0.125rem |
| `--tt-radius-md`             | 0.25rem  |

## Motion

| Token                   | Value                           | Utility            |
| ----------------------- | ------------------------------- | ------------------ |
| `--tt-duration-instant` | 100ms                           | `duration-instant` |
| `--tt-duration-fast`    | 150ms                           | `duration-fast`    |
| `--tt-duration-base`    | 250ms                           | `duration-base`    |
| `--tt-duration-slow`    | 400ms                           | `duration-slow`    |
| `--tt-duration-slower`  | 600ms                           | `duration-slower`  |
| `--tt-ease-standard`    | `cubic-bezier(0.4, 0, 0.2, 1)`  | `ease-standard`    |
| `--tt-ease-editorial`   | `cubic-bezier(0.16, 1, 0.3, 1)` | `ease-editorial`   |

Motion should read as quiet and considered — favour fades and restrained
easing over bouncy or springy effects.

## Z-index layers

Tailwind v4 has no themeable `z-*` namespace, so these stay as plain CSS
custom properties (consume via `z-[var(--tt-z-modal)]` or inline style):

| Token            | Value | Layer                    |
| ---------------- | ----- | ------------------------ |
| `--tt-z-base`    | 0     | Default flow             |
| `--tt-z-content` | 10    | Elevated in-flow content |
| `--tt-z-sticky`  | 20    | Sticky headers/nav       |
| `--tt-z-overlay` | 30    | Scrims, backdrops        |
| `--tt-z-modal`   | 40    | Dialogs, drawers         |
| `--tt-z-popover` | 50    | Popovers, dropdowns      |
| `--tt-z-toast`   | 60    | Toasts/notifications     |

## Layout primitives

`src/components/layout/` (`Container`, `Section`, `Stack`) are the
building blocks for page structure. Prefer them over ad hoc flex/width
markup:

```tsx
import { Container, Section, Stack } from "@/components/layout";

<Section tone="surface" spacing="lg">
  <Stack gap="lg">
    <h2 className="text-h2 font-display">Chapter title</h2>
    <p className="text-body font-body">Editorial copy…</p>
  </Stack>
</Section>;
```

- **Container** — centers content and caps width using the container
  scale above (`size` prop).
- **Section** — a full-bleed page band with vertical rhythm (`spacing`)
  and a colour `tone` from the palette; wraps children in a `Container`
  by default.
- **Stack** — flex layout with token-driven `gap`, `direction`, `align`
  and `justify`.

## Visual restrictions

- No shadcn/ui visual system.
- No generic gradients, glassmorphism, or excessive/decorative shadows.
- No decorative effects for their own sake.
- See `CLAUDE.md` and `docs/development-rules.md` for the full project
  rules this design system supports.
