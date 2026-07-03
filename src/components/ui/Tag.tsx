import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface TagProps extends React.HTMLAttributes<HTMLButtonElement | HTMLSpanElement> {
  active?: boolean;
  clickable?: boolean;
  as?: 'button' | 'span';
}

export const Tag: React.FC<TagProps> = ({
  active = false,
  clickable = false,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || (clickable ? 'button' : 'span');

  const baseClasses =
    'inline-flex items-center px-3 py-1 rounded-sm text-xs font-body font-medium border shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2';

  const stateClasses = active
    ? 'border-ember bg-ember text-bone'
    : 'border-drumskin/30 bg-bone/80 text-ink' +
      (clickable ? ' hover:bg-drumskin/5 hover:border-drumskin/50 cursor-pointer' : '');

  return (
    <Component
      className={cn(baseClasses, stateClasses, className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Component>
  );
};
