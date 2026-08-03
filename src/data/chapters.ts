/**
 * Placeholder Chapter data. Structured independently of storage so it can
 * be replaced by Shopify Collection + Metafield data later — see the
 * CMS-readiness note in docs/master-blueprint.md. Consumed only through
 * src/lib/content/chapters.ts, never imported directly by route/page files.
 */

export interface Chapter {
  slug: string;
  number: string;
  title: string;
  summary: string;
  narrative: string;
  /**
   * "incomplete" Chapters are excluded from /chapters and all listing
   * surfaces, but their direct URL still resolves with a controlled
   * unavailable state — see docs/information-architecture.md.
   */
  status: "published" | "incomplete";
}

export const chapters: Chapter[] = [
  {
    slug: "the-first-ledger",
    number: "Chapter I",
    title: "The First Ledger",
    summary:
      "Where the archive begins. TT House's founding chapter, kept permanently on record.",
    narrative:
      "The First Ledger was cut before the House had a name for itself — six pieces made on a single domestic machine, each one logged by hand in the notebook that gave the Chapter its title. Every piece from this Chapter has since been archived; none remain available to acquire, but all remain on permanent record, exactly as they were made.",
    status: "published",
  },
  {
    slug: "ash-and-linen",
    number: "Chapter II",
    title: "Ash and Linen",
    summary:
      "The House's first study in undyed cloth — eight pieces, archived in full.",
    narrative:
      "Ash and Linen set the House's first rule: nothing dyed, nothing printed, nothing hidden by colour. Eight pieces in undyed linen and ash-grey wool, cut to show construction rather than disguise it. The Chapter closed once its edition sold through, and its pieces remain here, archived rather than removed.",
    status: "published",
  },
  {
    slug: "the-long-room",
    number: "Chapter III",
    title: "The Long Room",
    summary: "Nine pieces, cut for stillness rather than spectacle.",
    narrative:
      "Named for the corridor of drawers where the House keeps its unfinished patterns, Chapter III returns to outerwear built for stillness — waxed cotton, raw-edged wool, and a single silhouette drafted eleven times until it was right. Nine pieces make up the Chapter; each is numbered, not sized.",
    status: "published",
  },
  {
    slug: "chapter-iv",
    number: "Chapter IV",
    title: "Chapter IV",
    summary: "Details forthcoming.",
    narrative: "",
    status: "incomplete",
  },
];
