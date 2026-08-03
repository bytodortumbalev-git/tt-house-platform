import { IndexPageShell, JournalCard } from "@/components/patterns";
import { getJournalEntries } from "@/lib/content";

/** Journal index — every entry as a restrained grid, no blog-card styling. */
export function JournalIndex() {
  const entries = getJournalEntries();

  return (
    <IndexPageShell
      eyebrow="Journal"
      title="The Journal"
      intro="Designer notes, process, and dispatches from the atelier."
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <JournalCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </IndexPageShell>
  );
}
