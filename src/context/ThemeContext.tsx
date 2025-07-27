import React, { createContext, useContext } from 'react';


type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Sempre força o tema como 'dark'
  const theme: Theme = 'dark';

  // Aplica classe 'dark' ao <html> no carregamento
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    // função vazia: impede troca
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
