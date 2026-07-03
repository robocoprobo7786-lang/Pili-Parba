import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils/cn';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-ember';
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant = 'primary',
      href,
      external = false,
      className,
      children,
      disabled,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-2 rounded-md font-body text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variantClasses = {
      primary: 'bg-maroon-dusk text-bone hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]',
      secondary: 'border-[1.5px] border-maroon-dusk text-maroon-dusk hover:bg-maroon-dusk hover:text-bone hover:scale-[1.02] hover:shadow-md active:scale-[0.98]',
      ghost: 'bg-transparent text-maroon-dusk hover:underline px-2',
      'outline-ember': 'border-2 border-ember text-ember hover:bg-ember hover:text-ink hover:scale-[1.02] hover:shadow-md active:scale-[0.98]',
    };

    const classes = cn(baseClasses, variantClasses[variant], className);

    if (href) {
      if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
