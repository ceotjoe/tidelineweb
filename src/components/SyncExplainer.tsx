import React from 'react'
import { Language, translations } from '../data/translations'
import { ShieldCheck, HardDrive, Wifi, Server, CheckCircle2, ArrowRight } from 'lucide-react'

interface SyncExplainerProps {
  lang: Language
}

export const SyncExplainer: React.FC<SyncExplainerProps> = ({ lang }) => {
  const t = translations[lang].syncEngine

  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <HardDrive className="w-6 h-6 text-[var(--color-primary)]" />,
      detail: 'Local SQLite DB (UUID + UTC + HLC)',
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Wifi className="w-6 h-6 text-amber-500" />,
      detail: 'Reconcile on (Call + Min + Band + Mode + Station)',
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      detail: 'Wavelog v2 API POST /api/v2/qso (Batch)',
    },
  ]

  return (
    <section
      id="sync-engine"
      className="py-20 md:py-28 bg-[var(--bg-surface-variant)]/30 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-outline)]/30">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">{t.subtitle}</p>
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="rounded-3xl p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)]/70 transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-variant)] flex items-center justify-center border border-[var(--border-outline)]/30">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-[var(--text-secondary)]/30 font-mono">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-outline)]/20">
                <span className="inline-block text-xs font-mono font-semibold text-[var(--color-primary)] bg-[var(--bg-surface-variant)] px-3 py-1.5 rounded-xl border border-[var(--border-outline)]/30">
                  {s.detail}
                </span>
              </div>

              {/* Connecting arrow on large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 items-center justify-center text-[var(--color-primary)] shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security / Wavelog Compatibility Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-outline)]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                Wavelog API v2 Compatible (3.1.0+)
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Required token scopes:{' '}
                <code className="font-mono bg-[var(--bg-surface-variant)] px-1 rounded">
                  qso:read
                </code>
                ,{' '}
                <code className="font-mono bg-[var(--bg-surface-variant)] px-1 rounded">
                  qso:write
                </code>
                ,{' '}
                <code className="font-mono bg-[var(--bg-surface-variant)] px-1 rounded">
                  station:read
                </code>
                .
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Zero Duplicate Guarantee
          </span>
        </div>
      </div>
    </section>
  )
}
