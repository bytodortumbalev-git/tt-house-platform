import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

const CONTAINER_SIZES = {
  narrow: "max-w-narrow",
  content: "max-w-content",
  base: "max-w-base",
  wide: "max-w-wide",
  widest: "max-w-widest",
} as const;

export type ContainerSize = keyof typeof CONTAINER_SIZES;

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: ContainerSize;
  children?: ReactNode;
}

/**
 * Centers content and caps its width using the TT House container scale
 * (see src/styles/tokens.css). Intentionally distinct from Tailwind's
 * built-in max-w-sm/md/lg/xl scale.
 */
export function Container({
  as: Tag = "div",
  size = "wide",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        "mx-auto w-full px-6 md:px-8",
        CONTAINER_SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
