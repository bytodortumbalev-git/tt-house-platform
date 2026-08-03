/** Placeholder content for /contact. No form submission is wired up yet. */

export interface ContactChannel {
  label: string;
  description: string;
  action: string;
  href?: string;
}

export interface SocialChannel {
  label: string;
}

export const contactIntro = {
  title: "Contact",
  copy: "For enquiries the Journal and Chapters don't answer, write to us directly. We read everything ourselves.",
};

export const contactChannels: ContactChannel[] = [
  {
    label: "General Enquiries",
    description: "Questions about the House, an Object, or the archive.",
    action: "hello@tthouse.com",
    href: "mailto:hello@tthouse.com",
  },
  {
    label: "Press",
    description: "Interview requests, image requests, and press materials.",
    action: "press@tthouse.com",
    href: "mailto:press@tthouse.com",
  },
  {
    label: "Collaborations",
    description: "Proposals for collaborations, licensing, or joint Chapters.",
    action: "collaborate@tthouse.com",
    href: "mailto:collaborate@tthouse.com",
  },
  {
    label: "Custom Projects",
    description:
      "Bespoke commissions and one-off pieces outside the current archive.",
    action: "custom@tthouse.com",
    href: "mailto:custom@tthouse.com",
  },
  {
    label: "Studio Appointments",
    description: "Private viewings at the atelier, by appointment only.",
    action: "By appointment only",
  },
];

export const socialChannels: SocialChannel[] = [
  { label: "Instagram" },
  { label: "Pinterest" },
  { label: "Facebook" },
];
