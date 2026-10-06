import { Image, MediaPlaceholder } from "@/components/elements";
import type { ObjectMedia } from "@/types/object";

export interface ObjectGalleryProps {
  label: string;
  media?: ObjectMedia[];
}

/** Media gallery for the Object page: primary image plus up to two detail angles. Pan/zoom is deferred — see docs/component-map.md. */
export function ObjectGallery({ label, media = [] }: ObjectGalleryProps) {
  const [primary, ...details] = media;

  return (
    <div className="flex flex-col gap-4">
      {primary?.url ? (
        <Image src={primary.url} alt={primary.alt} aspect="portrait" priority />
      ) : (
        <MediaPlaceholder aspect="portrait" label={`${label} — primary image`} />
      )}
      <div className="grid grid-cols-2 gap-4">
        {details[0]?.url ? (
          <Image src={details[0].url} alt={details[0].alt} aspect="square" />
        ) : (
          <MediaPlaceholder aspect="square" label={`${label} — detail image`} />
        )}
        {details[1]?.url ? (
          <Image src={details[1].url} alt={details[1].alt} aspect="square" />
        ) : (
          <MediaPlaceholder
            aspect="square"
            label={`${label} — detail image, alternate angle`}
          />
        )}
      </div>
    </div>
  );
}
