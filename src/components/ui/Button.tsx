import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover shadow-xs',
  secondary: 'border border-border bg-surface/60 text-text hover:bg-surface-muted transition-colors',
  ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-surface-muted transition-colors',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    disabled = false,
    asChild = false,
    href,
    type = 'button',
    ...rest
  },
  ref
) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...rest,
      className: [combinedClassName, child.props?.className]
        .filter(Boolean)
        .join(' '),
    });
  }

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#');

    if (isExternal) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          className={combinedClassName}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={disabled ? '#' : href}
        className={combinedClassName}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...(rest as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={combinedClassName}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
