import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

/** House text link — no button chrome, quiet opacity fade on hover, arrow affordance. */
export function Link({ href, className, children, ...props }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cx(
        "inline-flex w-fit items-center gap-2 text-body-sm font-body tracking-wide text-foreground opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true">&rarr;</span>
    </NextLink>
  );
}
