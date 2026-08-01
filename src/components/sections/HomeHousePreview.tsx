import { Section } from "@/components/layout";
import {
  Heading,
  Body,
  Metadata,
  Link,
  MediaPlaceholder,
} from "@/components/elements";
import { housePreview } from "@/data/home";

/** The House Preview — founder and independent practice, short copy only. */
export function HomeHousePreview() {
  return (
    <Section spacing="xl" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Metadata>The House</Metadata>
          <Heading level={2}>{housePreview.heading}</Heading>
          <Body className="text-foreground/80">{housePreview.copy}</Body>
          <Link href="/the-house">Enter the House</Link>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <MediaPlaceholder
            aspect="portrait"
            label="The House — founder portrait"
            muted
          />
        </div>
      </div>
    </Section>
  );
}
