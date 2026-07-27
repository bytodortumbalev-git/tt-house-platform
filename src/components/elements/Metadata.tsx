import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface MetadataProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Small tracked-out label for dates, kickers, and section labels — quiet orientation, never shouting. */
export function Metadata({
  as: Tag = "span",
  className,
  children,
  ...props
}: MetadataProps) {
  return (
    <Tag
      className={cx(
        "text-eyebrow font-body tracking-wider uppercase text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
