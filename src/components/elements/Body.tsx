import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

const BODY_SIZES = {
  lg: "text-body-lg",
  base: "text-body",
  sm: "text-body-sm",
} as const;

export type BodySize = keyof typeof BODY_SIZES;

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  size?: BodySize;
  children?: ReactNode;
}

/** Body/body-lg/body-sm text role wrapper for editorial copy. */
export function Body({
  as: Tag = "p",
  size = "base",
  className,
  children,
  ...props
}: BodyProps) {
  return (
    <Tag className={cx(BODY_SIZES[size], "font-body", className)} {...props}>
      {children}
    </Tag>
  );
}
