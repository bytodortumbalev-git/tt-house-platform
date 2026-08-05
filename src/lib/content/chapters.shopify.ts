import { shopifyFetch, type ShopifyConfig } from "@/lib/shopify";
import {
  COLLECTIONS_QUERY,
  COLLECTION_BY_HANDLE_QUERY,
} from "@/lib/shopify/queries/collections";
import type {
  CollectionByHandleResponse,
  CollectionsResponse,
  ShopifyCollectionNode,
} from "@/lib/shopify/types";
import type { Chapter } from "@/types/chapter";

/**
 * A Collection is a complete Chapter only once it carries both required
 * editorial Metafields (story + campaign_media) — see
 * docs/shopify-architecture.md ("Chapters"). Missing either marks the
 * Chapter "incomplete": excluded from listings, but still resolvable at
 * its direct URL with a controlled unavailable state.
 */
function mapCollectionToChapter(node: ShopifyCollectionNode): Chapter {
  const narrative = node.story?.value ?? "";
  const heroUrl = node.campaignMedia?.value ?? node.image?.url ?? null;
  const isComplete = Boolean(narrative) && Boolean(node.campaignMedia?.value);

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    number: node.number?.value ?? "",
    narrative,
    status: isComplete ? "published" : "incomplete",
    isCurrent: node.isCurrent?.value === "true",
    heroMedia: {
      url: heroUrl,
      alt: node.image?.altText ?? `${node.title} — Chapter campaign image`,
    },
    objectHandles: [],
    seo: {
      title: node.seo?.title || node.title,
      description: node.seo?.description || narrative,
    },
  };
}

export async function getChaptersFromShopify(
  config: ShopifyConfig,
): Promise<Chapter[]> {
  const data = await shopifyFetch<CollectionsResponse>(
    config,
    COLLECTIONS_QUERY,
    { first: 50 },
  );
  return data.collections.edges.map((edge) =>
    mapCollectionToChapter(edge.node),
  );
}

export async function getChapterByHandleFromShopify(
  config: ShopifyConfig,
  handle: string,
): Promise<Chapter | undefined> {
  const data = await shopifyFetch<CollectionByHandleResponse>(
    config,
    COLLECTION_BY_HANDLE_QUERY,
    { handle },
  );

  if (!data.collectionByHandle) {
    return undefined;
  }

  const chapter = mapCollectionToChapter(data.collectionByHandle);
  chapter.objectHandles = data.collectionByHandle.products.edges.map(
    (edge) => edge.node.handle,
  );
  return chapter;
}

/** Applies the eligibility + tie-break rule from docs/shopify-architecture.md ("Home feature selection"). */
export async function getCurrentChapterFromShopify(
  config: ShopifyConfig,
): Promise<Chapter | undefined> {
  const data = await shopifyFetch<CollectionsResponse>(
    config,
    COLLECTIONS_QUERY,
    { first: 50 },
  );
  const nodes = data.collections.edges.map((edge) => edge.node);

  const eligible = nodes.filter(
    (node) =>
      node.isCurrent?.value === "true" &&
      Boolean(node.story?.value) &&
      Boolean(node.campaignMedia?.value),
  );

  if (eligible.length === 0) {
    return undefined;
  }

  if (eligible.length > 1) {
    console.warn(
      `[tt-house/content] Multiple current Chapters flagged in Shopify (${eligible
        .map((node) => node.handle)
        .join(", ")}) — using the most recently updated.`,
    );
  }

  const winner = [...eligible].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  )[0];

  return mapCollectionToChapter(winner);
}
