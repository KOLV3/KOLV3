import React from 'react';

export type SectionBackground = 'default' | 'surface' | 'surface-alt' | 'surface-muted' | 'surface-warm';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  background?: SectionBackground;
}

const backgroundStyles: Record<SectionBackground, string> = {
  default: 'bg-bg',
  surface: 'bg-surface',
  'surface-alt': 'bg-surface-alt',
  'surface-muted': 'bg-surface-muted',
  'surface-warm': 'bg-surface-warm',
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section(
    { children, className = '', background = 'default', ...rest },
    ref
  ) {
    const combinedClassName = [
      'py-16 sm:py-20 lg:py-24',
      backgroundStyles[background],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section ref={ref} className={combinedClassName} {...rest}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
