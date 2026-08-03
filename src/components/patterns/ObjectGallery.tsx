import { MediaPlaceholder } from "@/components/elements";

export interface ObjectGalleryProps {
  label: string;
}

/** Static media gallery placeholder for the Object page. Pan/zoom is deferred — see docs/component-map.md. */
export function ObjectGallery({ label }: ObjectGalleryProps) {
  return (
    <div className="flex flex-col gap-4">
      <MediaPlaceholder aspect="portrait" label={`${label} — primary image`} />
      <div className="grid grid-cols-2 gap-4">
        <MediaPlaceholder aspect="square" label={`${label} — detail image`} />
        <MediaPlaceholder
          aspect="square"
          label={`${label} — detail image, alternate angle`}
        />
      </div>
    </div>
  );
}
