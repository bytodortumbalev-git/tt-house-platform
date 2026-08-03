import { Body, Metadata } from "@/components/elements";

export interface ArchivedNoticeProps {
  heading?: string;
  message: string;
}

/**
 * Renders in place of Acquire/VariantSelector for an archived Object, or
 * in place of editorial content for an incomplete Chapter resolved at its
 * direct URL — see docs/component-map.md.
 */
export function ArchivedNotice({
  heading = "Currently Unavailable",
  message,
}: ArchivedNoticeProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-6">
      <Metadata>{heading}</Metadata>
      <Body className="text-foreground/80">{message}</Body>
    </div>
  );
}
