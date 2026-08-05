import type { TTObject } from "@/types/object";

/**
 * Placeholder Object data, shaped directly as the normalized TTObject
 * type (see src/types/object.ts) so local mode needs no mapping step.
 * Consumed only through src/lib/content/objects.ts, never imported
 * directly by route/page files.
 *
 * `price`, `currency`, `shopifyProductId` and `variants` are left empty
 * — local placeholder Objects carry no fabricated commerce data. They
 * populate only when SHOPIFY_CONTENT_MODE resolves to real Storefront
 * API data.
 */

export const objects: TTObject[] = [
  {
    id: "object-the-long-room-coat",
    handle: "the-long-room-coat",
    title: "The Long Room Coat",
    editorialCopy:
      "Cut from the same drum of waxed cotton as the Chapter's first sample, and finished by hand to match it exactly.",
    material: "Waxed Scottish cotton, horn buttons, hand-finished seams",
    origin: "Cut and finished in the House atelier",
    construction: "Raglan sleeve, raw-edged hem, horn button placket",
    edition: "Edition of forty, numbered on the interior placket.",
    availability: "available",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Long Room Coat — primary image" }],
    chapterHandle: "the-long-room",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Long Room Coat",
      description:
        "Waxed Scottish cotton, horn buttons, hand-finished seams. Edition of forty, numbered on the interior placket.",
    },
  },
  {
    id: "object-the-long-room-trouser",
    handle: "the-long-room-trouser",
    title: "The Long Room Trouser",
    editorialCopy:
      "Drafted alongside the Coat, and cut from the same bolt of wool twill.",
    material: "Raw-edged wool twill",
    origin: "Cut and finished in the House atelier",
    construction: "Straight leg, unlined, single back dart",
    edition: "Edition of forty, matched to the Coat's numbering.",
    availability: "available",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Long Room Trouser — primary image" }],
    chapterHandle: "the-long-room",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Long Room Trouser",
      description:
        "Raw-edged wool twill. Edition of forty, matched to the Coat's numbering.",
    },
  },
  {
    id: "object-the-ash-shirt",
    handle: "the-ash-shirt",
    title: "The Ash Shirt",
    editorialCopy:
      "Woven undyed, then washed only in water, so the cloth keeps its own colour.",
    material: "Undyed linen, bone buttons",
    origin: "Woven and finished in the House atelier",
    construction: "Camp collar, single chest pocket, felled seams",
    edition: "Edition of sixty.",
    availability: "available",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Ash Shirt — primary image" }],
    chapterHandle: "ash-and-linen",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Ash Shirt",
      description: "Undyed linen, bone buttons. Edition of sixty.",
    },
  },
  {
    id: "object-the-linen-trouser",
    handle: "the-linen-trouser",
    title: "The Linen Trouser",
    editorialCopy:
      "The last piece of Ash and Linen's edition to sell through, and now archived alongside the rest of the Chapter.",
    material: "Undyed linen",
    origin: "Woven and finished in the House atelier",
    construction: "Wide leg, drawstring waist, felled seams",
    edition: "Edition of sixty. Fully archived.",
    availability: "archived",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Linen Trouser — primary image" }],
    chapterHandle: "ash-and-linen",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Linen Trouser",
      description: "Undyed linen. Edition of sixty. Fully archived.",
    },
  },
  {
    id: "object-the-ledger-coat",
    handle: "the-ledger-coat",
    title: "The Ledger Coat",
    editorialCopy:
      "The piece that opened the House's first notebook — the pattern Chapter III would later reopen.",
    material: "Waxed canvas, brass hardware",
    origin: "Made on a single domestic machine, the House's first",
    construction: "Storm placket, patch pockets, hand-finished buttonholes",
    edition: "Edition of twenty-five. Fully archived.",
    availability: "archived",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Ledger Coat — primary image" }],
    chapterHandle: "the-first-ledger",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Ledger Coat",
      description:
        "Waxed canvas, brass hardware. Edition of twenty-five. Fully archived.",
    },
  },
  {
    id: "object-the-ledger-satchel",
    handle: "the-ledger-satchel",
    title: "The Ledger Satchel",
    editorialCopy:
      "Made to carry the notebook the Chapter is named for — the only accessory in the House's founding edition.",
    material: "Vegetable-tanned leather",
    origin: "Made on a single domestic machine, the House's first",
    construction: "Saddle-stitched, brass buckle closure",
    edition: "Edition of fifteen.",
    availability: "archived",
    price: null,
    currency: null,
    media: [{ url: null, alt: "The Ledger Satchel — primary image" }],
    chapterHandle: "the-first-ledger",
    shopifyProductId: null,
    variants: [],
    seo: {
      title: "The Ledger Satchel",
      description: "Vegetable-tanned leather. Edition of fifteen.",
    },
  },
];
