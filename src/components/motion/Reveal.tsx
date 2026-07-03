'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils/cn';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px', // Trigger slightly before entering viewport
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      onFocus={() => setIsVisible(true)}
      className={cn(
        'transition-all duration-[450ms] ease-out',
        'motion-reduce:transition-opacity motion-reduce:translate-y-0',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[14px]',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
