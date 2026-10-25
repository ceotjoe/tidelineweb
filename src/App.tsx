import React, { useEffect, useState } from 'react'
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
import { LegalPage } from './components/LegalPage'

type PageRoute = 'home' | 'privacy' | 'impressum'

function getRouteFromLocation(): PageRoute {
  if (typeof window === 'undefined') return 'home'
  const cleanPath = window.location.pathname
    .toLowerCase()
    .replace(/\/index\.html$/, '')
    .replace(/\.html$/, '')
    .replace(/\/+$/, '')
  const hash = window.location.hash.toLowerCase()

  if (
    cleanPath === '/privacy' ||
    cleanPath === '/datenschutz' ||
    hash === '#privacy' ||
    hash === '#datenschutz'
  ) {
    return 'privacy'
  }
  if (
    cleanPath === '/imprint' ||
    cleanPath === '/impressum' ||
    hash === '#imprint' ||
    hash === '#impressum'
  ) {
    return 'impressum'
  }
  return 'home'
}

export const App: React.FC = () => {
  const { mode, setMode } = useThemeMode()
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const cleanPath = window.location.pathname.toLowerCase()
      if (cleanPath.includes('/datenschutz') || cleanPath.includes('/impressum')) {
        return 'de'
      }
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('de')) return 'de'
    }
    return 'en'
  })
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => getRouteFromLocation())

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromLocation())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (currentPage === 'privacy') {
      document.title =
        lang === 'de'
          ? 'Datenschutzerklärung — Tideline'
          : 'Privacy Policy — Tideline'
    } else if (currentPage === 'impressum') {
      document.title =
        lang === 'de' ? 'Impressum — Tideline' : 'Imprint / Legal Notice — Tideline'
    } else {
      document.title = 'Tideline — The Offline Logger for Wavelog'
    }
  }, [currentPage, lang])

  const navigateTo = (page: PageRoute, sectionHash?: string) => {
    if (page === 'privacy') {
      window.history.pushState({}, '', '/privacy')
      setCurrentPage('privacy')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'impressum') {
      window.history.pushState({}, '', '/imprint')
      setCurrentPage('impressum')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const targetUrl = sectionHash ? `/${sectionHash}` : '/'
      window.history.pushState({}, '', targetUrl)
      setCurrentPage('home')
      if (sectionHash) {
        requestAnimationFrame(() => {
          const el = document.querySelector(sectionHash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] theme-transition">
      {/* Sticky Navigation Bar */}
      <Navbar
        mode={mode}
        setMode={setMode}
        lang={lang}
        setLang={setLang}
        onNavigateHome={(sectionHash) => navigateTo('home', sectionHash)}
      />

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
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
          </>
        ) : (
          <LegalPage type={currentPage} lang={lang} onNavigate={(page) => navigateTo(page)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        mode={mode}
        lang={lang}
        onOpenLegal={(type) => navigateTo(type)}
        onNavigateHome={(sectionHash) => navigateTo('home', sectionHash)}
      />
    </div>
  )
}

export default App
