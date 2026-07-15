import { siteConfig } from "@/config/site";
import { Container, Section, Stack } from "@/components/layout";

const COLOR_TOKENS = [
  {
    name: "Archive White",
    token: "--tt-color-archive-white",
    hex: "#F3EFE6",
    swatch: "bg-archive-white",
  },
  {
    name: "Chocolate",
    token: "--tt-color-chocolate",
    hex: "#2B1F1A",
    swatch: "bg-chocolate",
  },
  {
    name: "Midnight Navy",
    token: "--tt-color-midnight-navy",
    hex: "#0D1B2A",
    swatch: "bg-midnight-navy",
  },
] as const;

const TYPE_ROLES = [
  { role: "Display", className: "text-display font-display" },
  { role: "Heading 1", className: "text-h1 font-display" },
  { role: "Heading 2", className: "text-h2 font-display" },
  { role: "Heading 3", className: "text-h3 font-display" },
  { role: "Body", className: "text-body font-body" },
  { role: "Caption", className: "text-caption font-body text-muted" },
  {
    role: "Eyebrow",
    className: "text-eyebrow font-body tracking-wider uppercase text-muted",
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Section spacing="xl">
        <Stack gap="lg">
          <p className="text-eyebrow font-body tracking-wider uppercase text-muted">
            Foundation Preview &mdash; Sprint 2
          </p>
          <h1 className="text-display font-display tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="max-w-content text-body-lg font-body text-foreground/80">
            {siteConfig.description} This page previews the design-token
            foundation only. The production Hero, navigation and Shopify
            integration are built in a later sprint.
          </p>
        </Stack>
      </Section>

      <Section tone="surface" spacing="lg" className="border-t border-border">
        <Stack gap="lg">
          <h2 className="text-h3 font-display">Colour</h2>
          <Stack direction="row" gap="lg" wrap>
            {COLOR_TOKENS.map((color) => (
              <Stack key={color.token} gap="xs" className="w-40">
                <div
                  className={`h-20 w-full rounded-sm border border-border-strong ${color.swatch}`}
                />
                <span className="text-body-sm font-body">{color.name}</span>
                <span className="text-caption font-mono text-muted">
                  {color.hex}
                </span>
              </Stack>
            ))}
          </Stack>
          <p className="max-w-content text-body-sm font-body text-muted">
            Archive White and Chocolate form the visual system. Midnight Navy is
            a restrained accent only. TT Burgundy is retired from the digital
            interface. See docs/design-system.md.
          </p>
        </Stack>
      </Section>

      <Section spacing="lg" className="border-t border-border">
        <Stack gap="lg">
          <h2 className="text-h3 font-display">Typography roles</h2>
          <Stack gap="sm">
            {TYPE_ROLES.map((type) => (
              <Stack
                key={type.role}
                direction="row"
                gap="md"
                align="baseline"
                wrap
              >
                <span className="w-28 shrink-0 text-caption font-body text-muted">
                  {type.role}
                </span>
                <span className={type.className}>The house archive</span>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="accent" spacing="sm" container={false}>
        <Container>
          <p className="text-eyebrow font-body tracking-wider uppercase">
            Accent used sparingly, as a mark rather than a surface
          </p>
        </Container>
      </Section>
    </main>
  );
}
