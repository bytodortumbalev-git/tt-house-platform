import type { ReactNode } from "react";
import { Section } from "@/components/layout";
import { Display, Body, Metadata } from "@/components/elements";

export interface IndexPageShellProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

/** Shared shell for the Chapter archive, Object directory, and Journal index. */
export function IndexPageShell({
  eyebrow,
  title,
  intro,
  children,
}: IndexPageShellProps) {
  return (
    <>
      <Section spacing="lg" className="border-b border-border">
        <div className="flex max-w-content flex-col gap-6">
          <Metadata>{eyebrow}</Metadata>
          <Display>{title}</Display>
          {intro && (
            <Body size="lg" className="text-foreground/80">
              {intro}
            </Body>
          )}
        </div>
      </Section>
      <Section spacing="lg">{children}</Section>
    </>
  );
}
