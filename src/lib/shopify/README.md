# Shopify Storefront API (planned)

This directory is reserved for the future Shopify Storefront API integration.
Nothing here is implemented yet.

Planned layout, once integration begins:

- `client.ts` — Storefront API GraphQL client (fetch-based, using
  `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN`).
- `queries/` — GraphQL query and mutation documents.
- `types.ts` — Types generated or hand-written for Storefront API responses.

See `.env.example` at the project root for the environment variables this
integration will require.
