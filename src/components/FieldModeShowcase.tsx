import React from 'react'
import { ThemeMode } from '../tokens/colors'
import { Language, translations } from '../data/translations'
import { Sun, Moon, Eye, ShieldAlert, Check } from 'lucide-react'

interface FieldModeShowcaseProps {
  currentMode: ThemeMode
  setMode: (mode: ThemeMode) => void
  lang: Language
}

export const FieldModeShowcase: React.FC<FieldModeShowcaseProps> = ({
  currentMode,
  setMode,
  lang,
}) => {
  const t = translations[lang].fieldModes

  const modesList: {
    id: ThemeMode
    name: string
    desc: string
    icon: React.ReactNode
    previewBg: string
    previewCard: string
    previewText: string
    previewAccent: string
  }[] = [
    {
      id: 'light',
      name: t.modes.light.name,
      desc: t.modes.light.desc,
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      previewBg: '#F6F1E7',
      previewCard: '#FFFCF6',
      previewText: '#12343B',
      previewAccent: '#1F6F68',
    },
    {
      id: 'dark',
      name: t.modes.dark.name,
      desc: t.modes.dark.desc,
      icon: <Moon className="w-5 h-5 text-seafoam-400" />,
      previewBg: '#0F1E22',
      previewCard: '#16292E',
      previewText: '#E8F1EF',
      previewAccent: '#7FD1C3',
    },
    {
      id: 'sunlight',
      name: t.modes.sunlight.name,
      desc: t.modes.sunlight.desc,
      icon: <Eye className="w-5 h-5 text-gray-900 dark:text-gray-100" />,
      previewBg: '#FFFFFF',
      previewCard: '#FFFFFF',
      previewText: '#000000',
      previewAccent: '#000000',
    },
    {
      id: 'nightred',
      name: t.modes.nightred.name,
      desc: t.modes.nightred.desc,
      icon: <ShieldAlert className="w-5 h-5 text-nightred-500" />,
      previewBg: '#000000',
      previewCard: '#0D0000',
      previewText: '#FF4433',
      previewAccent: '#CC2214',
    },
  ]

  return (
    <section
      id="field-modes"
      className="py-20 md:py-28 bg-[var(--bg-surface-variant)]/40 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-outline)]/30">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">{t.subtitle}</p>
        </div>

        {/* 4 Mode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modesList.map((m) => {
            const isSelected = currentMode === m.id
            return (
              <div
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border-2 shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/40 bg-[var(--bg-surface)]'
                    : 'border-[var(--border-outline)]/40 bg-[var(--bg-surface)] hover:border-[var(--color-primary)]/60'
                }`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/30">
                      {m.icon}
                    </div>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-text)]">
                        <Check className="w-3 h-3" />
                        Active
                      </span>
                    )}
                  </div>

                  {/* Mode Title & Description */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{m.name}</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                {/* Live Mini Preview Canvas */}
                <div
                  className="rounded-2xl p-4 border transition-transform duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: m.previewBg,
                    borderColor: m.id === 'sunlight' ? '#000000' : 'rgba(128,128,128,0.2)',
                  }}
                >
                  <div
                    className="rounded-xl p-3 shadow-sm border"
                    style={{
                      backgroundColor: m.previewCard,
                      borderColor: m.previewAccent,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="font-callsign font-bold text-xs"
                        style={{ color: m.previewText }}
                      >
                        DL0HOZ /P
                      </span>
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: m.previewAccent,
                          color: m.id === 'nightred' ? '#000000' : '#FFFFFF',
                        }}
                      >
                        14.285 MHz
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full rounded-full opacity-60"
                      style={{ backgroundColor: m.previewAccent }}
                    />
                  </div>
                  <div className="mt-2.5 text-center">
                    <span className="text-xs font-bold" style={{ color: m.previewText }}>
                      {t.activateAction} →
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
