import { journalEntries } from "@/data/journal";
import type { JournalEntry } from "@/types/journal";

/**
 * Content-access boundary for Journal entries. Journal remains
 * repository-local in this sprint — see docs/master-blueprint.md
 * (Journal is the flagged first CMS/Shopify migration candidate) and
 * requirement 5 of the Sprint 7 brief. Functions are still async to
 * keep a uniform call signature with getChapters()/getObjects(), so a
 * future migration doesn't change call sites.
 */

export async function getJournalEntries(): Promise<JournalEntry[]> {
  return journalEntries;
}

export async function getJournalEntryByHandle(
  handle: string,
): Promise<JournalEntry | undefined> {
  return journalEntries.find((entry) => entry.handle === handle);
}
