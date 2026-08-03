import type { ReactNode } from "react";
import { Section } from "@/components/layout";

export interface ObjectDetailShellProps {
  gallery: ReactNode;
  children: ReactNode;
}

/**
 * Shared shell for the Object detail page — a fixed media column beside a
 * scrolling content column at desktop widths, per the detail template in
 * docs/component-map.md.
 */
export function ObjectDetailShell({
  gallery,
  children,
}: ObjectDetailShellProps) {
  return (
    <Section spacing="xl">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:col-span-6">{gallery}</div>
        <div className="flex flex-col gap-6 lg:col-span-6">{children}</div>
      </div>
    </Section>
  );
}
