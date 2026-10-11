import React from 'react';

export type BadgeVariant = 'default' | 'accent' | 'muted' | 'warm';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface-muted text-text-muted border border-border',
  accent: 'bg-accent/10 text-accent border border-accent/20',
  muted: 'bg-surface-muted text-text-muted',
  warm: 'bg-surface-warm text-text border border-border',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    className = '',
    variant = 'default',
    ...rest
  },
  ref
) {
  const combinedClassName = [
    'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium',
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span ref={ref} className={combinedClassName} {...rest}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
