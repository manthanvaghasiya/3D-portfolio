import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Initialize the Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2. State: "light" (Ethereal Plane) or "dark" (Midnight Void)
  // We check localStorage first to remember the user's choice.
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem('portfolio-theme');
      // Default to 'dark' if no preference is found (The Midnight Void default)
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // 3. The Dimension Shift Logic
  useEffect(() => {
    const root = window.document.documentElement;

    // Reset classes
    root.classList.remove('light', 'dark');

    // Apply the current dimension
    root.classList.add(theme);

    // Save preference to local storage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // 4. The Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Custom Hook for easy access
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};