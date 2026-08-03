import type { ReactNode } from "react";
import { Section } from "@/components/layout";
import { Display, Body, Metadata } from "@/components/elements";

export interface EditorialDetailShellProps {
  eyebrow: string;
  title: string;
  meta?: ReactNode;
  dek?: string;
  media?: ReactNode;
  children?: ReactNode;
}

/**
 * Shared shell for narrative detail pages — Chapter detail and Journal
 * detail. A single reading-width column for header and body, with an
 * optional full-width media break in between.
 */
export function EditorialDetailShell({
  eyebrow,
  title,
  meta,
  dek,
  media,
  children,
}: EditorialDetailShellProps) {
  return (
    <>
      <Section
        spacing="xl"
        containerSize="content"
        className="border-b border-border"
      >
        <div className="flex flex-col gap-6">
          <Metadata>{eyebrow}</Metadata>
          <Display>{title}</Display>
          {meta}
          {dek && (
            <Body size="lg" className="text-foreground/80">
              {dek}
            </Body>
          )}
        </div>
      </Section>
      {media && (
        <Section spacing="lg" className="border-b border-border">
          {media}
        </Section>
      )}
      <Section spacing="lg" containerSize="content">
        <div className="flex flex-col gap-6">{children}</div>
      </Section>
    </>
  );
}
