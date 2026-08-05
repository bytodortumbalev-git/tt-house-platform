import type { JournalEntry } from "@/types/journal";

/**
 * Placeholder Journal data. Journal is the most likely first CMS
 * candidate (see docs/master-blueprint.md) — this shape is kept
 * storage-agnostic and is consumed only through
 * src/lib/content/journal.ts, never imported directly by route/page files.
 */

export const journalEntries: JournalEntry[] = [
  {
    handle: "on-sewing-in-silence",
    title: "On Sewing in Silence",
    dek: "Notes from an atelier that keeps no radio on and no clock in view.",
    date: "3 July 2026",
    category: "Atelier Notes",
    author: "TT House",
    body: [
      "There is no radio in the workroom, and there has never been a clock in view of the cutting table. Both were early decisions, made before the House had a name, and neither has been reconsidered since.",
      "Silence is not a mood here — it is a working condition. A dropped stitch is easier to hear than to see, and a seam that is about to go wrong makes a sound before it looks wrong. We would rather notice early.",
      "Visitors sometimes ask if the quiet is for atmosphere. It isn't. It's for the work.",
    ],
  },
  {
    handle: "the-ledger-reopened",
    title: "The Ledger, Reopened",
    dek: "Why Chapter III returns to a silhouette the House first drafted three years ago.",
    date: "12 May 2026",
    category: "Process",
    author: "TT House",
    body: [
      "The pattern for the Long Room Coat is not new. A version of it appears in the House's first notebook, three drafts before the coat that became Chapter I's centrepiece — set aside at the time because the cloth wasn't right.",
      "We found the right cloth this year: a waxed Scottish cotton that ages the way we wanted the original to. Reopening an old pattern is slower than drawing a new one, but it means the silhouette has already been tested against the only critic that matters, which is time.",
      "Chapter III is, in that sense, a continuation of the Ledger rather than a departure from it.",
    ],
  },
  {
    handle: "notes-from-the-cutting-table",
    title: "Notes from the Cutting Table",
    dek: "A short account of the eleven attempts it took to get one coat right.",
    date: "28 February 2026",
    category: "Process",
    author: "TT House",
    body: [
      "Eleven toiles for one coat is not unusual here, though it surprises people when we say it plainly. Ten were wrong in ways that only became visible once worn — a shoulder that read correctly on the stand and badly in motion, a hem that hung well until the wearer sat down.",
      "The eleventh was right, and it is the version now in the Chapter. We kept the other ten. They live in the Long Room the Chapter is named for, alongside the ledger that recorded each attempt.",
    ],
  },
  {
    handle: "on-keeping-an-archive",
    title: "On Keeping an Archive",
    dek: "Why nothing TT House makes is ever fully retired.",
    date: "9 January 2026",
    category: "Designer Notes",
    author: "TT House",
    body: [
      "An archived Object, in most houses, means a deleted one — the page taken down, the record erased along with the stock. We do the opposite. Every piece TT House has ever finished keeps its page, whether or not it can still be acquired.",
      "This isn't nostalgia. It's accountability. A House that hides its old work is a House asking to be judged only on its newest work, and we don't think that's an honest way to be looked at.",
      "So the archive stays open, in full, permanently — Chapter I included.",
    ],
  },
];
