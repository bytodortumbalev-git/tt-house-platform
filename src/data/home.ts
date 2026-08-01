/**
 * Placeholder editorial content for the entrance page (`/`).
 *
 * This is hand-authored copy standing in for Shopify/CMS-backed content —
 * see the CMS-readiness note in docs/master-blueprint.md. Shapes are kept
 * independent of any storage mechanism so they can be swapped for a real
 * data-access boundary without touching the sections that consume them.
 */

export interface ArrivalContent {
  chapterLabel: string;
  chapterSlug: string;
  title: string;
  supportingCopy: string;
}

export interface StatementContent {
  headline: string;
  body: string;
}

export interface ChapterPreview {
  slug: string;
  number: string;
  title: string;
  narrative: string;
}

export interface FeaturedObjectContent {
  slug: string;
  name: string;
  material: string;
  availability: string;
}

export interface HousePreviewContent {
  heading: string;
  copy: string;
}

export interface JournalEntryPreview {
  slug: string;
  title: string;
  dek: string;
  date: string;
}

export interface ArchiveChapterPreview {
  slug: string;
  number: string;
  title: string;
  summary: string;
}

export const arrival: ArrivalContent = {
  chapterLabel: "Chapter III — Current Chapter",
  chapterSlug: "the-long-room",
  title: "The Long Room",
  supportingCopy:
    "Nine pieces, cut for stillness rather than spectacle. Chapter III opens the archive's quietest register — coats and tailoring built to be worn in corridors, not on runways.",
};

export const statement: StatementContent = {
  headline: "A garment considered before it is made.",
  body: "TT House works in small numbers, on our own schedule, with materials chosen to age rather than perform. Every piece belongs first to the archive, and only after to a wardrobe. Nothing leaves the atelier before it is ready — there is no season dictating otherwise.",
};

export const currentChapter: ChapterPreview = {
  slug: "the-long-room",
  number: "Chapter III",
  title: "The Long Room",
  narrative:
    "Named for the corridor of drawers where the House keeps its unfinished patterns, Chapter III returns to outerwear built for stillness — waxed cotton, raw-edged wool, and a single silhouette drafted eleven times until it was right. Nine pieces make up the Chapter; each is numbered, not sized.",
};

export const featuredObject: FeaturedObjectContent = {
  slug: "the-long-room-coat",
  name: "The Long Room Coat",
  material: "Waxed Scottish cotton, horn buttons, hand-finished seams",
  availability: "Edition of forty, numbered on the interior placket.",
};

export const housePreview: HousePreviewContent = {
  heading: "An Independent Practice",
  copy: "TT House began in a single room, with one tailor's refusal to rush. We remain independent — no seasons set by anyone outside the atelier, no collection released before it is ready. What we make, we make slowly, and we keep a record of all of it.",
};

export const journalEntries: JournalEntryPreview[] = [
  {
    slug: "on-sewing-in-silence",
    title: "On Sewing in Silence",
    dek: "Notes from an atelier that keeps no radio on and no clock in view.",
    date: "3 July 2026",
  },
  {
    slug: "the-ledger-reopened",
    title: "The Ledger, Reopened",
    dek: "Why Chapter III returns to a silhouette the House first drafted three years ago.",
    date: "12 May 2026",
  },
  {
    slug: "notes-from-the-cutting-table",
    title: "Notes from the Cutting Table",
    dek: "A short account of the eleven attempts it took to get one coat right.",
    date: "28 February 2026",
  },
];

export const archiveChapters: ArchiveChapterPreview[] = [
  {
    slug: "ash-and-linen",
    number: "Chapter II",
    title: "Ash and Linen",
    summary:
      "The House's first study in undyed cloth — eight pieces, archived in full.",
  },
  {
    slug: "the-first-ledger",
    number: "Chapter I",
    title: "The First Ledger",
    summary:
      "Where the archive begins. TT House's founding chapter, kept permanently on record.",
  },
];
