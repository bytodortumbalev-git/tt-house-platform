import type { Chapter } from "@/types/chapter";

/**
 * Placeholder Chapter data, shaped directly as the normalized Chapter
 * type (see src/types/chapter.ts) so local mode needs no mapping step.
 * Consumed only through src/lib/content/chapters.ts, never imported
 * directly by route/page files — see docs/master-blueprint.md
 * (CMS-readiness) and docs/shopify-architecture.md.
 */

export const chapters: Chapter[] = [
  {
    id: "chapter-the-first-ledger",
    handle: "the-first-ledger",
    title: "The First Ledger",
    number: "Chapter I",
    narrative:
      "The First Ledger was cut before the House had a name for itself — six pieces made on a single domestic machine, each one logged by hand in the notebook that gave the Chapter its title. Every piece from this Chapter has since been archived; none remain available to acquire, but all remain on permanent record, exactly as they were made.",
    status: "published",
    isCurrent: false,
    heroMedia: {
      url: null,
      alt: "The First Ledger — Chapter campaign image",
    },
    objectHandles: ["the-ledger-coat", "the-ledger-satchel"],
    seo: {
      title: "The First Ledger",
      description:
        "Where the archive begins. TT House's founding chapter, kept permanently on record.",
    },
  },
  {
    id: "chapter-ash-and-linen",
    handle: "ash-and-linen",
    title: "Ash and Linen",
    number: "Chapter II",
    narrative:
      "Ash and Linen set the House's first rule: nothing dyed, nothing printed, nothing hidden by colour. Eight pieces in undyed linen and ash-grey wool, cut to show construction rather than disguise it. The Chapter closed once its edition sold through, and its pieces remain here, archived rather than removed.",
    status: "published",
    isCurrent: false,
    heroMedia: {
      url: null,
      alt: "Ash and Linen — Chapter campaign image",
    },
    objectHandles: ["the-ash-shirt", "the-linen-trouser"],
    seo: {
      title: "Ash and Linen",
      description:
        "The House's first study in undyed cloth — eight pieces, archived in full.",
    },
  },
  {
    id: "chapter-the-long-room",
    handle: "the-long-room",
    title: "The Long Room",
    number: "Chapter III",
    narrative:
      "Named for the corridor of drawers where the House keeps its unfinished patterns, Chapter III returns to outerwear built for stillness — waxed cotton, raw-edged wool, and a single silhouette drafted eleven times until it was right. Nine pieces make up the Chapter; each is numbered, not sized.",
    status: "published",
    isCurrent: true,
    heroMedia: {
      url: null,
      alt: "The Long Room — Chapter campaign image",
    },
    objectHandles: ["the-long-room-coat", "the-long-room-trouser"],
    seo: {
      title: "The Long Room",
      description: "Nine pieces, cut for stillness rather than spectacle.",
    },
  },
  {
    id: "chapter-iv",
    handle: "chapter-iv",
    title: "Chapter IV",
    number: "Chapter IV",
    narrative: "",
    status: "incomplete",
    isCurrent: false,
    heroMedia: {
      url: null,
      alt: "Chapter IV — Chapter campaign image",
    },
    objectHandles: [],
    seo: {
      title: "Chapter IV",
      description: "Details forthcoming.",
    },
  },
];
