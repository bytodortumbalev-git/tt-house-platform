/** Thrown when SHOPIFY_CONTENT_MODE="shopify" but no valid configuration is present. */
export class ShopifyConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ShopifyConfigError";
  }
}

/** Thrown for network failures, timeouts, non-2xx responses, or GraphQL errors. Never includes the access token. */
export class ShopifyRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ShopifyRequestError";
  }
}
