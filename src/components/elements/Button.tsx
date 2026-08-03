import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";

const BUTTON_VARIANTS = {
  primary: "bg-chocolate text-foreground-inverse hover:opacity-80",
  secondary: "border border-border-strong text-foreground hover:opacity-70",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  variant?: ButtonVariant;
  children?: ReactNode;
}

/** Flat, square-cornered action control — powers Acquire and other CTAs. No pill/badge chrome. */
export function Button({
  as: Tag = "button",
  variant = "primary",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Tag
      type={Tag === "button" ? type : undefined}
      className={cx(
        "inline-flex w-fit items-center justify-center px-6 py-3 text-body-sm font-body tracking-wide opacity-100 transition-opacity duration-fast ease-standard disabled:pointer-events-none disabled:opacity-40",
        BUTTON_VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
