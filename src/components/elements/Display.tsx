import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  children?: ReactNode;
}

/**
 * The house's largest editorial voice — reserved for a page's single
 * primary statement (e.g. the Home hero headline).
 */
export function Display({
  as: Tag = "h1",
  className,
  children,
  ...props
}: DisplayProps) {
  return (
    <Tag
      className={cx("text-display font-display tracking-tight", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
