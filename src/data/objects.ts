/**
 * Placeholder Object data. Structured independently of storage so it can
 * be replaced by Shopify product/variant data later — see the
 * CMS-readiness note in docs/master-blueprint.md. Consumed only through
 * src/lib/content/objects.ts, never imported directly by route/page files.
 *
 * No price, variant, or checkout fields are modelled here — those remain
 * Shopify-owned and are out of scope until Storefront integration lands.
 */

export interface TTObject {
  slug: string;
  name: string;
  material: string;
  origin: string;
  construction: string;
  availability: string;
  chapterSlug: string;
  /**
   * Archived Objects keep their permanent URL and full Passport, with an
   * archived-state notice in place of Acquire — see
   * docs/information-architecture.md.
   */
  status: "available" | "archived";
}

export const objects: TTObject[] = [
  {
    slug: "the-long-room-coat",
    name: "The Long Room Coat",
    material: "Waxed Scottish cotton, horn buttons, hand-finished seams",
    origin: "Cut and finished in the House atelier",
    construction: "Raglan sleeve, raw-edged hem, horn button placket",
    availability: "Edition of forty, numbered on the interior placket.",
    chapterSlug: "the-long-room",
    status: "available",
  },
  {
    slug: "the-long-room-trouser",
    name: "The Long Room Trouser",
    material: "Raw-edged wool twill",
    origin: "Cut and finished in the House atelier",
    construction: "Straight leg, unlined, single back dart",
    availability: "Edition of forty, matched to the Coat's numbering.",
    chapterSlug: "the-long-room",
    status: "available",
  },
  {
    slug: "the-ash-shirt",
    name: "The Ash Shirt",
    material: "Undyed linen, bone buttons",
    origin: "Woven and finished in the House atelier",
    construction: "Camp collar, single chest pocket, felled seams",
    availability: "Edition of sixty.",
    chapterSlug: "ash-and-linen",
    status: "available",
  },
  {
    slug: "the-linen-trouser",
    name: "The Linen Trouser",
    material: "Undyed linen",
    origin: "Woven and finished in the House atelier",
    construction: "Wide leg, drawstring waist, felled seams",
    availability: "Edition of sixty. Fully archived.",
    chapterSlug: "ash-and-linen",
    status: "archived",
  },
  {
    slug: "the-ledger-coat",
    name: "The Ledger Coat",
    material: "Waxed canvas, brass hardware",
    origin: "Made on a single domestic machine, the House's first",
    construction: "Storm placket, patch pockets, hand-finished buttonholes",
    availability: "Edition of twenty-five. Fully archived.",
    chapterSlug: "the-first-ledger",
    status: "archived",
  },
  {
    slug: "the-ledger-satchel",
    name: "The Ledger Satchel",
    material: "Vegetable-tanned leather",
    origin: "Made on a single domestic machine, the House's first",
    construction: "Saddle-stitched, brass buckle closure",
    availability: "Edition of fifteen. Fully archived.",
    chapterSlug: "the-first-ledger",
    status: "archived",
  },
];
