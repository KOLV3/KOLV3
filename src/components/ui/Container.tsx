import React from 'react';

export type ContainerSize = 'default' | 'narrow' | 'wide';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeStyles: Record<ContainerSize, string> = {
  default: 'max-w-6xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-7xl',
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    { children, className = '', size = 'default', ...rest },
    ref
  ) {
    const combinedClassName = [
      'mx-auto px-4 sm:px-6 lg:px-8',
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={combinedClassName} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
