import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

const STORAGE_KEY = 'arisca_theme';
const THEME_COLOR = { light: '#14958f', dark: '#0e1112' };

const systemTheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function savedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'dark' || saved === 'light' ? saved : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.style.background = ''; // pre-paint colour from index.html; CSS takes over now
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('dark-theme', theme === 'dark');
  document.body.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('dark-theme', theme === 'dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
}

export function ThemeProvider({ children }) {
  // index.html already set data-theme before first paint; start from the same value
  const [theme, setThemeState] = useState(() => savedTheme() || systemTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the device setting until the visitor picks a theme themselves
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return undefined;
    const onChange = (e) => {
      if (!savedTheme()) setThemeState(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // An explicit choice is remembered; the swap fades like a dimmer instead of flashing
  const setTheme = useCallback((next) => {
    const root = document.documentElement;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      root.classList.add('theme-fading');
      clearTimeout(root._themeFade);
      root._themeFade = setTimeout(() => root.classList.remove('theme-fading'), 500);
    }
    setThemeState((prev) => {
      const value = typeof next === 'function' ? next(prev) : next;
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // storage unavailable: the choice lasts for this visit only
      }
      return value;
    });
  }, []);

  const toggleTheme = useCallback(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')), [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
