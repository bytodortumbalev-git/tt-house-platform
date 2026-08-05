import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getObjectByHandle,
  getObjects,
  getChapterByHandle,
} from "@/lib/content";
import { ObjectDetail } from "@/components/sections";

export async function generateStaticParams() {
  const objects = await getObjects();
  return objects.map((object) => ({ handle: object.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const object = await getObjectByHandle(handle);

  if (!object) {
    return { title: "Object Not Found" };
  }

  return {
    title: object.seo.title,
    description: object.seo.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const object = await getObjectByHandle(handle);

  if (!object) {
    notFound();
  }

  const chapter = await getChapterByHandle(object.chapterHandle);

  return <ObjectDetail object={object} chapter={chapter} />;
}
