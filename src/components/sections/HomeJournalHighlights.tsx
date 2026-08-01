import { Section } from "@/components/layout";
import { Heading, Body, Caption, Metadata, Link } from "@/components/elements";
import { journalEntries } from "@/data/home";

/** Journal Preview — up to three entries as a simple editorial list, no blog cards. */
export function HomeJournalHighlights() {
  return (
    <Section
      tone="surface"
      spacing="xl"
      containerSize="content"
      className="border-b border-border"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Metadata>Journal</Metadata>
          <Heading level={2}>From the Journal</Heading>
        </div>
        <ul className="flex flex-col divide-y divide-border">
          {journalEntries.map((entry) => (
            <li
              key={entry.slug}
              className="flex flex-col gap-3 py-8 first:pt-0 last:pb-0"
            >
              <Caption className="tracking-wide uppercase">
                {entry.date}
              </Caption>
              <Heading level={3}>{entry.title}</Heading>
              <Body size="sm" className="text-foreground/80">
                {entry.dek}
              </Body>
              <Link href={`/journal/${entry.slug}`}>Read the Entry</Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
