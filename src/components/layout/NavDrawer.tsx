'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils/cn';

interface NavLink {
  label: string;
  href: string;
}

interface NavDrawerProps {
  links: NavLink[];
}

export const NavDrawer: React.FC<NavDrawerProps> = ({ links }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Toggle open state
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  // Close drawer
  const closeDrawer = () => {
    setIsOpen(false);
    // Return focus to the trigger element when drawer closes
    triggerRef.current?.focus();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeDrawer();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scroll on body
    const originalOverflow = document.body.style.overflow;
    // eslint-disable-next-line
    document.body.style.overflow = 'hidden';

    // Shift focus to the close button inside the drawer on open
    const closeBtn = drawerRef.current?.querySelector('button') as HTMLElement;
    closeBtn?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="flex md:hidden flex-col justify-center items-center gap-1.5 w-11 h-11 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 z-50 text-bone hover:text-ember transition-colors cursor-pointer"
      >
        <span
          className={cn(
            'w-6 h-0.5 bg-current transition-all duration-300 ease-out',
            isOpen ? 'rotate-45 translate-y-2' : ''
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-current transition-all duration-300 ease-out',
            isOpen ? 'opacity-0' : ''
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-current transition-all duration-300 ease-out',
            isOpen ? '-rotate-45 -translate-y-2' : ''
          )}
        />
      </button>

      {/* Full-Screen Drawer Overlay */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        aria-hidden={!isOpen}
        className={cn(
          'fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm transition-opacity duration-300 md:hidden flex flex-col justify-center items-center',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={(e) => {
          // Close if clicking the backdrop wrapper directly
          if (e.target === e.currentTarget) {
            closeDrawer();
          }
        }}
      >
        {/* Close Button Inside Drawer */}
        <div className="absolute top-6 right-6">
          <Button
            variant="ghost"
            onClick={closeDrawer}
            className="text-bone hover:text-ember focus-visible:ring-offset-ink"
            aria-label="Close menu"
          >
            ✕ Close
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav aria-label="Mobile site navigation" className="text-center">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display text-3xl text-bone hover:text-ember transition-colors block py-2 px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
