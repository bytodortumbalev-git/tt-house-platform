import {
  getContentMode,
  getShopifyConfig,
  ShopifyConfigError,
  type ShopifyConfig,
} from "@/lib/shopify";

/**
 * Single mode-resolution path shared by every content getter — see
 * docs/shopify-architecture.md ("Content data-access boundary").
 *
 * - local: always reads local placeholder data.
 * - shopify: requires valid configuration; throws ShopifyConfigError
 *   otherwise, so misconfiguration fails loudly rather than silently
 *   serving placeholder content in what's meant to be a live mode.
 * - auto: uses Shopify when configured, silently reading local data when
 *   it isn't (this is the expected local-dev shape, not a failure), and
 *   falling back to local data with a logged warning if a configured
 *   Shopify request fails at runtime — a Shopify outage must not crash
 *   the app in auto mode.
 */
export async function resolveContent<T>(
  label: string,
  readLocal: () => T | Promise<T>,
  readShopify: (config: ShopifyConfig) => Promise<T>,
): Promise<T> {
  const mode = getContentMode();

  if (mode === "local") {
    return readLocal();
  }

  const config = getShopifyConfig();

  if (mode === "shopify") {
    if (!config) {
      throw new ShopifyConfigError(
        `SHOPIFY_CONTENT_MODE is "shopify" but Shopify is not configured (${label}). Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN in the environment.`,
      );
    }
    return readShopify(config);
  }

  // auto
  if (!config) {
    return readLocal();
  }

  try {
    return await readShopify(config);
  } catch (error) {
    console.warn(
      `[tt-house/content] Shopify request failed for "${label}" in auto mode — falling back to local content. ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return readLocal();
  }
}
