/**
 * Normalized Chapter shape. Every content source (local placeholder data,
 * Shopify Collections) is mapped into this type before reaching UI code —
 * see docs/shopify-architecture.md ("Content data-access boundary").
 * Components must never consume a raw Shopify GraphQL response shape.
 */

export type ChapterStatus = "published" | "incomplete";

export interface ChapterHeroMedia {
  url: string | null;
  alt: string;
}

export interface ChapterSeo {
  title: string;
  description: string;
}

export interface Chapter {
  id: string;
  handle: string;
  title: string;
  number: string;
  narrative: string;
  /**
   * "incomplete" Chapters are excluded from /chapters and all listing
   * surfaces, but their direct URL still resolves with a controlled
   * unavailable state — see docs/information-architecture.md.
   */
  status: ChapterStatus;
  isCurrent: boolean;
  heroMedia: ChapterHeroMedia;
  objectHandles: string[];
  seo: ChapterSeo;
}
