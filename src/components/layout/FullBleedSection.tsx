import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { Section, type SectionTone, type SectionSpacing } from "./Section";

export interface FullBleedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  children?: ReactNode;
}

/** Edge-to-edge page band with no Container cap — for full-bleed imagery and campaign moments. */
export function FullBleedSection({
  as = "section",
  tone = "default",
  spacing = "lg",
  className,
  children,
  ...props
}: FullBleedSectionProps) {
  return (
    <Section
      as={as}
      tone={tone}
      spacing={spacing}
      container={false}
      className={className}
      {...props}
    >
      {children}
    </Section>
  );
}
