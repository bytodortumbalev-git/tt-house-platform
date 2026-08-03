import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalEntryBySlug, getJournalEntries } from "@/lib/content";
import { JournalDetail } from "@/components/sections";

export function generateStaticParams() {
  return getJournalEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntryBySlug(slug);

  if (!entry) {
    return { title: "Entry Not Found" };
  }

  return {
    title: entry.title,
    description: entry.dek,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return <JournalDetail entry={entry} />;
}
