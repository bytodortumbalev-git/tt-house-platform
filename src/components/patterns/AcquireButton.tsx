import { Button, Body } from "@/components/elements";

/**
 * Placeholder Acquire action — no checkout integration yet. Disabled
 * rather than silently non-functional, with a plain explanation instead
 * of a fake interaction.
 */
export function AcquireButton() {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-6">
      <Button disabled aria-label="Acquire — checkout not yet available">
        Acquire
      </Button>
      <Body size="sm" className="text-muted">
        Acquire opens once the House connects checkout.
      </Body>
    </div>
  );
}
