import React from 'react'
import { Language, translations } from '../data/translations'
import { Github, ExternalLink, Star, ShieldCheck } from 'lucide-react'

interface DownloadSectionProps {
  lang: Language
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ lang }) => {
  const t = translations[lang].download

  return (
    <section className="py-20 md:py-28 theme-transition">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-surface-variant)] border-2 border-[var(--border-outline)]/40 shadow-2xl text-center space-y-8 relative overflow-hidden">
          {/* Subtle wave watermark decoration */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none rounded-full bg-[var(--color-primary)] blur-3xl"
            aria-hidden="true"
          />

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--color-primary)] text-[var(--color-primary-text)] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>MIT Licensed · Free & Open Source</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/ceotjoe/tideline/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl font-bold text-sm bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-95 transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            >
              <Github className="w-5 h-5" />
              <span>{t.btnGithub}</span>
            </a>

            <a
              href="https://github.com/ceotjoe/tideline/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl font-bold text-sm bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)] border-2 border-[var(--border-outline)]/40 transition-all shadow-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{t.starLabel}</span>
            </a>

            <a
              href="https://www.wavelog.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl font-bold text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5"
            >
              <span>{t.btnWavelog}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Supported platform tags */}
          <div className="pt-6 border-t border-[var(--border-outline)]/20 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[var(--text-secondary)]">
            <span>Platforms:</span>
            {['iOS', 'iPadOS', 'Android', 'macOS', 'Windows', 'Linux'].map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-outline)]/30"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
