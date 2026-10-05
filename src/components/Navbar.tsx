import React, { useState } from 'react'
import { TidelineLogo } from './TidelineLogo'
import { ThemeMode } from '../tokens/colors'
import { Language, translations } from '../data/translations'
import { Sun, Moon, Eye, ShieldAlert, Globe, Menu, X, Github } from 'lucide-react'

interface NavbarProps {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  lang: Language
  setLang: (lang: Language) => void
}

export const Navbar: React.FC<NavbarProps> = ({ mode, setMode, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const t = translations[lang].nav

  const themeOptions: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    {
      id: 'light',
      label: lang === 'en' ? 'Low Tide (Light)' : 'Ebbe (Hell)',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
    },
    {
      id: 'dark',
      label: lang === 'en' ? 'Deep Sea (Dark)' : 'Tiefsee (Dunkel)',
      icon: <Moon className="w-4 h-4 text-seafoam-400" />,
    },
    {
      id: 'sunlight',
      label: lang === 'en' ? 'High Sunlight' : 'Grelle Sonne',
      icon: <Eye className="w-4 h-4 text-gray-900" />,
    },
    {
      id: 'nightred',
      label: lang === 'en' ? 'Night Red' : 'Nacht-Rot',
      icon: <ShieldAlert className="w-4 h-4 text-nightred-500" />,
    },
  ]

  const activeThemeIcon = themeOptions.find((o) => o.id === mode)?.icon || (
    <Sun className="w-4 h-4" />
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-surface)]/90 border-b border-[var(--border-outline)]/30 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-xl p-1"
          >
            <TidelineLogo mode={mode} size={42} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl tracking-tight text-[var(--text-primary)]">
                  {t.brand}
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-surface-variant)] text-[var(--text-secondary)] border border-[var(--border-outline)]/40">
                  v0.4.0
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-medium -mt-0.5 hidden sm:block">
                {t.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#features"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-md px-1 py-0.5"
            >
              {t.features}
            </a>
            <a
              href="#field-modes"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-md px-1 py-0.5"
            >
              {t.fieldModes}
            </a>
            <a
              href="#sync-engine"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-md px-1 py-0.5"
            >
              {t.syncEngine}
            </a>
            <a
              href="#roadmap"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-md px-1 py-0.5"
            >
              {t.roadmap}
            </a>
            <a
              href="#manuals"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-md px-1 py-0.5"
            >
              {t.manuals}
            </a>
          </nav>

          {/* Right Controls: Theme picker, Language Switcher, GitHub link */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border border-[var(--border-outline)]/40 hover:border-[var(--color-primary)] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                title="Select Field Visual Mode"
                aria-label="Theme mode switcher"
              >
                {activeThemeIcon}
                <span className="capitalize">{mode}</span>
              </button>

              {themeDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-[var(--bg-surface)] border border-[var(--border-outline)]/40 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setThemeDropdownOpen(false)}
                >
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setMode(opt.id)
                        setThemeDropdownOpen(false)
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                        mode === opt.id
                          ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] font-semibold'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]'
                      }`}
                    >
                      {opt.icon}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border border-[var(--border-outline)]/40 hover:border-[var(--color-primary)] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
              title="Switch language / Sprache wechseln"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'DE' : 'EN'}</span>
            </button>

            {/* GitHub repository button */}
            <a
              href="https://github.com/ceotjoe/tideline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            >
              <Github className="w-4 h-4" />
              <span>{t.github}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="p-2 rounded-lg bg-[var(--bg-surface-variant)] text-[var(--text-primary)] text-xs font-bold"
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border border-[var(--border-outline)]/40 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 border-t border-[var(--border-outline)]/30 bg-[var(--bg-surface)] space-y-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {themeOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setMode(opt.id)
                  setMobileMenuOpen(false)
                }}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold ${
                  mode === opt.id
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]'
                    : 'bg-[var(--bg-surface-variant)] text-[var(--text-primary)]'
                }`}
              >
                {opt.icon}
                <span>{opt.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]"
            >
              {t.features}
            </a>
            <a
              href="#field-modes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]"
            >
              {t.fieldModes}
            </a>
            <a
              href="#sync-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]"
            >
              {t.syncEngine}
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]"
            >
              {t.roadmap}
            </a>
            <a
              href="#manuals"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)]"
            >
              {t.manuals}
            </a>
            <a
              href="https://github.com/ceotjoe/tideline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-text)]"
            >
              <Github className="w-4 h-4" />
              <span>{t.github}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
