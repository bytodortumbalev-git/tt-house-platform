import { Section } from "@/components/layout";
import { Heading, Body, Metadata } from "@/components/elements";
import { statement } from "@/data/home";

/** House Statement — a concise, typography-led manifesto. No card, generous space. */
export function HomeStatement() {
  return (
    <Section
      tone="surface"
      spacing="xl"
      containerSize="content"
      className="border-b border-border"
    >
      <div className="flex flex-col gap-6">
        <Metadata>Statement</Metadata>
        <Heading level={2}>{statement.headline}</Heading>
        <Body size="lg" className="text-foreground/80">
          {statement.body}
        </Body>
      </div>
    </Section>
  );
}
