import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Small supporting text — image captions, footnotes, helper copy. */
export function Caption({
  as: Tag = "span",
  className,
  children,
  ...props
}: CaptionProps) {
  return (
    <Tag
      className={cx("text-caption font-body text-muted", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
