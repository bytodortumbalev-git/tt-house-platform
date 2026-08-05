import { Body, Tag } from "@/components/elements";
import { EditorialDetailShell } from "@/components/patterns";
import type { JournalEntry } from "@/types/journal";

export interface JournalDetailProps {
  entry: JournalEntry;
}

/** Individual Journal article — publication date, category and author metadata, full editorial body. */
export function JournalDetail({ entry }: JournalDetailProps) {
  return (
    <EditorialDetailShell
      eyebrow={entry.category}
      title={entry.title}
      dek={entry.dek}
      meta={
        <Tag>
          {entry.date} · {entry.author}
        </Tag>
      }
    >
      {entry.body.map((paragraph, index) => (
        <Body key={index} className="text-foreground/80">
          {paragraph}
        </Body>
      ))}
    </EditorialDetailShell>
  );
}
