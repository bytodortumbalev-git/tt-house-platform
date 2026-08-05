/** Formats a Shopify money value consistently. Returns null if either part is missing. */
export function formatPrice(
  amount: number | null,
  currency: string | null,
): string | null {
  if (amount === null || !currency) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
