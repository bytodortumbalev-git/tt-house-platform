import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

const STACK_DIRECTIONS = {
  column: "flex-col",
  row: "flex-row",
} as const;

const STACK_GAPS = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
} as const;

const STACK_ALIGN = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

const STACK_JUSTIFY = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export type StackDirection = keyof typeof STACK_DIRECTIONS;
export type StackGap = keyof typeof STACK_GAPS;
export type StackAlign = keyof typeof STACK_ALIGN;
export type StackJustify = keyof typeof STACK_JUSTIFY;

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  children?: ReactNode;
}

/** Flex layout primitive for consistent, token-driven spacing between elements. */
export function Stack({
  as: Tag = "div",
  direction = "column",
  gap = "md",
  align,
  justify,
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Tag
      className={cx(
        "flex",
        STACK_DIRECTIONS[direction],
        STACK_GAPS[gap],
        align && STACK_ALIGN[align],
        justify && STACK_JUSTIFY[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
