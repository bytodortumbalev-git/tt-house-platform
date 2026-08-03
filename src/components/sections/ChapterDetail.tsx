import { Section } from "@/components/layout";
import { Heading, Body, MediaPlaceholder } from "@/components/elements";
import {
  EditorialDetailShell,
  ArchivedNotice,
  ObjectCard,
} from "@/components/patterns";
import type { Chapter } from "@/data/chapters";
import type { TTObject } from "@/data/objects";

export interface ChapterDetailProps {
  chapter: Chapter;
  objects: TTObject[];
}

/** Individual Chapter page — narrative, media, and its associated Objects. */
export function ChapterDetail({ chapter, objects }: ChapterDetailProps) {
  const incomplete = chapter.status === "incomplete";

  return (
    <>
      <EditorialDetailShell
        eyebrow={`${chapter.number} — Chapter`}
        title={chapter.title}
        media={
          !incomplete ? (
            <MediaPlaceholder
              aspect="landscape"
              label={`${chapter.title} — Chapter campaign image`}
            />
          ) : undefined
        }
      >
        {incomplete ? (
          <ArchivedNotice
            heading="Chapter Forthcoming"
            message="This Chapter has not yet been fully archived. Its story will appear here once it is complete."
          />
        ) : (
          <Body className="text-foreground/80">{chapter.narrative}</Body>
        )}
      </EditorialDetailShell>

      {!incomplete && objects.length > 0 && (
        <Section spacing="lg">
          <div className="flex flex-col gap-8">
            <Heading level={2}>Objects in this Chapter</Heading>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {objects.map((object) => (
                <ObjectCard key={object.slug} object={object} />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
