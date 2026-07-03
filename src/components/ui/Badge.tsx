import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'ember' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200';

  const variantClasses = {
    // Level 1 elevation styling: hairline Drumskin border, subtle shadow
    default: 'border-drumskin/30 bg-bone text-ink shadow-sm',
    ember: 'border-ember bg-ember/10 text-ember shadow-sm',
    outline: 'border-drumskin/30 bg-transparent text-ink/80',
  };

  return (
    <span
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
