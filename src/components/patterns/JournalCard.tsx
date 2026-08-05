import NextLink from "next/link";
import { Heading, Body, Tag } from "@/components/elements";
import type { JournalEntry } from "@/types/journal";

export interface JournalCardProps {
  entry: JournalEntry;
}

/** Single Journal entry preview: date/category, title, dek — no blog-card chrome. */
export function JournalCard({ entry }: JournalCardProps) {
  return (
    <NextLink
      href={`/journal/${entry.handle}`}
      className="flex flex-col gap-3 opacity-100 transition-opacity duration-fast ease-standard hover:opacity-80"
    >
      <Tag>
        {entry.date} · {entry.category}
      </Tag>
      <Heading level={3}>{entry.title}</Heading>
      <Body size="sm" className="text-foreground/80">
        {entry.dek}
      </Body>
    </NextLink>
  );
}
