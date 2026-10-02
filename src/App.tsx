import React, { useState } from 'react'
import { useThemeMode } from './tokens/theme'
import { Language } from './data/translations'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WaveHorizon } from './components/WaveHorizon'
import { FieldModeShowcase } from './components/FieldModeShowcase'
import { FeaturesBento } from './components/FeaturesBento'
import { SyncExplainer } from './components/SyncExplainer'
import { RoadmapSection } from './components/RoadmapSection'
import { ManualExplorer } from './components/ManualExplorer'
import { DownloadSection } from './components/DownloadSection'
import { Footer } from './components/Footer'
import { LegalModal } from './components/LegalModal'

export const App: React.FC = () => {
  const { mode, setMode } = useThemeMode()
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('de')) return 'de'
    }
    return 'en'
  })
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'privacy' | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] theme-transition">
      {/* Sticky Navigation Bar */}
      <Navbar mode={mode} setMode={setMode} lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* Hero Section with Interactive Mockup */}
        <Hero lang={lang} />

        {/* Dynamic Coastal Wave Divider */}
        <WaveHorizon mode={mode} height={72} />

        {/* Four Dedicated Field Modes Showcase */}
        <FieldModeShowcase currentMode={mode} setMode={setMode} lang={lang} />

        {/* Four Core Pillars Bento Grid & Cross Platform */}
        <FeaturesBento lang={lang} />

        {/* Sync Engine & Wavelog API v2 Flow */}
        <SyncExplainer lang={lang} />

        {/* Dynamic Wave Divider */}
        <WaveHorizon mode={mode} height={64} flip />

        {/* Roadmap & Milestone Progress */}
        <RoadmapSection lang={lang} />

        {/* Embedded Interactive Documentation Hub */}
        <ManualExplorer lang={lang} />

        {/* Call to Action & Download Banner */}
        <DownloadSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer mode={mode} lang={lang} onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal Modals (Impressum & Privacy Policy) */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} lang={lang} />
    </div>
  )
}

export default App
