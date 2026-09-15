/**
 * Environment/configuration resolution for the Shopify Storefront API
 * integration. See src/lib/shopify/README.md for the full setup guide.
 *
 * The store domain and Storefront access token are read from
 * unprefixed, server-only environment variables. This integration uses a
 * private Storefront API access token (from the Headless sales channel),
 * which — unlike a public Storefront token — must never be inlined into a
 * browser bundle. This module is imported exclusively by
 * src/lib/shopify/client.ts and src/lib/content/*.shopify.ts, none of
 * which are ever imported from a "use client" component, so the value
 * never reaches client code.
 */

export type ContentMode = "local" | "shopify" | "auto";

export interface ShopifyConfig {
  domain: string;
  token: string;
  apiVersion: string;
}

const VALID_MODES: readonly ContentMode[] = ["local", "shopify", "auto"];
const DEFAULT_API_VERSION = "2026-07";

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
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim();
  const token = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN?.trim();

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
