import type { Metadata } from "next";
import { Section } from "@/components/layout";
import {
  Display,
  Body,
  Metadata as Eyebrow,
  Link,
} from "@/components/elements";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <Section spacing="xl" containerSize="content">
      <div className="flex flex-col gap-6">
        <Eyebrow>Not Found</Eyebrow>
        <Display>This Page Has Left the Archive</Display>
        <Body size="lg" className="text-foreground/80">
          The page you were looking for does not exist, or its address has
          changed. It may never have been catalogued at all.
        </Body>
        <Link href="/">Return to the Entrance</Link>
      </div>
    </Section>
  );
}
