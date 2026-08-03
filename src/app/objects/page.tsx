import type { Metadata } from "next";
import { ObjectDirectory } from "@/components/sections";

export const metadata: Metadata = {
  title: "Objects",
  description:
    "The archive of individual TT House pieces, available and archived.",
};

export default function Page() {
  return <ObjectDirectory />;
}
