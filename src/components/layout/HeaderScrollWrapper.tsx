'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils/cn';

interface HeaderScrollWrapperProps {
  children: React.ReactNode;
}

export const HeaderScrollWrapper: React.FC<HeaderScrollWrapperProps> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to handle initial state if page is loaded scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out border-b border-transparent',
        isScrolled
          ? 'bg-ink text-bone border-drumskin/20 shadow-md py-4'
          : 'bg-transparent text-bone py-6'
      )}
    >
      {children}
    </header>
  );
};
