/**
 * Placeholder content for /the-house. Sub-pages (about, founder,
 * manifesto, collaborations, shows, press) are deferred to a later
 * sprint — see docs/roadmap.md — so this single landing page carries a
 * short placeholder for each.
 */

export interface HouseContent {
  intro: { eyebrow: string; title: string; copy: string };
  founder: { heading: string; copy: string };
  manifesto: { heading: string; copy: string };
  collaborations: { heading: string; copy: string };
  shows: { heading: string; copy: string };
  press: { heading: string; copy: string };
}

export const houseContent: HouseContent = {
  intro: {
    eyebrow: "The House",
    title: "An Archive, Kept in the Open",
    copy: "TT House is an independent fashion practice — a small atelier that keeps a public record of everything it makes, in the order it made it.",
  },
  founder: {
    heading: "Founder",
    copy: "TT House began in a single room, with one tailor's refusal to rush. There was no backer and no season to answer to — only a growing shelf of finished pieces, and the belief that a garment should be considered before it is made.",
  },
  manifesto: {
    heading: "Manifesto",
    copy: "We work slowly, in small numbers, with materials chosen to age rather than perform. Every Object belongs first to the archive, and only after to a wardrobe. Nothing leaves the atelier before it is ready.",
  },
  collaborations: {
    heading: "Collaborations",
    copy: "Occasional joint Chapters with makers whose practice shares our patience. None are announced before they are finished.",
  },
  shows: {
    heading: "Shows",
    copy: "TT House shows rarely, and only when a Chapter is complete enough to stand on its own. A record of past Shows will live here as they happen.",
  },
  press: {
    heading: "Press",
    copy: "Coverage and features will be archived here as they are published.",
  },
};
