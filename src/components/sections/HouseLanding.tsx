import { Section } from "@/components/layout";
import { Display, Heading, Body, Metadata, Link } from "@/components/elements";
import { houseContent } from "@/data/house";

/** The House landing page — introduction, founder, manifesto, and placeholders for Collaborations/Shows/Press. */
export function HouseLanding() {
  return (
    <>
      <Section spacing="xl" className="border-b border-border">
        <div className="flex max-w-content flex-col gap-6">
          <Metadata>{houseContent.intro.eyebrow}</Metadata>
          <Display>{houseContent.intro.title}</Display>
          <Body size="lg" className="text-foreground/80">
            {houseContent.intro.copy}
          </Body>
        </div>
      </Section>

      <Section
        tone="surface"
        spacing="lg"
        containerSize="content"
        className="border-b border-border"
      >
        <div className="flex flex-col gap-4">
          <Heading level={2}>{houseContent.founder.heading}</Heading>
          <Body className="text-foreground/80">
            {houseContent.founder.copy}
          </Body>
        </div>
      </Section>

      <Section
        spacing="lg"
        containerSize="content"
        className="border-b border-border"
      >
        <div className="flex flex-col gap-4">
          <Heading level={2}>{houseContent.manifesto.heading}</Heading>
          <Body className="text-foreground/80">
            {houseContent.manifesto.copy}
          </Body>
        </div>
      </Section>

      <Section tone="surface" spacing="lg" className="border-b border-border">
        <div className="flex flex-col gap-8">
          <Metadata>On Record</Metadata>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              houseContent.collaborations,
              houseContent.shows,
              houseContent.press,
            ].map((block) => (
              <div key={block.heading} className="flex flex-col gap-3">
                <Heading level={3}>{block.heading}</Heading>
                <Body size="sm" className="text-foreground/80">
                  {block.copy}
                </Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <Link href="/contact">Contact the House</Link>
      </Section>
    </>
  );
}
