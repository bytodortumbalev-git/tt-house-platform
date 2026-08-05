import { shopifyFetch, type ShopifyConfig } from "@/lib/shopify";
import {
  PRODUCTS_QUERY,
  PRODUCT_BY_HANDLE_QUERY,
  PRODUCTS_BY_COLLECTION_HANDLE_QUERY,
} from "@/lib/shopify/queries/products";
import type {
  ProductByHandleResponse,
  ProductsByCollectionHandleResponse,
  ProductsResponse,
  ShopifyProductNode,
} from "@/lib/shopify/types";
import type { TTObject } from "@/types/object";

/**
 * Availability is derived from `availableForSale`, not Shopify's product
 * status — the Storefront API only ever returns published/active
 * products, so a genuinely archived/draft product is invisible to it.
 * See src/lib/shopify/README.md, "Current limitations".
 */
function mapProductToObject(node: ShopifyProductNode): TTObject {
  const media = [
    ...(node.featuredImage
      ? [
          {
            url: node.featuredImage.url,
            alt: node.featuredImage.altText ?? node.title,
          },
        ]
      : []),
    ...node.images.edges.map((edge) => ({
      url: edge.node.url,
      alt: edge.node.altText ?? node.title,
    })),
  ];

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    editorialCopy: node.editorialCopy?.value ?? "",
    material: node.material?.value ?? "",
    origin: node.origin?.value ?? "",
    construction: node.construction?.value ?? "",
    edition: node.edition?.value ?? "",
    availability: node.availableForSale ? "available" : "archived",
    price: node.priceRange?.minVariantPrice
      ? Number(node.priceRange.minVariantPrice.amount)
      : null,
    currency: node.priceRange?.minVariantPrice?.currencyCode ?? null,
    media,
    chapterHandle: node.collections.edges[0]?.node.handle ?? "",
    shopifyProductId: node.id,
    variants: node.variants.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title,
      availableForSale: edge.node.availableForSale,
      price: edge.node.price ? Number(edge.node.price.amount) : null,
    })),
    seo: {
      title: node.seo?.title || node.title,
      description: node.seo?.description || node.editorialCopy?.value || "",
    },
  };
}

export async function getObjectsFromShopify(
  config: ShopifyConfig,
): Promise<TTObject[]> {
  const data = await shopifyFetch<ProductsResponse>(config, PRODUCTS_QUERY, {
    first: 100,
  });
  return data.products.edges.map((edge) => mapProductToObject(edge.node));
}

export async function getObjectByHandleFromShopify(
  config: ShopifyConfig,
  handle: string,
): Promise<TTObject | undefined> {
  const data = await shopifyFetch<ProductByHandleResponse>(
    config,
    PRODUCT_BY_HANDLE_QUERY,
    { handle },
  );

  if (!data.productByHandle) {
    return undefined;
  }

  return mapProductToObject(data.productByHandle);
}

export async function getObjectsByChapterFromShopify(
  config: ShopifyConfig,
  chapterHandle: string,
): Promise<TTObject[]> {
  const data = await shopifyFetch<ProductsByCollectionHandleResponse>(
    config,
    PRODUCTS_BY_COLLECTION_HANDLE_QUERY,
    { handle: chapterHandle },
  );

  if (!data.collectionByHandle) {
    return [];
  }

  return data.collectionByHandle.products.edges.map((edge) =>
    mapProductToObject(edge.node),
  );
}
