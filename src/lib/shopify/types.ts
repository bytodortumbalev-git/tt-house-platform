/**
 * Raw Shopify Storefront API response shapes. Internal to src/lib/shopify
 * and src/lib/content/*.shopify.ts only — UI code must never see these;
 * everything is mapped into src/types/ before it reaches a component.
 */

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
}

export interface ShopifyMetafield {
  value: string;
}

export interface ShopifySeo {
  title: string | null;
  description: string | null;
}

export interface ShopifyCollectionNode {
  id: string;
  handle: string;
  title: string;
  updatedAt: string;
  image: ShopifyImage | null;
  number: ShopifyMetafield | null;
  story: ShopifyMetafield | null;
  isCurrent: ShopifyMetafield | null;
  campaignMedia: ShopifyMetafield | null;
  seo: ShopifySeo | null;
}

export interface ShopifyCollectionWithProductsNode extends ShopifyCollectionNode {
  products: {
    edges: { node: { id: string; handle: string } }[];
  };
}

export interface CollectionsResponse {
  collections: {
    edges: { node: ShopifyCollectionNode }[];
  };
}

export interface CollectionByHandleResponse {
  collectionByHandle: ShopifyCollectionWithProductsNode | null;
}

export interface ShopifyProductVariantNode {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyMoney;
}

export interface ShopifyProductNode {
  id: string;
  handle: string;
  title: string;
  availableForSale: boolean;
  updatedAt: string;
  featuredImage: ShopifyImage | null;
  images: { edges: { node: ShopifyImage }[] };
  priceRange: { minVariantPrice: ShopifyMoney };
  variants: { edges: { node: ShopifyProductVariantNode }[] };
  collections: { edges: { node: { handle: string } }[] };
  material: ShopifyMetafield | null;
  origin: ShopifyMetafield | null;
  construction: ShopifyMetafield | null;
  edition: ShopifyMetafield | null;
  editorialCopy: ShopifyMetafield | null;
  seo: ShopifySeo | null;
}

export interface ProductsResponse {
  products: {
    edges: { node: ShopifyProductNode }[];
  };
}

export interface ProductByHandleResponse {
  productByHandle: ShopifyProductNode | null;
}

export interface ProductsByCollectionHandleResponse {
  collectionByHandle: {
    products: { edges: { node: ShopifyProductNode }[] };
  } | null;
}
