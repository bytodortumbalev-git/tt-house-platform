import { Section } from "@/components/layout";
import {
  Heading,
  Body,
  Metadata,
  Link,
  MediaPlaceholder,
} from "@/components/elements";
import { getCurrentChapter } from "@/lib/content";

/** Current Chapter — one Chapter, presented in full narrative, no product grid. */
export async function HomeCurrentChapter() {
  const currentChapter = await getCurrentChapter();

  if (!currentChapter) {
    return null;
  }

  return (
    <Section spacing="xl" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <MediaPlaceholder
            aspect="landscape"
            label={currentChapter.heroMedia.alt}
          />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Metadata>{currentChapter.number} — Current Chapter</Metadata>
          <Heading level={2}>{currentChapter.title}</Heading>
          <Body className="text-foreground/80">{currentChapter.narrative}</Body>
          <Link href={`/chapters/${currentChapter.handle}`}>
            Enter the Chapter
          </Link>
        </div>
      </div>
    </Section>
  );
}
