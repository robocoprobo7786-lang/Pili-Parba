import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { HeaderScrollWrapper } from './HeaderScrollWrapper';
import { NavDrawer } from './NavDrawer';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'History', href: '/history' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Visit', href: '/visit' },
  { label: 'Journal', href: '/journal' },
];

export const Header: React.FC = () => {
  return (
    <HeaderScrollWrapper>
      <Container className="flex items-center justify-between">
        {/* Brand Logo / Stage Label */}
        <Link
          href="/"
          className="relative overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 rounded-sm transition-opacity hover:opacity-80 flex items-center"        >
          <Image
            src="/images/logo_new.png"
            alt="Pili Parba"
            width={240}
            height={80}
            className="h-20 w-auto object-contain scale-125 origin-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary site navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm font-medium text-bone/90 hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 rounded-sm transition-colors py-2 px-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation (Interactive Drawer Trigger & Portal) */}
        <NavDrawer links={navLinks} />
      </Container>
    </HeaderScrollWrapper>
  );
};
