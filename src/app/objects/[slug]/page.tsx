import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectBySlug, getObjects, getChapterBySlug } from "@/lib/content";
import { ObjectDetail } from "@/components/sections";

export function generateStaticParams() {
  return getObjects().map((object) => ({ slug: object.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const object = getObjectBySlug(slug);

  if (!object) {
    return { title: "Object Not Found" };
  }

  return {
    title: object.name,
    description: `${object.material} — ${object.availability}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const object = getObjectBySlug(slug);

  if (!object) {
    notFound();
  }

  const chapter = getChapterBySlug(object.chapterSlug);

  return <ObjectDetail object={object} chapter={chapter} />;
}
