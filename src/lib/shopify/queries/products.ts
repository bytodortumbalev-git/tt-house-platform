/**
 * Product (Object) queries. Metafield namespaces/keys match
 * docs/shopify-architecture.md ("Objects" ownership table — Object
 * Passport metafields), plus a `tt_house.edition` metafield for the
 * edition/availability statement, which this sprint adds to that table
 * — see src/lib/shopify/README.md, "Expected Collection and Product
 * data". Availability is derived from `availableForSale`, not product
 * status — see the "Current limitations" section of that same doc.
 */

const PRODUCT_FIELDS = /* GraphQL */ `
  fragment ObjectProductFields on Product {
    id
    handle
    title
    availableForSale
    updatedAt
    featuredImage {
      url
      altText
    }
    images(first: 4) {
      edges {
        node {
          url
          altText
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
    collections(first: 5) {
      edges {
        node {
          handle
        }
      }
    }
    material: metafield(namespace: "tt_house", key: "passport_materials") {
      value
    }
    origin: metafield(namespace: "tt_house", key: "passport_origin") {
      value
    }
    construction: metafield(
      namespace: "tt_house"
      key: "passport_construction"
    ) {
      value
    }
    edition: metafield(namespace: "tt_house", key: "edition") {
      value
    }
    editorialCopy: metafield(namespace: "tt_house", key: "editorial_copy") {
      value
    }
    seo {
      title
      description
    }
  }
`;

export const PRODUCTS_QUERY = /* GraphQL */ `
  ${PRODUCT_FIELDS}
  query Products($first: Int!) {
    products(first: $first, sortKey: TITLE) {
      edges {
        node {
          ...ObjectProductFields
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = /* GraphQL */ `
  ${PRODUCT_FIELDS}
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...ObjectProductFields
    }
  }
`;

export const PRODUCTS_BY_COLLECTION_HANDLE_QUERY = /* GraphQL */ `
  ${PRODUCT_FIELDS}
  query ProductsByCollectionHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      products(first: 50) {
        edges {
          node {
            ...ObjectProductFields
          }
        }
      }
    }
  }
`;
