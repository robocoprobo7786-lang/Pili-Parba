import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Text } from '../ui/Typography';

const footerLinks = {
  explore: [
    { label: 'Events', href: '/events' },
    { label: 'History', href: '/#history' },
    { label: 'Gallery', href: '/gallery' },
  ],
  community: [
    { label: 'Visit', href: '/visit' },
    { label: 'Journal', href: '/journal' },
  ],
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <Section background="ink" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

            {/* Brand Statement Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link
                href="/"
                className="font-display text-2xl font-bold tracking-tight text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors w-fit"
              >
                Pili Parba
              </Link>
              <Text variant="body" className="text-bone/80 max-w-sm">
                {"Kudla Pili Parba is an annual competition that brings together the best Pili teams from across Tulunadu to compete in a grand celebration of tradition, artistry, and devotion. Featuring spectacular performances, traditional drumming, elaborate tiger body painting, and cultural pride, the event showcases the very best of one of Coastal Karnataka's most iconic folk traditions."}
              </Text>
            </div>

            {/* Explore Column */}
            <div className="flex flex-col gap-4">
              <Text variant="eyebrow" as="h2" className="text-bone/50">
                Explore
              </Text>
              <ul className="flex flex-col gap-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-3 md:py-0 md:inline font-body text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div className="flex flex-col gap-4">
              <Text variant="eyebrow" as="h2" className="text-bone/50">
                Community
              </Text>
              <ul className="flex flex-col gap-3">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-3 md:py-0 md:inline font-body text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div className="flex flex-col gap-4">
                <Text variant="eyebrow" as="h2" className="text-bone/50">
                  About
                </Text>
                <ul className="flex flex-col gap-3">
                  {footerLinks.about.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block py-3 md:py-0 md:inline font-body text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-4">
                <Text variant="eyebrow" as="h2" className="text-bone/50">
                  Connect
                </Text>
                <div className="flex gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2.5 -ml-2.5 text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-2.5 text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-2.5 text-bone hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>


          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-drumskin/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <Text variant="body-sm" className="text-bone/60">
              &copy; {new Date().getFullYear()} Pili Parba. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-bone/60 hover:text-ember transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm py-3 md:py-1">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-bone/60 hover:text-ember transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm py-3 md:py-1">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
