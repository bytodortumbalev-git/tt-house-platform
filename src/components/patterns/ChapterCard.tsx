import NextLink from "next/link";
import { Heading, Body, Tag, MediaPlaceholder } from "@/components/elements";
import type { Chapter } from "@/data/chapters";

export interface ChapterCardProps {
  chapter: Chapter;
}

/** Single Chapter preview: campaign image, number, title, short line, link. */
export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <NextLink
      href={`/chapters/${chapter.slug}`}
      className="flex flex-col gap-4 opacity-100 transition-opacity duration-fast ease-standard hover:opacity-80"
    >
      <MediaPlaceholder
        aspect="landscape"
        label={`${chapter.title} — Chapter campaign image`}
      />
      <div className="flex flex-col gap-2">
        <Tag>{chapter.number}</Tag>
        <Heading level={3}>{chapter.title}</Heading>
        <Body size="sm" className="text-foreground/80">
          {chapter.summary}
        </Body>
      </div>
    </NextLink>
  );
}
