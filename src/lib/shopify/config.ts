/**
 * Environment/configuration resolution for the Shopify Storefront API
 * integration. See src/lib/shopify/README.md for the full setup guide.
 *
 * The store domain and Storefront access token are read from
 * NEXT_PUBLIC_-prefixed variables (matching Shopify's own convention for
 * Storefront tokens, which are scoped/rate-limited public tokens, unlike
 * Admin API tokens). This module is still server-only in practice: it is
 * imported exclusively by src/lib/shopify/client.ts and
 * src/lib/content/*.shopify.ts, none of which are ever imported from a
 * "use client" component, so the value is never inlined into a browser
 * bundle despite the prefix.
 */

export type ContentMode = "local" | "shopify" | "auto";

export interface ShopifyConfig {
  domain: string;
  token: string;
  apiVersion: string;
}

const VALID_MODES: readonly ContentMode[] = ["local", "shopify", "auto"];
const DEFAULT_API_VERSION = "2024-10";

/** Reads and validates SHOPIFY_CONTENT_MODE, defaulting to "local" for anything unset or unrecognized. */
export function getContentMode(): ContentMode {
  const raw = process.env.SHOPIFY_CONTENT_MODE?.trim().toLowerCase();

  if (raw && (VALID_MODES as readonly string[]).includes(raw)) {
    return raw as ContentMode;
  }

  if (raw) {
    console.warn(
      `[tt-house/shopify] Unrecognized SHOPIFY_CONTENT_MODE "${raw}" — falling back to "local".`,
    );
  }

  return "local";
}

/** Returns the resolved Shopify config, or null when the store domain/token are not both set. */
export function getShopifyConfig(): ShopifyConfig | null {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.trim();
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim();

  if (!domain || !token) {
    return null;
  }

  const apiVersion =
    process.env.SHOPIFY_STOREFRONT_API_VERSION?.trim() || DEFAULT_API_VERSION;

  return { domain, token, apiVersion };
}

export function isShopifyConfigured(): boolean {
  return getShopifyConfig() !== null;
}
