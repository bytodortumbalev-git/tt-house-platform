import type { Metadata } from "next";
import { ContactPage } from "@/components/sections";
import { contactIntro } from "@/data/contact";

export const metadata: Metadata = {
  title: contactIntro.title,
  description: contactIntro.copy,
};

export default function Page() {
  return <ContactPage />;
}
