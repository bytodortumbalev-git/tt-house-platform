import type { Metadata } from "next";
import { JournalIndex } from "@/components/sections";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Designer notes, process, and dispatches from the TT House atelier.",
};

export default function Page() {
  return <JournalIndex />;
}
