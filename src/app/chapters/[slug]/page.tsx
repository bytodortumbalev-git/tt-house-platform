import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getChapterBySlug,
  getChapters,
  getObjectsByChapterSlug,
} from "@/lib/content";
import { ChapterDetail } from "@/components/sections";

export function generateStaticParams() {
  return getChapters().map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return { title: "Chapter Not Found" };
  }

  return {
    title: chapter.title,
    description: chapter.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const objects = getObjectsByChapterSlug(chapter.slug);

  return <ChapterDetail chapter={chapter} objects={objects} />;
}
