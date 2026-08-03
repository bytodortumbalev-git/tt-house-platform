import type { Metadata } from "next";
import { LegalPageShell } from "@/components/patterns";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: "How TT House collects, uses, and protects visitor information.",
};

export default function Page() {
  return <LegalPageShell page={privacyPolicy} />;
}
