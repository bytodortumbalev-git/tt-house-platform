import { journalEntries } from "@/data/journal";
import type { JournalEntry } from "@/data/journal";

/**
 * Content-access boundary for Journal entries (see the CMS-readiness
 * note in docs/master-blueprint.md — Journal is the most likely first
 * CMS candidate). Route/page components read Journal only through these
 * functions, never by importing src/data/journal.ts directly.
 */

export function getJournalEntries(): JournalEntry[] {
  return journalEntries;
}

export function getJournalEntryBySlug(slug: string): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug);
}
