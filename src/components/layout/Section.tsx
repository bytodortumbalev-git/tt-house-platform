import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container, type ContainerSize } from "./Container";

const SECTION_TONES = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  inverse: "bg-surface-inverse text-foreground-inverse",
  accent: "bg-accent text-accent-foreground",
} as const;

const SECTION_SPACING = {
  sm: "py-8 md:py-10",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
} as const;

export type SectionTone = keyof typeof SECTION_TONES;
export type SectionSpacing = keyof typeof SECTION_SPACING;

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /** Wraps children in a Container. Set to false to manage width yourself. */
  container?: boolean;
  containerSize?: ContainerSize;
  children?: ReactNode;
}

/**
 * Full-bleed page band: applies vertical rhythm and a tone from the
 * TT House palette. The Midnight Navy accent tone should be used sparingly
 * — see docs/design-system.md on the 95% neutral rule.
 */
export function Section({
  as: Tag = "section",
  tone = "default",
  spacing = "lg",
  container = true,
  containerSize = "wide",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cx(SECTION_TONES[tone], SECTION_SPACING[spacing], className)}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  );
}
