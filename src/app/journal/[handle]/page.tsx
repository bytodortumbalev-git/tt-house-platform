import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalEntryByHandle, getJournalEntries } from "@/lib/content";
import { JournalDetail } from "@/components/sections";

export async function generateStaticParams() {
  const entries = await getJournalEntries();
  return entries.map((entry) => ({ handle: entry.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const entry = await getJournalEntryByHandle(handle);

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
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const entry = await getJournalEntryByHandle(handle);

  if (!entry) {
    notFound();
  }

  return <JournalDetail entry={entry} />;
}
