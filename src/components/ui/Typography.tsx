import React from 'react';
import { cn } from '../../lib/utils/cn';

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || (`h${level}` as const);

  const levelClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight',
    2: 'text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-snug',
    3: 'text-2xl md:text-3xl lg:text-4xl font-normal leading-normal',
  };

  return (
    <Component
      className={cn(
        'font-display transition-colors duration-200',
        levelClasses[level],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Text Component
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'body-sm' | 'body-lg' | 'eyebrow';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  weight = 'normal',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    body: 'text-base leading-relaxed',
    'body-sm': 'text-sm leading-relaxed',
    'body-lg': 'text-lg md:text-xl leading-relaxed',
    eyebrow: 'text-xs tracking-wider uppercase font-bold text-ember',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // If eyebrow, enforce block or inline-block with proper semantic defaults
  const ResolvedComponent = variant === 'eyebrow' && Component === 'p' ? 'span' : Component;

  return (
    <ResolvedComponent
      className={cn(
        'font-body transition-colors duration-200',
        variantClasses[variant],
        // Eyebrow overrides font-weight internally, otherwise apply weight
        variant !== 'eyebrow' ? weightClasses[weight] : undefined,
        className
      )}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      {children}
    </ResolvedComponent>
  );
};
