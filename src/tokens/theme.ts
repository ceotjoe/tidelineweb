import { useState, useEffect } from 'react'
import { ThemeMode } from './colors'

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tideline-theme') as ThemeMode
      if (saved && ['light', 'dark', 'sunlight', 'nightred'].includes(saved)) {
        return saved
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-light', 'theme-dark', 'theme-sunlight', 'theme-nightred', 'dark')
    root.classList.add(`theme-${mode}`)
    if (mode === 'dark' || mode === 'nightred') {
      root.classList.add('dark')
    }
    localStorage.setItem('tideline-theme', mode)
  }, [mode])

  return { mode, setMode }
}
