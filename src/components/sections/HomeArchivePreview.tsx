import { Section } from "@/components/layout";
import {
  Heading,
  Body,
  Caption,
  Metadata,
  Link,
  MediaPlaceholder,
} from "@/components/elements";
import { archiveChapters } from "@/data/home";

/** Archive Preview — two previous Chapters, clearly archival, no commerce actions. */
export function HomeArchivePreview() {
  return (
    <Section spacing="xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Metadata>The Archive</Metadata>
          <Heading level={2}>Previous Chapters</Heading>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
          {archiveChapters.map((chapter) => (
            <div key={chapter.slug} className="flex flex-col gap-4">
              <MediaPlaceholder
                aspect="landscape"
                label={`${chapter.title} — archived campaign image`}
                muted
              />
              <Caption className="tracking-wide uppercase">
                {chapter.number} — Archived
              </Caption>
              <Heading level={3}>{chapter.title}</Heading>
              <Body size="sm" className="text-foreground/80">
                {chapter.summary}
              </Body>
              <Link href={`/chapters/${chapter.slug}`}>View the Chapter</Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
