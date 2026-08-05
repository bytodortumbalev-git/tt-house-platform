import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getChapterByHandle,
  getChapters,
  getObjectsByChapter,
} from "@/lib/content";
import { ChapterDetail } from "@/components/sections";

export async function generateStaticParams() {
  const chapters = await getChapters();
  return chapters.map((chapter) => ({ handle: chapter.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const chapter = await getChapterByHandle(handle);

  if (!chapter) {
    return { title: "Chapter Not Found" };
  }

  return {
    title: chapter.seo.title,
    description: chapter.seo.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const chapter = await getChapterByHandle(handle);

  if (!chapter) {
    notFound();
  }

  const objects = await getObjectsByChapter(chapter.handle);

  return <ChapterDetail chapter={chapter} objects={objects} />;
}
