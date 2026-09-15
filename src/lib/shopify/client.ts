import type { ShopifyConfig } from "./config";
import { ShopifyRequestError } from "./errors";

const REQUEST_TIMEOUT_MS = 8000;
/** Server-side fetch cache revalidation window for catalog reads (seconds). */
export const CONTENT_REVALIDATE_SECONDS = 300;

interface GraphQLError {
  message: string;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

/**
 * Centralized, typed Shopify Storefront API client. Server-only: never
 * import this module from a "use client" component or a route/page
 * component directly — call through src/lib/content/ instead, per
 * docs/shopify-architecture.md.
 *
 * Authenticates with a private Storefront API access token (Shopify's
 * server-side token type), sent via the Shopify-Storefront-Private-Token
 * header — never the public X-Shopify-Storefront-Access-Token header,
 * which is meant for browser/mobile clients.
 */
export async function shopifyFetch<T>(
  config: ShopifyConfig,
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  if (typeof window !== "undefined") {
    throw new ShopifyRequestError(
      "shopifyFetch must only be called from server-side code.",
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(
      `https://${config.domain}/api/${config.apiVersion}/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Shopify-Storefront-Private-Token": config.token,
        },
        body: JSON.stringify({ query, variables }),
        signal: controller.signal,
        next: { revalidate: CONTENT_REVALIDATE_SECONDS },
      },
    );
  } catch (cause) {
    if (cause instanceof Error && cause.name === "AbortError") {
      throw new ShopifyRequestError(
        "Shopify Storefront API request timed out.",
      );
    }
    throw new ShopifyRequestError("Shopify Storefront API request failed.", {
      cause,
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new ShopifyRequestError(
      `Shopify Storefront API responded with status ${response.status}.`,
    );
  }

  const payload = (await response.json()) as GraphQLResponse<T>;

  if (payload.errors && payload.errors.length > 0) {
    throw new ShopifyRequestError(
      `Shopify Storefront API returned GraphQL errors: ${payload.errors
        .map((error) => error.message)
        .join("; ")}`,
    );
  }

  if (!payload.data) {
    throw new ShopifyRequestError("Shopify Storefront API returned no data.");
  }

  return payload.data;
}
