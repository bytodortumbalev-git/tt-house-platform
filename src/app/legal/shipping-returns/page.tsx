import type { Metadata } from "next";
import { LegalPageShell } from "@/components/patterns";
import { shippingAndReturns } from "@/data/legal";

export const metadata: Metadata = {
  title: shippingAndReturns.title,
  description: "Shipping and returns information for TT House Objects.",
};

export default function Page() {
  return <LegalPageShell page={shippingAndReturns} />;
}
