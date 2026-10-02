import React, { useState } from 'react'
import { INITIAL_QSOS, QSOItem, detectDxcc } from '../data/mockQSOs'
import { Language, translations } from '../data/translations'
import {
  Radio,
  CheckCircle2,
  Clock,
  ArrowUpCircle,
  AlertCircle,
  Waves,
  Sparkles,
} from 'lucide-react'

interface InteractiveMockupProps {
  lang: Language
}

export const InteractiveMockup: React.FC<InteractiveMockupProps> = ({ lang }) => {
  const t = translations[lang].mockup
  const [qsos, setQsos] = useState<QSOItem[]>(INITIAL_QSOS)
  const [callsign, setCallsign] = useState('')
  const [band, setBand] = useState('20m')
  const [mode, setMode] = useState('SSB')
  const [rstSent, setRstSent] = useState('59')
  const [rstRcvd, setRstRcvd] = useState('59')
  const [isSimulatingSync, setIsSimulatingSync] = useState(false)

  const detectedCountry = detectDxcc(callsign)

  const handleLogQso = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!callsign.trim()) return

    const now = new Date()
    const utcHours = String(now.getUTCHours()).padStart(2, '0')
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0')
    const timeStr = `${utcHours}:${utcMinutes}`

    const newQso: QSOItem = {
      id: `qso-${Date.now()}`,
      callsign: callsign.toUpperCase().trim(),
      band,
      mode,
      rstSent,
      rstRcvd,
      timeUtc: timeStr,
      dxcc: detectedCountry || 'Unknown Entity',
      syncState: 'queued',
    }

    setQsos([newQso, ...qsos])
    setCallsign('')
    setIsSimulatingSync(true)

    // Simulate Wavelog background sync cycle
    setTimeout(() => {
      setQsos((prev) =>
        prev.map((q) => (q.id === newQso.id ? { ...q, syncState: 'uploading' } : q))
      )
    }, 1200)

    setTimeout(() => {
      setQsos((prev) => prev.map((q) => (q.id === newQso.id ? { ...q, syncState: 'synced' } : q)))
      setIsSimulatingSync(false)
    }, 2800)
  }

  const queuedCount = qsos.filter((q) => q.syncState === 'queued' || q.syncState === 'local').length
  const uploadingCount = qsos.filter((q) => q.syncState === 'uploading').length
  const syncedCount = qsos.filter((q) => q.syncState === 'synced').length

  const getStatusBadge = (state: QSOItem['syncState']) => {
    switch (state) {
      case 'synced':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            {t.statusSynced}
          </span>
        )
      case 'uploading':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30 animate-pulse">
            <ArrowUpCircle className="w-3 h-3 animate-spin" />
            {t.statusUploading}
          </span>
        )
      case 'queued':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            <Clock className="w-3 h-3" />
            {t.statusQueued}
          </span>
        )
      case 'local':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/30">
            <Radio className="w-3 h-3" />
            {t.statusLocal}
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30">
            <AlertCircle className="w-3 h-3" />
            {t.statusConflict}
          </span>
        )
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-outline)]/40 shadow-2xl overflow-hidden theme-transition">
      {/* Device Header Bar */}
      <div className="px-5 py-3.5 bg-[var(--bg-surface-variant)] border-b border-[var(--border-outline)]/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-bold text-[var(--text-secondary)] ml-2">
            Tideline Logger · Wavelog v2
          </span>
        </div>

        {/* Tide Gauge Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-outline)]/40 text-xs font-medium text-[var(--text-primary)] shadow-sm">
          <Waves
            className={`w-3.5 h-3.5 text-[var(--color-primary)] ${isSimulatingSync ? 'animate-bounce' : ''}`}
          />
          <span className="font-semibold text-[var(--color-primary)]">Tide Gauge:</span>
          <span>
            {queuedCount} {lang === 'en' ? 'queued' : 'wartend'} · {uploadingCount}{' '}
            {lang === 'en' ? 'uploading' : 'sendend'} · {syncedCount}{' '}
            {lang === 'en' ? 'synced' : 'synchronisiert'}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Interactive QSO Entry Form */}
        <form onSubmit={handleLogQso} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-end">
            {/* Callsign Input */}
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                {t.callsignLabel}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value.toUpperCase())}
                  placeholder="e.g. DL1XYZ"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border-2 border-[var(--border-outline)]/40 focus:border-[var(--color-primary)] focus:outline-none font-callsign text-lg font-bold uppercase placeholder:normal-case placeholder:font-sans placeholder:text-sm placeholder:opacity-50 transition-all"
                />
                {callsign && (
                  <span className="absolute right-3 top-3 text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--color-primary)] border border-[var(--border-outline)]/30">
                    UTC
                  </span>
                )}
              </div>
            </div>

            {/* Band selection */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                {t.bandLabel}
              </label>
              <select
                value={band}
                onChange={(e) => setBand(e.target.value)}
                className="w-full px-3 py-3 rounded-xl bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border-2 border-[var(--border-outline)]/40 focus:border-[var(--color-primary)] focus:outline-none font-medium text-sm transition-all"
              >
                <option value="80m">80m</option>
                <option value="40m">40m</option>
                <option value="20m">20m</option>
                <option value="15m">15m</option>
                <option value="10m">10m</option>
                <option value="2m">2m</option>
                <option value="70cm">70cm</option>
              </select>
            </div>

            {/* Mode selection */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                {t.modeLabel}
              </label>
              <select
                value={mode}
                onChange={(e) => {
                  setMode(e.target.value)
                  if (e.target.value === 'CW') {
                    setRstSent('599')
                    setRstRcvd('599')
                  } else {
                    setRstSent('59')
                    setRstRcvd('59')
                  }
                }}
                className="w-full px-3 py-3 rounded-xl bg-[var(--bg-surface-variant)] text-[var(--text-primary)] border-2 border-[var(--border-outline)]/40 focus:border-[var(--color-primary)] focus:outline-none font-medium text-sm transition-all"
              >
                <option value="SSB">SSB</option>
                <option value="CW">CW</option>
                <option value="FM">FM</option>
                <option value="FT8">FT8</option>
                <option value="AM">AM</option>
              </select>
            </div>

            {/* Commit Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                disabled={!callsign.trim()}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Radio className="w-4 h-4" />
                <span>{t.logButton}</span>
              </button>
            </div>
          </div>

          {/* Real-time DXCC Entity Detection Banner */}
          {detectedCountry && (
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-surface-variant)] border border-[var(--color-primary)]/30 text-xs font-medium text-[var(--text-primary)] animate-in fade-in duration-200">
              <Sparkles className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
              <span>
                <strong>{t.dxccDetected}:</strong> {detectedCountry}
              </span>
              <span className="ml-auto text-xs opacity-75 font-mono">ITU: 28 · CQ: 14</span>
            </div>
          )}

          {/* Quick preset suggestion pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[var(--text-secondary)]">
            <span className="font-semibold">{t.tryItNote}</span>
            {['DL1XYZ', 'W1AW', 'EA3ABC', 'OE7SOTA', 'G4ZBA', 'HB9FUN'].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setCallsign(sample)}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface-variant)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-text)] border border-[var(--border-outline)]/30 font-callsign font-semibold transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        </form>

        {/* Recent QSO Log Table */}
        <div className="space-y-3 pt-2 border-t border-[var(--border-outline)]/20">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              {t.recentQsos}
            </h3>
            <span className="text-xs text-[var(--text-secondary)] font-mono">
              Auto-Reconcile: UTC Active
            </span>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {qsos.map((q) => (
              <div
                key={q.id}
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface-variant)]/60 border border-[var(--border-outline)]/30 hover:border-[var(--color-primary)]/50 transition-all text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-callsign font-bold text-base text-[var(--text-primary)] tracking-wide">
                    {q.callsign}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-outline)]/30 font-semibold">
                    {q.band} · {q.mode}
                  </span>
                  <span className="hidden md:inline text-xs text-[var(--text-secondary)]">
                    {q.dxcc}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {q.timeUtc} UTC
                  </span>
                  {getStatusBadge(q.syncState)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
