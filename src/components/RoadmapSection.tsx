import React from 'react'
import { Language, translations } from '../data/translations'
import { CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react'

interface RoadmapSectionProps {
  lang: Language
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ lang }) => {
  const t = translations[lang].roadmap

  const milestones = [
    {
      milestone: t.m1.version,
      status: t.m1.status,
      desc: t.m1.desc,
      isDone: true,
      badgeColor: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
    },
    {
      milestone: t.m2.version,
      status: t.m2.status,
      desc: t.m2.desc,
      isCurrent: true,
      badgeColor: 'bg-seafoam-500/20 text-seafoam-700 dark:text-seafoam-300 border-seafoam-500/40',
      icon: <Sparkles className="w-4 h-4 text-[var(--color-primary)] animate-pulse" />,
    },
    {
      milestone: t.m3.version,
      status: t.m3.status,
      desc: t.m3.desc,
      badgeColor: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
      icon: <Clock className="w-4 h-4 text-amber-500" />,
    },
    {
      milestone: t.m4.version,
      status: t.m4.status,
      desc: t.m4.desc,
      badgeColor: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',
      icon: <Calendar className="w-4 h-4 text-slate-500" />,
    },
    {
      milestone: t.m5.version,
      status: t.m5.status,
      desc: t.m5.desc,
      badgeColor: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',
      icon: <Calendar className="w-4 h-4 text-slate-500" />,
    },
  ]

  return (
    <section id="roadmap" className="py-20 md:py-28 theme-transition">
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

        {/* Milestone Timeline List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {milestones.map((item) => (
            <div
              key={item.milestone}
              className={`p-6 sm:p-8 rounded-3xl border-2 transition-all duration-200 bg-[var(--bg-surface)] ${
                item.isCurrent
                  ? 'border-[var(--color-primary)] shadow-md ring-2 ring-[var(--color-primary)]/20'
                  : 'border-[var(--border-outline)]/40 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[var(--bg-surface-variant)]">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.milestone}</h3>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor} self-start sm:self-auto`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pl-0 sm:pl-11">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
