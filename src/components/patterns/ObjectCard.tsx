import NextLink from "next/link";
import {
  Heading,
  Body,
  Tag,
  Image,
  MediaPlaceholder,
} from "@/components/elements";
import type { TTObject } from "@/types/object";

export interface ObjectCardProps {
  object: TTObject;
}

/**
 * Single Object preview: image, name, material, link. No Acquire —
 * Acquire is never surfaced from a grid/listing context, only the Object
 * page itself. Archived Objects stay visible, marked as archived.
 */
export function ObjectCard({ object }: ObjectCardProps) {
  const isArchived = object.availability === "archived";
  const primaryMedia = object.media[0];

  return (
    <NextLink
      href={`/objects/${object.handle}`}
      className="flex flex-col gap-4 opacity-100 transition-opacity duration-fast ease-standard hover:opacity-80"
    >
      {primaryMedia?.url ? (
        <Image
          src={primaryMedia.url}
          alt={primaryMedia.alt}
          aspect="portrait"
          className={isArchived ? "opacity-70" : undefined}
        />
      ) : (
        <MediaPlaceholder
          aspect="portrait"
          label={primaryMedia?.alt ?? `${object.title} — Object image`}
          muted={isArchived}
        />
      )}
      <div className="flex flex-col gap-2">
        <Heading level={3}>{object.title}</Heading>
        <Body size="sm" className="text-foreground/80">
          {object.material}
        </Body>
        {isArchived && <Tag>Archived</Tag>}
      </div>
    </NextLink>
  );
}
