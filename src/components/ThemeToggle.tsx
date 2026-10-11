'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  function ThemeToggle({ className = '', onClick, ...props }, ref) {
    const { resolvedTheme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === 'dark';
    const ariaLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        onClick={(e) => {
          toggleTheme();
          onClick?.(e);
        }}
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-surface-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${className}`.trim()}
        {...props}
      >
        <span className="relative inline-flex items-center justify-center h-4 w-4">
          <Sun
            className={`h-4 w-4 transition-all duration-200 ease-in-out ${
              isDark
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0 absolute pointer-events-none'
            }`}
            aria-hidden="true"
          />
          <Moon
            className={`h-4 w-4 transition-all duration-200 ease-in-out ${
              isDark
                ? 'rotate-90 scale-0 opacity-0 absolute pointer-events-none'
                : 'rotate-0 scale-100 opacity-100'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
