import NextImage from "next/image";
import { cx } from "@/lib/cx";
import { MEDIA_ASPECTS, type MediaAspect } from "./MediaPlaceholder";

export interface ImageProps {
  src: string;
  alt: string;
  aspect?: MediaAspect;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/** `next/image` wrapper enforcing house aspect ratios — see docs/component-map.md. */
export function Image({
  src,
  alt,
  aspect = "landscape",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: ImageProps) {
  return (
    <div
      className={cx(
        "relative w-full overflow-hidden border border-border bg-surface",
        MEDIA_ASPECTS[aspect],
        className,
      )}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
