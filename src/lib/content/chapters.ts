import { resolveContent } from "./gateway";
import {
  getChaptersLocal,
  getChapterByHandleLocal,
  getCurrentChapterLocal,
} from "./chapters.local";
import {
  getChaptersFromShopify,
  getChapterByHandleFromShopify,
  getCurrentChapterFromShopify,
} from "./chapters.shopify";
import type { Chapter } from "@/types/chapter";

/**
 * Content-access boundary for Chapters (see docs/shopify-architecture.md,
 * "Content data-access boundary"). Route/page components read Chapters
 * only through these stable functions — never src/data/chapters.ts or
 * src/lib/shopify directly — so switching SHOPIFY_CONTENT_MODE changes
 * nothing at the call sites.
 */

export function getChapters(): Promise<Chapter[]> {
  return resolveContent(
    "getChapters",
    getChaptersLocal,
    getChaptersFromShopify,
  );
}

/** Excludes incomplete Chapters — see docs/information-architecture.md. */
export async function getPublishedChapters(): Promise<Chapter[]> {
  const chapters = await getChapters();
  return chapters.filter((chapter) => chapter.status === "published");
}

export function getChapterByHandle(
  handle: string,
): Promise<Chapter | undefined> {
  return resolveContent(
    "getChapterByHandle",
    () => getChapterByHandleLocal(handle),
    (config) => getChapterByHandleFromShopify(config, handle),
  );
}

export function getCurrentChapter(): Promise<Chapter | undefined> {
  return resolveContent(
    "getCurrentChapter",
    getCurrentChapterLocal,
    getCurrentChapterFromShopify,
  );
}
