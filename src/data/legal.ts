/**
 * Placeholder legal content — repository-owned static pages, not
 * Shopify-sourced. Generic placeholder language; replace with reviewed
 * copy before this platform handles real transactions.
 */

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalPage = {
  title: "Privacy Policy",
  lastUpdated: "1 August 2026",
  sections: [
    {
      heading: "Information We Collect",
      body: "When you contact TT House or browse the archive, we may collect basic information such as your name, email address, and the pages you visit. We do not collect payment information directly — that will be handled by our commerce provider once checkout is connected.",
    },
    {
      heading: "How We Use Information",
      body: "Information you provide is used only to respond to your enquiry, fulfil an Acquire request once available, or improve the archive itself. We do not sell visitor information to third parties.",
    },
    {
      heading: "Cookies",
      body: "This site currently uses only the minimum technical storage required for it to function. As features such as checkout are added, this section will be updated to reflect any new cookies or tracking in use.",
    },
    {
      heading: "Contact",
      body: "Questions about this policy can be sent to the general enquiries address on our Contact page.",
    },
  ],
};

export const termsOfUse: LegalPage = {
  title: "Terms of Use",
  lastUpdated: "1 August 2026",
  sections: [
    {
      heading: "Use of This Site",
      body: "This site is provided for browsing the TT House archive and, once available, acquiring Objects. Content may not be reproduced or redistributed without permission.",
    },
    {
      heading: "Objects and Availability",
      body: "Editions are limited as stated on each Object's page. Availability statements are accurate as of publication and may change. Archived Objects remain visible for record-keeping but are not available to acquire.",
    },
    {
      heading: "Intellectual Property",
      body: "All photography, text, and designs on this site are the property of TT House unless otherwise noted.",
    },
    {
      heading: "Contact",
      body: "Questions about these terms can be sent to the general enquiries address on our Contact page.",
    },
  ],
};

export const shippingAndReturns: LegalPage = {
  title: "Shipping & Returns",
  lastUpdated: "1 August 2026",
  sections: [
    {
      heading: "Shipping",
      body: "Shipping details, carriers, and timelines will be published here once checkout is connected. In the meantime, enquiries about a specific Object can be sent through our Contact page.",
    },
    {
      heading: "Returns and Exchanges",
      body: "Our returns policy will be published in full once Acquire is available. Our general position is that Objects should be considered before purchase — full details will follow.",
    },
    {
      heading: "Archived Objects",
      body: "Archived Objects are not available to acquire and are therefore not subject to shipping or returns terms; their pages remain for permanent record only.",
    },
    {
      heading: "Contact",
      body: "For anything not covered here, write to the general enquiries address on our Contact page.",
    },
  ],
};
