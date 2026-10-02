export interface ThemeColors {
  background: string
  surface: string
  surfaceVariant: string
  text: string
  textSecondary: string
  primary: string
  onPrimary: string
  outline: string
  focus: string
  tideWater: string
  tideLine: string
}

export type ThemeMode = 'light' | 'dark' | 'sunlight' | 'nightred'

export const TidelineThemes: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#F6F1E7', // sand
    surface: '#FFFCF6', // warm ivory
    surfaceVariant: '#E3F0EC', // seafoam tint
    text: '#12343B',
    textSecondary: '#3E5C61',
    primary: '#1F6F68', // deep seafoam / pine teal
    onPrimary: '#FFFFFF',
    outline: '#6F8A8B',
    focus: '#1A4F8B',
    tideWater: '#9FD3C7',
    tideLine: '#1F6F68',
  },
  dark: {
    background: '#0F1E22', // deep sea
    surface: '#16292E',
    surfaceVariant: '#1E383D',
    text: '#E8F1EF',
    textSecondary: '#A9C2C0',
    primary: '#7FD1C3',
    onPrimary: '#08302B',
    outline: '#435E63',
    focus: '#8CC4FF',
    tideWater: '#1E383D',
    tideLine: '#7FD1C3',
  },
  sunlight: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceVariant: '#F0F0F0',
    text: '#000000',
    textSecondary: '#1F1F1F',
    primary: '#003D37',
    onPrimary: '#FFFFFF',
    outline: '#000000',
    focus: '#0000B8',
    tideWater: '#D0E8E2',
    tideLine: '#000000',
  },
  nightred: {
    background: '#000000',
    surface: '#0D0000',
    surfaceVariant: '#1A0202',
    text: '#FF4433',
    textSecondary: '#E03322',
    primary: '#FF4433',
    onPrimary: '#000000',
    outline: '#8A140A',
    focus: '#FF6655',
    tideWater: '#140000',
    tideLine: '#CC2214',
  },
}
