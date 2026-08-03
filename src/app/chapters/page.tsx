import type { Metadata } from "next";
import { ChapterArchiveGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "The curated Chapters of the TT House archive, past and present.",
};

export default function Page() {
  return <ChapterArchiveGrid />;
}
