import { objects } from "@/data/objects";
import type { TTObject } from "@/data/objects";

/**
 * Content-access boundary for Objects (see the CMS-readiness note in
 * docs/master-blueprint.md). Route/page components read Objects only
 * through these functions, never by importing src/data/objects.ts
 * directly — so a future Shopify Storefront source can replace the
 * implementation here without touching call sites.
 */

export function getObjects(): TTObject[] {
  return objects;
}

export function getObjectBySlug(slug: string): TTObject | undefined {
  return objects.find((object) => object.slug === slug);
}

export function getObjectsByChapterSlug(chapterSlug: string): TTObject[] {
  return objects.filter((object) => object.chapterSlug === chapterSlug);
}
