import React, { useState } from 'react'
import { Language, translations } from '../data/translations'
import { MANUALS_EN, MANUALS_DE } from '../data/manualsData'
import { BookOpen, Search, ExternalLink, ChevronRight, Check } from 'lucide-react'
import { MarkdownRenderer } from './MarkdownRenderer'

interface ManualExplorerProps {
  lang: Language
}

export const ManualExplorer: React.FC<ManualExplorerProps> = ({ lang }) => {
  const t = translations[lang].manuals
  const manuals = lang === 'en' ? MANUALS_EN : MANUALS_DE
  const [selectedId, setSelectedId] = useState<string>(manuals[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredManuals = manuals.filter(
    (m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeDoc = manuals.find((m) => m.id === selectedId) || manuals[0]

  return (
    <section
      id="manuals"
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

        {/* Documentation Viewer Container */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
          {/* Sidebar / Topic List */}
          <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-[var(--border-outline)]/30 bg-[var(--bg-surface-variant)]/40 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Search bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[var(--text-secondary)] absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'en' ? 'Search guide topics...' : 'Thema durchsuchen...'}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-outline)]/40 text-xs font-medium focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              {/* Topic item buttons */}
              <div className="space-y-1.5">
                {filteredManuals.map((m) => {
                  const isSelected = m.id === activeDoc.id
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedId(m.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] font-bold border-transparent shadow-sm'
                          : 'bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-variant)] border-[var(--border-outline)]/20'
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                            isSelected ? 'opacity-85' : 'text-[var(--color-primary)]'
                          }`}
                        >
                          {m.category}
                        </span>
                        <h4 className="text-sm font-semibold leading-tight line-clamp-1">
                          {m.title}
                        </h4>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'opacity-90' : 'opacity-40'}`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* GitHub repo guide link */}
            <div className="pt-4 border-t border-[var(--border-outline)]/20 mt-4">
              <a
                href={`https://github.com/ceotjoe/tideline/tree/main/docs/manual/${lang}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:underline"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readFullButton}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Document Content View */}
          <div className="lg:col-span-8 p-6 sm:p-10 overflow-y-auto max-h-[620px]">
            <div className="space-y-6">
              {/* Doc Header */}
              <div className="border-b border-[var(--border-outline)]/30 pb-5">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-surface-variant)] text-[var(--color-primary)] uppercase tracking-wider">
                  {activeDoc.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                  {activeDoc.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
                  {activeDoc.summary}
                </p>
              </div>

              {/* Doc Body Text */}
              <MarkdownRenderer content={activeDoc.content} />

              {/* Direct GitHub permalink */}
              <div className="pt-6 border-t border-[var(--border-outline)]/20 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>
                  docs/manual/{lang}/{activeDoc.id}.md
                </span>
                <a
                  href={`https://github.com/ceotjoe/tideline/blob/main/docs/manual/${lang}/${activeDoc.id}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--color-primary)] flex items-center gap-1 hover:underline"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Source verified on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
