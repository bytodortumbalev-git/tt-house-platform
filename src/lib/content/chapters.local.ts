import { chapters } from "@/data/chapters";
import type { Chapter } from "@/types/chapter";

export function getChaptersLocal(): Chapter[] {
  return chapters;
}

export function getChapterByHandleLocal(handle: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.handle === handle);
}

export function getCurrentChapterLocal(): Chapter | undefined {
  return chapters.find(
    (chapter) => chapter.isCurrent && chapter.status === "published",
  );
}
