import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: 'ink' | 'bone' | 'drumskin';
  spacing?: 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  background = 'bone',
  spacing = 'lg',
  className,
  children,
  ...props
}) => {
  const bgClasses = {
    bone: 'bg-bone text-ink',
    ink: 'bg-ink text-bone',
    drumskin: 'bg-drumskin text-bone',
  };

  const spacingClasses = {
    md: 'py-8 md:py-16',   /* 32px mobile -> 64px desktop */
    lg: 'py-16 md:py-32',  /* 64px mobile -> 128px desktop */
  };

  return (
    <Component
      className={cn(
        'w-full transition-colors duration-200',
        bgClasses[background],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
