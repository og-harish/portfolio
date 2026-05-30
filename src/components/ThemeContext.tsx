import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'violet' | 'carex' | 'green';
type Layout = 'modern' | 'minimal';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    // Default to the new 'violet' theme if not found or if the old themes were saved
    if (saved === 'default' || saved === 'cyber' || saved === 'midnight' || saved === 'paper') {
      return 'violet';
    }
    return (saved as Theme) || 'violet';
  });

  const [layout, setLayout] = useState<Layout>(() => {
    const saved = localStorage.getItem('portfolio-layout');
    return (saved as Layout) || 'modern';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-violet', 'theme-carex', 'theme-green');
    if (theme !== 'violet') {
      root.classList.add(`theme-${theme}`);
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-layout', layout);
  }, [layout]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layout, setLayout }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
