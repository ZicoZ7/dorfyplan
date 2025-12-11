export const colors = {
  dark: '#0F0F0F',
  white: '#FFFFFF',
  netflixRed: '#E50914',
  darkGray: '#1A1A1A',
  lightGray: '#F5F5F5',
  textLight: '#E5E5E5',
  textDark: '#2C2C2C',
} as const;

export type ColorScheme = typeof colors;
