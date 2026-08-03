import { Section } from "@/components/layout";
import { Display, Heading, Body, Metadata } from "@/components/elements";
import type { LegalPage } from "@/data/legal";

export interface LegalPageShellProps {
  page: LegalPage;
}

/** Shared shell for the three legal pages: Privacy, Terms, Shipping & Returns. */
export function LegalPageShell({ page }: LegalPageShellProps) {
  return (
    <Section spacing="xl" containerSize="content">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Metadata>Legal</Metadata>
          <Display>{page.title}</Display>
          <Body size="sm" className="text-muted">
            Last updated {page.lastUpdated}
          </Body>
        </div>
        <div className="flex flex-col gap-8">
          {page.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <Heading level={2}>{section.heading}</Heading>
              <Body className="text-foreground/80">{section.body}</Body>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
