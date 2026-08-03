"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout";
import { cx } from "@/lib/cx";
import { siteConfig, primaryNavLinks } from "@/config/site";

/** TT wordmark + flat primary navigation, with active-route state. No search, no bag, no announcement bar. */
export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-h4 font-display tracking-tight opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70"
          >
            {siteConfig.name}
          </Link>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {primaryNavLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cx(
                        "text-body-sm font-body tracking-wide opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70",
                        isActive && "underline underline-offset-4",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
