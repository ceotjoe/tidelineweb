import React, { useEffect, useState } from 'react'
import { Language, translations } from '../data/translations'
import { X, Shield } from 'lucide-react'

interface LegalModalProps {
  type: 'impressum' | 'privacy' | null
  onClose: () => void
  lang: Language
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

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, lang }) => {
  const t = translations[lang].legal

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (type) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [type, onClose])

  if (!type) return null

  const title = type === 'impressum' ? t.impressumTitle : t.privacyTitle
  const content = type === 'impressum' ? t.impressumContent : t.privacyContent

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-2xl overflow-hidden flex flex-col theme-transition"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[var(--border-outline)]/30 flex items-center justify-between bg-[var(--bg-surface-variant)]/60">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[var(--color-primary)]" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm sm:text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-normal">
          {content.includes('{{EMAIL}}') ? (
            <>
              {content.split('{{EMAIL}}')[0]}
              <ObfuscatedEmail />
              {content.split('{{EMAIL}}')[1]}
            </>
          ) : (
            content
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--border-outline)]/30 flex justify-end bg-[var(--bg-surface-variant)]/40">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 transition-all shadow-sm"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  )
}
