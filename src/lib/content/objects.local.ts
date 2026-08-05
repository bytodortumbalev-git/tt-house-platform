import { objects } from "@/data/objects";
import type { TTObject } from "@/types/object";

export function getObjectsLocal(): TTObject[] {
  return objects;
}

export function getObjectByHandleLocal(handle: string): TTObject | undefined {
  return objects.find((object) => object.handle === handle);
}

export function getObjectsByChapterLocal(chapterHandle: string): TTObject[] {
  return objects.filter((object) => object.chapterHandle === chapterHandle);
}
