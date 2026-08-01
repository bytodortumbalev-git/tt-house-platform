import type { ElementType, HTMLAttributes } from "react";
import { cx } from "@/lib/cx";

const MEDIA_ASPECTS = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export type MediaAspect = keyof typeof MEDIA_ASPECTS;

export interface MediaPlaceholderProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  aspect?: MediaAspect;
  /** Describes the eventual photograph — carried as the accessible name until a real image lands. */
  label: string;
  /** Signals lower visual priority, e.g. archived material. */
  muted?: boolean;
}

/**
 * Neutral editorial media block standing in for art-directed photography
 * that hasn't been shot/uploaded yet. Replace with the house `Image`
 * element once a real asset exists — see docs/component-map.md.
 */
export function MediaPlaceholder({
  as: Tag = "div",
  aspect = "landscape",
  label,
  muted = false,
  className,
  ...props
}: MediaPlaceholderProps) {
  return (
    <Tag
      role="img"
      aria-label={label}
      className={cx(
        "flex w-full flex-col justify-end border border-border bg-surface",
        MEDIA_ASPECTS[aspect],
        muted && "opacity-70",
        className,
      )}
      {...props}
    >
      <span className="border-t border-border px-4 py-3 text-caption font-body text-muted">
        {label}
      </span>
    </Tag>
  );
}
