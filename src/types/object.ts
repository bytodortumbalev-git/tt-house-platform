/**
 * Normalized Object shape. Every content source (local placeholder data,
 * Shopify Products) is mapped into this type before reaching UI code —
 * see docs/shopify-architecture.md ("Content data-access boundary").
 * Components must never consume a raw Shopify GraphQL response shape.
 *
 * Named TTObject to avoid colliding with the global `Object`.
 */

export type ObjectAvailability = "available" | "archived";

export interface ObjectMedia {
  url: string | null;
  alt: string;
}

export interface ObjectVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: number | null;
}

export interface ObjectSeo {
  title: string;
  description: string;
}

export interface TTObject {
  id: string;
  handle: string;
  title: string;
  editorialCopy: string;
  material: string;
  origin: string;
  construction: string;
  edition: string;
  /**
   * Archived Objects keep their permanent URL and full Passport, with an
   * archived-state notice in place of Acquire. In shopify/auto mode this
   * is derived from `availableForSale`, not Shopify's product status —
   * the Storefront API only returns published/active products, so a
   * genuinely archived/draft product is invisible to it entirely (see
   * src/lib/shopify/README.md, "Current limitations").
   */
  availability: ObjectAvailability;
  price: number | null;
  currency: string | null;
  media: ObjectMedia[];
  chapterHandle: string;
  shopifyProductId: string | null;
  variants: ObjectVariant[];
  seo: ObjectSeo;
}
