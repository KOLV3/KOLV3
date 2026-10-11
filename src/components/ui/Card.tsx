import React from 'react';

export type CardPadding = 'default' | 'compact' | 'none';
export type CardVariant = 'default' | 'surface-alt' | 'surface-muted' | 'warm';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
  variant?: CardVariant;
}

const paddingStyles: Record<CardPadding, string> = {
  default: 'p-6',
  compact: 'p-4',
  none: 'p-0',
};

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface border-border',
  'surface-alt': 'bg-surface-alt border-border',
  'surface-muted': 'bg-surface-muted border-border',
  warm: 'bg-surface-warm border-border',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    children,
    className = '',
    hover = false,
    padding = 'default',
    variant = 'default',
    ...rest
  },
  ref
) {
  const combinedClassName = [
    'border rounded-md overflow-hidden',
    variantStyles[variant],
    paddingStyles[padding],
    hover ? 'hover:border-accent/40 hover:shadow-xs transition-all duration-200' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={combinedClassName} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
