import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

const HEADING_LEVELS = {
  1: "text-h1",
  2: "text-h2",
  3: "text-h3",
  4: "text-h4",
} as const;

export type HeadingLevel = keyof typeof HEADING_LEVELS;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  level?: HeadingLevel;
  children?: ReactNode;
}

/** H1–H4 text role wrapper. `level` sets both the semantic tag and the size unless `as` overrides the tag. */
export function Heading({
  as,
  level = 2,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as ElementType);
  return (
    <Tag
      className={cx(HEADING_LEVELS[level], "font-display", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
