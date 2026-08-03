import type { Metadata } from "next";
import { HouseLanding } from "@/components/sections";
import { houseContent } from "@/data/house";

export const metadata: Metadata = {
  title: houseContent.intro.title,
  description: houseContent.intro.copy,
};

export default function Page() {
  return <HouseLanding />;
}
