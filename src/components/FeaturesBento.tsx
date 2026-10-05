import React from 'react'
import { Language, translations } from '../data/translations'
import {
  WifiOff,
  RefreshCw,
  Smartphone,
  CheckCircle,
  Apple,
  Monitor,
  Mountain,
  Trophy,
  Terminal,
} from 'lucide-react'

interface FeaturesBentoProps {
  lang: Language
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ lang }) => {
  const t = translations[lang].pillars

  return (
    <section id="features" className="py-20 md:py-28 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/30">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">{t.subtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Offline is Normal */}
          <div className="lg:col-span-7 rounded-3xl p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)]/70 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-variant)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--border-outline)]/30">
                  <WifiOff className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] text-[var(--color-primary)]">
                  {t.card1.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {t.card1.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t.card1.desc}
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[var(--bg-surface-variant)]/60 border border-[var(--border-outline)]/30 flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)] font-semibold">Local Lookups:</span>
              <span className="font-bold text-[var(--color-primary)] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                DXCC · WAZ · ITU · Worked Before
              </span>
            </div>
          </div>

          {/* Card 2: Sync You Can Trust */}
          <div className="lg:col-span-5 rounded-3xl p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)]/70 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-variant)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--border-outline)]/30">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] text-[var(--color-primary)]">
                  {t.card2.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {t.card2.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t.card2.desc}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                Synced
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30">
                Uploading
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                Queued
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30">
                Conflict Check
              </span>
            </div>
          </div>

          {/* Card 3: SOTA, POTA & WWFF Activations */}
          <div className="lg:col-span-5 rounded-3xl p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)]/70 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-variant)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--border-outline)]/30">
                  <Mountain className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] text-[var(--color-primary)]">
                  {t.card3.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {t.card3.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t.card3.desc}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
              <span className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/30">
                🏔️ SOTA · POTA · WWFF
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/30">
                📍 Distance & Grid Search
              </span>
            </div>
          </div>

          {/* Card 4: Contest Mode & Field Ergonomics */}
          <div className="lg:col-span-7 rounded-3xl p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)]/70 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-variant)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--border-outline)]/30">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] text-[var(--color-primary)]">
                  {t.card4.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {t.card4.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t.card4.desc}
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[var(--bg-surface-variant)]/60 border border-[var(--border-outline)]/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[var(--text-secondary)]">MASTER.SCP & Dupe Rules</span>
              <span className="text-[var(--color-primary)] font-bold">
                Cabrillo Export · Serial Allocator
              </span>
            </div>
          </div>

          {/* Banner: Cross-Platform Support */}
          <div className="lg:col-span-12 rounded-3xl p-8 bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-surface-variant)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
                {t.crossPlatform.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                {t.crossPlatform.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {[
                { name: 'iOS', icon: <Apple className="w-4 h-4" /> },
                { name: 'iPadOS', icon: <Apple className="w-4 h-4" /> },
                { name: 'Android', icon: <Smartphone className="w-4 h-4" /> },
                { name: 'macOS', icon: <Monitor className="w-4 h-4" /> },
                { name: 'Windows', icon: <Monitor className="w-4 h-4" /> },
                { name: 'Linux', icon: <Terminal className="w-4 h-4" /> },
              ].map((plat) => (
                <div
                  key={plat.name}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-outline)]/40 shadow-sm text-xs font-bold text-[var(--text-primary)]"
                >
                  {plat.icon}
                  <span>{plat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
