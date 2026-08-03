import { Heading, Metadata } from "@/components/elements";
import {
  ObjectDetailShell,
  ObjectGallery,
  ObjectPassport,
  ArchivedNotice,
  AcquireButton,
} from "@/components/patterns";
import type { TTObject } from "@/data/objects";
import type { Chapter } from "@/data/chapters";

export interface ObjectDetailProps {
  object: TTObject;
  chapter?: Chapter;
}

/** Individual Object page — gallery, Passport, and a placeholder Acquire action. */
export function ObjectDetail({ object, chapter }: ObjectDetailProps) {
  const isArchived = object.status === "archived";

  return (
    <ObjectDetailShell gallery={<ObjectGallery label={object.name} />}>
      <Metadata>Object{chapter ? ` — ${chapter.title}` : ""}</Metadata>
      <Heading level={1}>{object.name}</Heading>
      <ObjectPassport object={object} chapterTitle={chapter?.title} />
      {isArchived ? (
        <ArchivedNotice
          heading="Archived"
          message="This Object is no longer available to acquire. It remains on permanent record in the House archive."
        />
      ) : (
        <AcquireButton />
      )}
    </ObjectDetailShell>
  );
}
