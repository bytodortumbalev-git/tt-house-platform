import { Body, Tag } from "@/components/elements";
import type { TTObject } from "@/data/objects";

export interface ObjectPassportProps {
  object: TTObject;
  chapterTitle?: string;
}

/** Structured display of an Object's Passport fields — materials, origin, construction, availability, Chapter. */
export function ObjectPassport({ object, chapterTitle }: ObjectPassportProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Material", value: object.material },
    { label: "Origin", value: object.origin },
    { label: "Construction", value: object.construction },
    { label: "Availability", value: object.availability },
    ...(chapterTitle ? [{ label: "Chapter", value: chapterTitle }] : []),
  ];

  return (
    <dl className="flex flex-col divide-y divide-border border-t border-border">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
        >
          <dt className="sm:w-40 sm:shrink-0">
            <Tag>{row.label}</Tag>
          </dt>
          <dd>
            <Body className="text-foreground/80">{row.value}</Body>
          </dd>
        </div>
      ))}
    </dl>
  );
}
