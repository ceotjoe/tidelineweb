import React, { useEffect, useState } from 'react'
import { Language, translations } from '../data/translations'
import { ArrowLeft, Shield, Scale } from 'lucide-react'

interface LegalPageProps {
  type: 'impressum' | 'privacy'
  lang: Language
  onNavigate: (page: 'home' | 'privacy' | 'impressum') => void
}

const ObfuscatedEmail: React.FC = () => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(atob('ZG8xaG96QGRhcmMuZGU='))
  }, [])

  if (!email) return null

  return (
    <a
      href={`mailto:${email}`}
      className="text-[var(--color-primary)] hover:underline font-medium focus:outline-none focus:ring-1 focus:ring-[var(--color-focus)] rounded"
    >
      {email}
    </a>
  )
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, lang, onNavigate }) => {
  const t = translations[lang].legal
  const tf = translations[lang].footer

  const title = type === 'impressum' ? t.impressumTitle : t.privacyTitle
  const content = type === 'impressum' ? t.impressumContent : t.privacyContent
  const canonicalPath = type === 'impressum' ? '/imprint' : '/privacy'

  return (
    <section className="py-12 md:py-20 theme-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Navigation & Page Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('home')
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] rounded-lg px-2 py-1 -ml-2 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToHome}</span>
          </a>

          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/30 self-start sm:self-auto">
            <a
              href="/imprint"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('impressum')
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                type === 'impressum'
                  ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{tf.impressum}</span>
            </a>

            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('privacy')
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                type === 'privacy'
                  ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{tf.privacy}</span>
            </a>
          </div>
        </div>

        {/* Legal Content Card */}
        <article className="rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-xl overflow-hidden theme-transition">
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[var(--border-outline)]/30 bg-[var(--bg-surface-variant)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-outline)]/30 text-[var(--color-primary)]">
                {type === 'impressum' ? (
                  <Scale className="w-6 h-6" />
                ) : (
                  <Shield className="w-6 h-6" />
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {title}
              </h1>
            </div>

            <span className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-surface)] px-3 py-1.5 rounded-xl border border-[var(--border-outline)]/30 self-start sm:self-auto">
              tideline.holzapfel-online.de{canonicalPath}
            </span>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-10 text-sm sm:text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-normal">
            {content.includes('{{EMAIL}}')
              ? content.split('{{EMAIL}}').map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && <ObfuscatedEmail />}
                  </React.Fragment>
                ))
              : content}
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 border-t border-[var(--border-outline)]/30 bg-[var(--bg-surface-variant)]/30 flex items-center justify-between">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('home')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToHome}</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
