import React from 'react'
import { TidelineLogo } from './TidelineLogo'
import { ThemeMode } from '../tokens/colors'
import { Language, translations } from '../data/translations'
import { Github, Radio } from 'lucide-react'

interface FooterProps {
  mode: ThemeMode
  lang: Language
  onOpenLegal: (type: 'impressum' | 'privacy') => void
}

export const Footer: React.FC<FooterProps> = ({ mode, lang, onOpenLegal }) => {
  const t = translations[lang].footer

  return (
    <footer className="border-t border-[var(--border-outline)]/30 bg-[var(--bg-surface)] py-12 md:py-16 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[var(--border-outline)]/20">
          {/* Brand Info */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <TidelineLogo mode={mode} size={44} />
            <div>
              <span className="font-bold text-xl text-[var(--text-primary)] block">Tideline</span>
              <span className="text-xs text-[var(--text-secondary)]">
                The offline logger for Wavelog · 73 de DO1HOZ
              </span>
            </div>
          </div>

          {/* Nav / Repo Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[var(--text-secondary)]">
            <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">
              {lang === 'en' ? 'Features' : 'Funktionen'}
            </a>
            <a href="#field-modes" className="hover:text-[var(--color-primary)] transition-colors">
              {lang === 'en' ? 'Field Modes' : 'Feld-Modi'}
            </a>
            <a href="#sync-engine" className="hover:text-[var(--color-primary)] transition-colors">
              {lang === 'en' ? 'Sync Engine' : 'Sync-Engine'}
            </a>
            <a href="#roadmap" className="hover:text-[var(--color-primary)] transition-colors">
              {lang === 'en' ? 'Roadmap' : 'Roadmap'}
            </a>
            <a href="#manuals" className="hover:text-[var(--color-primary)] transition-colors">
              {lang === 'en' ? 'Manuals' : 'Handbuch'}
            </a>
            <a
              href="https://github.com/ceotjoe/tideline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)] text-center md:text-left">
          <div className="space-y-1">
            <p className="flex items-center justify-center md:justify-start gap-1">
              <span>{t.maintainer}</span>
              <Radio className="w-3.5 h-3.5 text-[var(--color-primary)] inline" />
            </p>
            <p>{t.disclaimer}</p>
            <p className="opacity-80">{t.copyright}</p>
          </div>

          {/* Legal Buttons (Impressum & Privacy) */}
          <div className="flex items-center gap-4 font-semibold">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-[var(--color-primary)] hover:underline focus:outline-none"
            >
              {t.impressum}
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[var(--color-primary)] hover:underline focus:outline-none"
            >
              {t.privacy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
