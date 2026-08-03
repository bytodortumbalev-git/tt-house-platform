import NextLink from "next/link";
import { Heading, Body, Tag, MediaPlaceholder } from "@/components/elements";
import type { TTObject } from "@/data/objects";

export interface ObjectCardProps {
  object: TTObject;
}

/**
 * Single Object preview: image, name, material, link. No Acquire —
 * Acquire is never surfaced from a grid/listing context, only the Object
 * page itself. Archived Objects stay visible, marked as archived.
 */
export function ObjectCard({ object }: ObjectCardProps) {
  const isArchived = object.status === "archived";

  return (
    <NextLink
      href={`/objects/${object.slug}`}
      className="flex flex-col gap-4 opacity-100 transition-opacity duration-fast ease-standard hover:opacity-80"
    >
      <MediaPlaceholder
        aspect="portrait"
        label={`${object.name} — Object image`}
        muted={isArchived}
      />
      <div className="flex flex-col gap-2">
        <Heading level={3}>{object.name}</Heading>
        <Body size="sm" className="text-foreground/80">
          {object.material}
        </Body>
        {isArchived && <Tag>Archived</Tag>}
      </div>
    </NextLink>
  );
}
