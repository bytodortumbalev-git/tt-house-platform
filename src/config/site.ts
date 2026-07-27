export const siteConfig = {
  name: "TT House",
  description: "A luxury editorial fashion house.",
} as const;

export const primaryNavLinks = [
  { label: "The House", href: "/the-house" },
  { label: "Chapters", href: "/chapters" },
  { label: "Objects", href: "/objects" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Shipping & Returns", href: "/legal/shipping-returns" },
] as const;

export const socialPlaceholders = [
  "Instagram",
  "Pinterest",
  "Facebook",
] as const;
