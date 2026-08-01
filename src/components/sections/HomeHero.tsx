import { Section } from "@/components/layout";
import {
  Display,
  Body,
  Metadata,
  Link,
  MediaPlaceholder,
} from "@/components/elements";
import { arrival } from "@/data/home";

/** Arrival — full-height entrance to the House, one current point of focus. */
export function HomeHero() {
  return (
    <Section
      spacing="xl"
      className="flex min-h-screen items-center border-b border-border"
    >
      <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Metadata>{arrival.chapterLabel}</Metadata>
          <Display>{arrival.title}</Display>
          <Body size="lg" className="max-w-content text-foreground/80">
            {arrival.supportingCopy}
          </Body>
          <Link href={`/chapters/${arrival.chapterSlug}`}>
            Explore the Chapter
          </Link>
        </div>
        <div className="lg:col-span-7">
          <MediaPlaceholder
            aspect="portrait"
            label={`${arrival.title} — campaign image`}
          />
        </div>
      </div>
    </Section>
  );
}
