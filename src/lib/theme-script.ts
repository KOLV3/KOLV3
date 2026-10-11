// Inline script to prevent Flash of Unstyled Content (FOUC) on theme load.
// This runs before React hydration to apply the correct theme class immediately.
// It reads the user's stored preference from localStorage, falls back to OS preference.
export const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('kolve-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || ((!stored || stored === 'system') && prefersDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;
