import { resolveContent } from "./gateway";
import {
  getObjectsLocal,
  getObjectByHandleLocal,
  getObjectsByChapterLocal,
} from "./objects.local";
import {
  getObjectsFromShopify,
  getObjectByHandleFromShopify,
  getObjectsByChapterFromShopify,
} from "./objects.shopify";
import type { TTObject } from "@/types/object";

/**
 * Content-access boundary for Objects (see docs/shopify-architecture.md,
 * "Content data-access boundary"). Route/page components read Objects
 * only through these stable functions — never src/data/objects.ts or
 * src/lib/shopify directly — so switching SHOPIFY_CONTENT_MODE changes
 * nothing at the call sites.
 */

export function getObjects(): Promise<TTObject[]> {
  return resolveContent("getObjects", getObjectsLocal, getObjectsFromShopify);
}

export function getObjectByHandle(
  handle: string,
): Promise<TTObject | undefined> {
  return resolveContent(
    "getObjectByHandle",
    () => getObjectByHandleLocal(handle),
    (config) => getObjectByHandleFromShopify(config, handle),
  );
}

export function getObjectsByChapter(
  chapterHandle: string,
): Promise<TTObject[]> {
  return resolveContent(
    "getObjectsByChapter",
    () => getObjectsByChapterLocal(chapterHandle),
    (config) => getObjectsByChapterFromShopify(config, chapterHandle),
  );
}
