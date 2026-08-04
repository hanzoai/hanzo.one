
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeRounding = 'sharp' | 'medium' | 'rounded' | 'pill';
type ThemeSpacing = 'compact' | 'comfortable' | 'spacious';
type ThemeFontFamily = 'system' | 'monospace' | 'serif' | 'sans';
type ThemeGlassOpacity = 'subtle' | 'medium' | 'heavy';
type ThemeMode = 'light' | 'dark' | 'system';
type ThemeTypographySize = 'small' | 'medium' | 'large';
type ThemeTypographySpacing = 'tight' | 'normal' | 'wide';
type ThemeTypographyWeight = 'light' | 'regular' | 'heavy';

interface ThemeContextType {
  mode: ThemeMode;
  rounding: ThemeRounding;
  spacing: ThemeSpacing;
  fontFamily: ThemeFontFamily;
  glassOpacity: ThemeGlassOpacity;
  typographySize: ThemeTypographySize;
  typographySpacing: ThemeTypographySpacing;
  typographyWeight: ThemeTypographyWeight;
  setMode: (mode: ThemeMode) => void;
  setRounding: (rounding: ThemeRounding) => void;
  setSpacing: (spacing: ThemeSpacing) => void;
  setFontFamily: (fontFamily: ThemeFontFamily) => void;
  setGlassOpacity: (opacity: ThemeGlassOpacity) => void;
  setTypographySize: (size: ThemeTypographySize) => void;
  setTypographySpacing: (spacing: ThemeTypographySpacing) => void;
  setTypographyWeight: (weight: ThemeTypographyWeight) => void;
  applyThemeClasses: (baseClasses: string) => string;
  getRoundingClass: () => string;
  getSpacingClass: () => string;
  getFontClass: () => string;
  getGlassClass: () => string;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [systemIsDark, setSystemIsDark] = useState<boolean>(true);
  const [rounding, setRounding] = useState<ThemeRounding>('rounded');
  const [spacing, setSpacing] = useState<ThemeSpacing>('comfortable');
  const [fontFamily, setFontFamily] = useState<ThemeFontFamily>('system');
  const [glassOpacity, setGlassOpacity] = useState<ThemeGlassOpacity>('medium');
  const [typographySize, setTypographySize] = useState<ThemeTypographySize>('medium');
  const [typographySpacing, setTypographySpacing] = useState<ThemeTypographySpacing>('normal');
  const [typographyWeight, setTypographyWeight] = useState<ThemeTypographyWeight>('regular');
  
  // Detect system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemIsDark(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  // Compute if dark mode should be active
  const isDarkMode = mode === 'system' ? systemIsDark : mode === 'dark';

  useEffect(() => {
    // Apply theme to document root for global access
    document.documentElement.dataset.rounding = rounding;
    document.documentElement.dataset.spacing = spacing;
    document.documentElement.dataset.font = fontFamily;
    document.documentElement.dataset.glass = glassOpacity;
    document.documentElement.dataset.typographySize = typographySize;
    document.documentElement.dataset.typographySpacing = typographySpacing;
    document.documentElement.dataset.typographyWeight = typographyWeight;
    // No `dark`/`light` class on <html>. Those were Tailwind's dark-variant
    // hook; Tailwind is gone and nothing in this repo, in @hanzo/design or in
    // any delivered sheet has ever had a `.dark` or `.light` selector, so the
    // classes styled nothing. gui's ThemeProvider adds the real one, `t_dark`,
    // and that is what themes the page. (Found by @hanzo/gui's css-check: 763
    // of 764 classes in the rendered markup had a rule; `dark` was the one.)

    // Apply typography variables
    const root = document.documentElement;
    
    // Set font size scale
    switch (typographySize) {
      case 'small':
        root.style.setProperty('--font-scale', '0.875');
        break;
      case 'medium':
        root.style.setProperty('--font-scale', '1');
        break;
      case 'large':
        root.style.setProperty('--font-scale', '1.125');
        break;
    }
    
    // Set line height scale
    switch (typographySize) {
      case 'small':
        root.style.setProperty('--line-height-scale', '0.95');
        break;
      case 'medium':
        root.style.setProperty('--line-height-scale', '1');
        break;
      case 'large':
        root.style.setProperty('--line-height-scale', '1.05');
        break;
    }
    
    // Set letter spacing
    switch (typographySpacing) {
      case 'tight':
        root.style.setProperty('--letter-spacing-scale', '-0.025em');
        break;
      case 'normal':
        root.style.setProperty('--letter-spacing-scale', '0em');
        break;
      case 'wide':
        root.style.setProperty('--letter-spacing-scale', '0.025em');
        break;
    }
    
  }, [rounding, spacing, fontFamily, glassOpacity, isDarkMode, typographySize, typographySpacing, typographyWeight]);

  /* This site renders on gui style props; it has no class layer at all. These
     getters remain only for the ThemeContext contract its consumers type
     against — they must never hand back a framework utility string, because
     nothing in this build compiles one. */
  const getRoundingClass = (): string => ''
  const getSpacingClass = (): string => ''
  const getFontClass = (): string => ''
  const getGlassClass = (): string => ''

  const applyThemeClasses = (baseClasses: string): string => {
    return `${baseClasses} ${getRoundingClass()} ${getSpacingClass()} ${getFontClass()}`;
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        rounding,
        spacing,
        fontFamily,
        glassOpacity,
        typographySize,
        typographySpacing,
        typographyWeight,
        setMode,
        setRounding,
        setSpacing,
        setFontFamily,
        setGlassOpacity,
        setTypographySize,
        setTypographySpacing,
        setTypographyWeight,
        applyThemeClasses,
        getRoundingClass,
        getSpacingClass,
        getFontClass,
        getGlassClass,
        isDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
