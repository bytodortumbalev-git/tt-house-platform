import { Section } from "@/components/layout";
import {
  Heading,
  Body,
  Caption,
  Metadata,
  Link,
  Image,
  MediaPlaceholder,
} from "@/components/elements";
import { getCurrentChapter, getObjectsByChapter } from "@/lib/content";

/**
 * Featured Object — one Object, restrained metadata, no Acquire on this
 * listing. Curation rule: the first Object in the current Chapter — see
 * docs/master-blueprint.md ("Featured Objects" is editorially curated,
 * not algorithmic).
 */
export async function HomeFeaturedObject() {
  const currentChapter = await getCurrentChapter();
  const objects = currentChapter
    ? await getObjectsByChapter(currentChapter.handle)
    : [];
  const featuredObject = objects[0];

  if (!featuredObject) {
    return null;
  }

  const primaryMedia = featuredObject.media[0];

  return (
    <Section tone="surface" spacing="xl" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          {primaryMedia?.url ? (
            <Image
              src={primaryMedia.url}
              alt={primaryMedia.alt}
              aspect="portrait"
            />
          ) : (
            <MediaPlaceholder
              aspect="portrait"
              label={primaryMedia?.alt ?? `${featuredObject.title} — Object image`}
            />
          )}
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Metadata>Featured Object</Metadata>
          <Heading level={2}>{featuredObject.title}</Heading>
          <dl className="flex flex-col gap-3">
            <div>
              <dt>
                <Caption className="tracking-wide uppercase">Material</Caption>
              </dt>
              <dd>
                <Body className="text-foreground/80">
                  {featuredObject.material}
                </Body>
              </dd>
            </div>
            <div>
              <dt>
                <Caption className="tracking-wide uppercase">
                  Availability
                </Caption>
              </dt>
              <dd>
                <Body className="text-foreground/80">
                  {featuredObject.edition}
                </Body>
              </dd>
            </div>
          </dl>
          <Link href={`/objects/${featuredObject.handle}`}>
            View the Object
          </Link>
        </div>
      </div>
    </Section>
  );
}
