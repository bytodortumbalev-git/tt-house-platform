import { chapters } from "@/data/chapters";
import type { Chapter } from "@/data/chapters";

/**
 * Content-access boundary for Chapters (see the CMS-readiness note in
 * docs/master-blueprint.md). Route/page components read Chapters only
 * through these functions, never by importing src/data/chapters.ts
 * directly — so a future Shopify Collection/Metafield source can replace
 * the implementation here without touching call sites.
 */

export function getChapters(): Chapter[] {
  return chapters;
}

/** Excludes incomplete Chapters — see docs/information-architecture.md. */
export function getPublishedChapters(): Chapter[] {
  return chapters.filter((chapter) => chapter.status === "published");
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}
