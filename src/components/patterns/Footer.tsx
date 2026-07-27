import Link from "next/link";
import { Container, Stack } from "@/components/layout";
import { Caption } from "@/components/elements";
import {
  siteConfig,
  primaryNavLinks,
  legalLinks,
  socialPlaceholders,
} from "@/config/site";

/** Site-wide footer: navigation, newsletter placeholder, social placeholders, legal links, copyright. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <Stack gap="lg" className="py-16 md:py-20">
          <Stack
            direction="row"
            gap="xl"
            wrap
            justify="between"
            className="w-full"
          >
            <nav aria-label="Footer">
              <Stack gap="sm">
                <Caption as="p" className="tracking-wide uppercase">
                  Navigation
                </Caption>
                <ul className="flex flex-col gap-2">
                  {primaryNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-sm font-body opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Stack>
            </nav>

            <Stack gap="sm" className="max-w-narrow">
              <Caption as="p" className="tracking-wide uppercase">
                Newsletter
              </Caption>
              <form className="flex flex-col gap-2">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Email address"
                  disabled
                  className="border border-border bg-transparent px-3 py-2 text-body-sm font-body text-foreground placeholder:text-muted"
                />
                <button
                  type="submit"
                  disabled
                  className="border border-border-strong px-3 py-2 text-body-sm font-body"
                >
                  Subscribe
                </button>
              </form>
              <Caption>Coming soon.</Caption>
            </Stack>

            <Stack gap="sm">
              <Caption as="p" className="tracking-wide uppercase">
                Social
              </Caption>
              <ul className="flex flex-col gap-2">
                {socialPlaceholders.map((network) => (
                  <li key={network}>
                    <Caption as="span">{network} — coming soon</Caption>
                  </li>
                ))}
              </ul>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            gap="lg"
            wrap
            justify="between"
            align="center"
            className="w-full border-t border-border pt-8"
          >
            <Caption as="p">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </Caption>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-caption font-body text-muted opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
