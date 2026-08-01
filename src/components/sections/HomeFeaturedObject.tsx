import { Section } from "@/components/layout";
import {
  Heading,
  Body,
  Caption,
  Metadata,
  Link,
  MediaPlaceholder,
} from "@/components/elements";
import { featuredObject } from "@/data/home";

/** Featured Object — one Object, restrained metadata, no Acquire on this listing. */
export function HomeFeaturedObject() {
  return (
    <Section tone="surface" spacing="xl" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <MediaPlaceholder
            aspect="portrait"
            label={`${featuredObject.name} — Object image`}
          />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Metadata>Featured Object</Metadata>
          <Heading level={2}>{featuredObject.name}</Heading>
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
                  {featuredObject.availability}
                </Body>
              </dd>
            </div>
          </dl>
          <Link href={`/objects/${featuredObject.slug}`}>View the Object</Link>
        </div>
      </div>
    </Section>
  );
}
