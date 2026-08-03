import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface TagProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Flat label for Family/material/status — no badge or pill chrome. */
export function Tag({
  as: Component = "span",
  className,
  children,
  ...props
}: TagProps) {
  return (
    <Component
      className={cx(
        "text-caption font-body tracking-wide uppercase text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
