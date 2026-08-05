import { Heading, Body, Metadata, Tag } from "@/components/elements";
import {
  ObjectDetailShell,
  ObjectGallery,
  ObjectPassport,
  ArchivedNotice,
  AcquireButton,
} from "@/components/patterns";
import { formatPrice } from "@/lib/format";
import type { TTObject } from "@/types/object";
import type { Chapter } from "@/types/chapter";

export interface ObjectDetailProps {
  object: TTObject;
  chapter?: Chapter;
}

/** Individual Object page — gallery, Passport, Shopify price/availability when present, and a placeholder Acquire action. */
export function ObjectDetail({ object, chapter }: ObjectDetailProps) {
  const isArchived = object.availability === "archived";
  const price = formatPrice(object.price, object.currency);
  const hasCommerceInfo = price !== null || object.variants.length > 0;

  return (
    <ObjectDetailShell gallery={<ObjectGallery label={object.title} />}>
      <Metadata>Object{chapter ? ` — ${chapter.title}` : ""}</Metadata>
      <Heading level={1}>{object.title}</Heading>
      <ObjectPassport object={object} chapterTitle={chapter?.title} />

      {hasCommerceInfo && (
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <Metadata>Shopify</Metadata>
          {price !== null && (
            <Body className="text-foreground/80">
              {price} ·{" "}
              {object.availability === "available" ? "In Stock" : "Archived"}
            </Body>
          )}
          {object.variants.length > 0 && (
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {object.variants.map((variant) => (
                <li key={variant.id}>
                  <Tag>
                    {variant.title}
                    {!variant.availableForSale ? " — Sold Out" : ""}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

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
