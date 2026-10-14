import { useState, useEffect } from 'react';

// The initial theme is applied in public/index.html before React loads, so read it from there
export const useTheme = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Storage can be unavailable (e.g. private browsing); the theme still applies for this visit
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
};
