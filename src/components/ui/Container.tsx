import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn('w-full max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
