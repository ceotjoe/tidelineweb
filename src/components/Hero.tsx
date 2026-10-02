import React from 'react'
import { Language, translations } from '../data/translations'
import { InteractiveMockup } from './InteractiveMockup'
import { Github, BookOpen, Compass, ShieldCheck } from 'lucide-react'

interface HeroProps {
  lang: Language
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden theme-transition">
      {/* Decorative gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--color-primary)]/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border border-[var(--border-outline)]/40 shadow-sm animate-in fade-in duration-300">
            <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{t.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            <span>{t.titleLine1}</span>{' '}
            <span className="block text-[var(--color-primary)]">{t.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal max-w-2xl mx-auto">
            {t.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="https://github.com/ceotjoe/tideline"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-95 transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            >
              <Github className="w-4 h-4" />
              <span>{t.ctaPrimary}</span>
            </a>

            <a
              href="#manuals"
              className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)] border-2 border-[var(--border-outline)]/40 transition-all shadow-sm flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            >
              <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
              <span>{t.ctaSecondary}</span>
            </a>

            <a
              href="#roadmap"
              className="px-5 py-3.5 rounded-2xl font-semibold text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>{t.ctaRoadmap}</span>
            </a>
          </div>

          {/* Status announcement */}
          <p className="text-xs text-[var(--text-secondary)] font-medium pt-1">{t.statusNote}</p>
        </div>

        {/* Interactive App Mockup Preview */}
        <div className="relative">
          <InteractiveMockup lang={lang} />
        </div>
      </div>
    </section>
  )
}
