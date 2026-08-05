/**
 * Collection (Chapter) queries. Metafield namespaces/keys match
 * docs/shopify-architecture.md ("Chapters" ownership table), plus a
 * `tt_house_chapter.number` metafield for the Chapter's display number
 * (e.g. "Chapter III"), which this sprint adds to that table — see
 * src/lib/shopify/README.md, "Expected Collection and Product data".
 */

const COLLECTION_FIELDS = /* GraphQL */ `
  fragment ChapterCollectionFields on Collection {
    id
    handle
    title
    updatedAt
    image {
      url
      altText
    }
    number: metafield(namespace: "tt_house_chapter", key: "number") {
      value
    }
    story: metafield(namespace: "tt_house_chapter", key: "story") {
      value
    }
    isCurrent: metafield(namespace: "tt_house_chapter", key: "is_current") {
      value
    }
    campaignMedia: metafield(
      namespace: "tt_house_chapter"
      key: "campaign_media"
    ) {
      value
    }
    seo {
      title
      description
    }
  }
`;

export const COLLECTIONS_QUERY = /* GraphQL */ `
  ${COLLECTION_FIELDS}
  query Collections($first: Int!) {
    collections(first: $first, sortKey: TITLE) {
      edges {
        node {
          ...ChapterCollectionFields
        }
      }
    }
  }
`;

export const COLLECTION_BY_HANDLE_QUERY = /* GraphQL */ `
  ${COLLECTION_FIELDS}
  query CollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      ...ChapterCollectionFields
      products(first: 50) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  }
`;
