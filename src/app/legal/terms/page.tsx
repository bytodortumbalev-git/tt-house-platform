import type { Metadata } from "next";
import { LegalPageShell } from "@/components/patterns";
import { termsOfUse } from "@/data/legal";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: "Terms governing use of the TT House site and archive.",
};

export default function Page() {
  return <LegalPageShell page={termsOfUse} />;
}
