export type Language = 'en' | 'de'

export const translations = {
  en: {
    nav: {
      brand: 'Tideline',
      tagline: 'the offline logger for Wavelog',
      features: 'Features',
      fieldModes: 'Field Modes',
      syncEngine: 'Sync Engine',
      roadmap: 'Roadmap',
      manuals: 'Manuals',
      github: 'GitHub',
      toggleLanguage: 'Deutsch',
      themePicker: 'Theme',
    },
    hero: {
      badge: 'Open Source · Cross-Platform · Wavelog API v2',
      titleLine1: 'Logging in the wild.',
      titleLine2: 'Synced when you are home.',
      description:
        'Tideline is an offline-first amateur radio QSO logger for iOS, iPadOS, Android, macOS and Windows. Built for summits, parks, field days and contests — reliably synced to your own Wavelog instance whenever you reconnect.',
      ctaPrimary: 'Explore Repository',
      ctaSecondary: 'Read the Manual',
      ctaRoadmap: 'View Roadmap',
      statusNote: 'Status: MVP (v0.1) in development. End-to-end sync, DXCC & ADIF working.',
    },
    mockup: {
      title: 'Tideline Logger',
      tideGaugeLabel: 'Tide Gauge',
      tideGaugeStatus: '3 queued · 1 uploading · 48 synced',
      callsignLabel: 'Callsign',
      bandLabel: 'Band',
      modeLabel: 'Mode',
      rstSent: 'RST Sent',
      rstRcvd: 'RST Rcvd',
      logButton: 'Log Contact (Enter)',
      recentQsos: 'Recent Contacts & Sync Journal',
      statusSynced: 'Synced',
      statusUploading: 'Uploading',
      statusQueued: 'Queued',
      statusLocal: 'Local',
      statusConflict: 'Conflict',
      dxccDetected: 'DXCC Entity Detected',
      tryItNote: 'Try entering a callsign below (e.g. DL1XYZ, K1TTT, EA3ABC, G4ZBA):',
    },
    fieldModes: {
      sectionBadge: 'Ergonomics in the Wild',
      title: 'Four Dedicated Modes for Real Field Operations',
      subtitle:
        'From high noon in an alpine meadow to midnight in a contest tent, Tideline adapts instantly so you never lose contrast or night vision.',
      modes: {
        light: {
          name: 'Low Tide (Light)',
          desc: 'Calm sand and seafoam palette. Soft, balanced, and comfortable for daytime indoor and shaded outdoor logging.',
        },
        dark: {
          name: 'Deep Sea (Dark)',
          desc: 'Restful deep teal and seafoam contrast for evening shack logging without harsh glare.',
        },
        sunlight: {
          name: 'High Sunlight',
          desc: 'Engineered for direct mountain sun and beach glare. Uncompromising monochrome contrast (≥ 7:1) with zero washed-out elements.',
        },
        nightred: {
          name: 'Night Red (Vision Safe)',
          desc: 'Pure red phosphor mode for night activations and astronomy field days. Protects rod cell dark adaptation while keeping the screen fully legible.',
        },
      },
      activateAction: 'Switch Preview',
    },
    pillars: {
      sectionBadge: 'Built on Core Principles',
      title: 'Engineered for the Reality of Amateur Radio',
      subtitle:
        'Most logging apps treat losing connection as an exception. In Tideline, being offline is the baseline design.',
      card1: {
        title: 'Offline is Normal, Not an Error',
        desc: 'DXCC prefixes, country lookups, and "worked before" hints execute locally in milliseconds from on-device databases. Logging never stalls waiting for a spinner.',
        tag: 'Instant Responsiveness',
      },
      card2: {
        title: 'Sync You Can Trust',
        desc: 'Every QSO reports its exact state: local, queued, uploading, synced, or conflict. Transactions are journaled and idempotent. Contacts are never silently dropped or duplicated.',
        tag: 'Zero Data Loss',
      },
      card3: {
        title: 'Rugged Ergonomics in the Field',
        desc: 'Generous 64dp glove-friendly touch targets, single-handed portrait usage on summits, full keyboard shortcuts on desktop & tablets, and WCAG 2.2 AA accessibility.',
        tag: 'Field Ready',
      },
      card4: {
        title: 'Private & Cryptographically Secure',
        desc: 'Zero telemetry, zero third-party trackers. The local database is encrypted at rest via SQLite3MultipleCiphers. Wavelog tokens stay safely isolated in the hardware secure store.',
        tag: 'Encrypted at Rest',
      },
      crossPlatform: {
        title: 'One Clean Codebase, Five Native Platforms',
        desc: 'Crafted in Flutter with a clean domain/data layered architecture for iOS, iPadOS, Android, macOS, and Windows.',
      },
    },
    syncEngine: {
      sectionBadge: 'Wavelog v2 Integration',
      title: 'How Tideline Syncs with Your Wavelog',
      subtitle:
        'Tideline connects to your self-hosted Wavelog instance through its official API v2, using least-privilege tokens and smart idempotency checks.',
      step1Title: '1. In the Field (Completely Offline)',
      step1Desc:
        'QSOs are written to the local encrypted SQLite journal with UUIDs, UTC timestamps, and initial status "local" or "queued".',
      step2Title: '2. Connection Regained (Reachability Probe)',
      step2Desc:
        'When network returns, Tideline verifies the server with a lightweight reachability probe. It checks existing contacts using the Wavelog dupe tuple.',
      step3Title: '3. Resumable Batch Push',
      step3Desc:
        'Batches upload transparently. The signature Tide Gauge recedes as server acknowledgments confirm each QSO. Any server rejection is explained in plain English.',
    },
    roadmap: {
      sectionBadge: 'Development Milestones',
      title: 'The Journey from MVP to v1.0',
      subtitle:
        'Tideline follows a phased, test-driven roadmap. Every milestone is validated against automated mock server test suites.',
      m1: {
        version: 'M1: Foundation',
        status: 'Completed',
        desc: 'Repository setup, domain entities, ADIF 3.1 parser, mock server, secure storage adapters.',
      },
      m2: {
        version: 'M2: MVP (v0.1)',
        status: 'In Progress / Feature Complete',
        desc: 'Core QSO logging, transparent sync queue & journal, offline DXCC lookups, ADIF export/import, encrypted backups, EN/DE localization.',
      },
      m3: {
        version: 'M3: Contest Mode (v0.2)',
        status: 'Next',
        desc: 'Keyboard-first fast entry, non-repeating serial allocator, dupe rules, Super Check Partial (MASTER.SCP), Cabrillo export.',
      },
      m4: {
        version: 'M4: Activations (v0.3)',
        status: 'Planned',
        desc: 'SOTA, POTA, and WWFF activation sessions with offline reference packs and live QSO-to-validity trackers.',
      },
      m5: {
        version: 'M5: FLE & Field Modes (v0.4 → v1.0)',
        status: 'Planned',
        desc: 'Fast Log Entry (FLE) shorthand parsing, battery saver tuning, multi-Wavelog account switcher, and official App Store / Play Store builds.',
      },
    },
    manuals: {
      sectionBadge: 'Documentation Hub',
      title: 'Official Guides & Documentation',
      subtitle:
        'Explore the comprehensive manuals bundled directly with Tideline. Learn how to set up your API token, log offline, and manage sync.',
      readFullButton: 'View Full Guide on GitHub',
    },
    download: {
      title: 'Ready to elevate your portable logging?',
      subtitle:
        'Tideline is currently in active v0.1 MVP development. You can clone the repository, test the builds, or contribute to the open-source codebase.',
      btnGithub: 'View on GitHub',
      btnWavelog: 'About Wavelog.org',
      starLabel: 'Star on GitHub',
    },
    footer: {
      copyright: '© Tideline Project. Released under the MIT License.',
      maintainer: 'Maintained with passion for amateur radio by DO1HOZ / Jörg.',
      disclaimer:
        'Wavelog is an independent open-source project. Tideline connects to Wavelog via its public API v2.',
      impressum: 'Impressum / Legal Notice',
      privacy: 'Privacy Policy / Datenschutz',
    },
    legal: {
      impressumTitle: 'Impressum (Legal Notice)',
      impressumContent: `Angaben gemäß § 5 TMG / DDG:

Jörg Holzapfel (DO1HOZ)
E-Mail: do1hoz@darc.de
Web: https://tideline.holzapfel-online.de

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV:
Jörg Holzapfel

Haftungshinweis:
Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`,
      privacyTitle: 'Datenschutzerklärung (Privacy Policy)',
      privacyContent: `1. Datenschutz auf einen Blick:
Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Webseite erhebt keine personenbezogenen Tracking-Daten, verwendet keine Werbe-Cookies und bindet keine externen Tracking-Dienste ein.

2. Hosting & Server-Log-Dateien:
Der Provider dieser Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse in anonymisierter Form). Dies dient ausschließlich der technischen Betriebssicherheit.

3. Die Tideline App:
Die Tideline-App speichert alle Log-Daten lokal verschlüsselt auf Ihrem Gerät. Eine Übertragung erfolgt ausschließlich an die von Ihnen in den Einstellungen konfigurierte Wavelog-Instanz. Es gibt keine Telemetrie, keine Nutzungsstatistiken und keine Analyse-SDKs.`,
      close: 'Close',
    },
  },
  de: {
    nav: {
      brand: 'Tideline',
      tagline: 'der Offline-Logger für Wavelog',
      features: 'Funktionen',
      fieldModes: 'Feld-Modi',
      syncEngine: 'Sync-Engine',
      roadmap: 'Roadmap',
      manuals: 'Handbuch',
      github: 'GitHub',
      toggleLanguage: 'English',
      themePicker: 'Design',
    },
    hero: {
      badge: 'Open Source · Plattformübergreifend · Wavelog API v2',
      titleLine1: 'Funken im Gelände.',
      titleLine2: 'Synchronisiert zu Hause.',
      description:
        'Tideline ist ein Offline-first Amateurfunk-QSO-Logger für iOS, iPadOS, Android, macOS und Windows. Entwickelt für Berggipfel, Parks, Fielddays und Contests – zuverlässig mit deiner eigenen Wavelog-Instanz synchronisiert, sobald du wieder Empfang hast.',
      ctaPrimary: 'GitHub Repository',
      ctaSecondary: 'Handbuch lesen',
      ctaRoadmap: 'Roadmap ansehen',
      statusNote: 'Status: MVP (v0.1) in aktiver Entwicklung. Sync, DXCC & ADIF funktionieren.',
    },
    mockup: {
      title: 'Tideline Logger',
      tideGaugeLabel: 'Gezeiten-Anzeige (Tide Gauge)',
      tideGaugeStatus: '3 in Warteschlange · 1 lädt hoch · 48 synchronisiert',
      callsignLabel: 'Rufzeichen',
      bandLabel: 'Band',
      modeLabel: 'Modus',
      rstSent: 'RST Gesendet',
      rstRcvd: 'RST Empfangen',
      logButton: 'QSO loggen (Enter)',
      recentQsos: 'Aktuelle Funkkontakte & Sync-Journal',
      statusSynced: 'Synchronisiert',
      statusUploading: 'Lädt hoch',
      statusQueued: 'Warteschlange',
      statusLocal: 'Lokal',
      statusConflict: 'Konflikt',
      dxccDetected: 'Erkanntes DXCC-Land',
      tryItNote: 'Tippe ein Rufzeichen ein (z.B. DL1XYZ, K1TTT, EA3ABC, G4ZBA):',
    },
    fieldModes: {
      sectionBadge: 'Ergonomie im Praxiseinsatz',
      title: 'Vier maßgeschneiderte Modi für echte Feldeinsätze',
      subtitle:
        'Von grellem Sonnenlicht auf der Alm bis zur stockdunklen Nacht im Contest-Zelt: Tideline passt sich an, damit deine Augen und Nachtsicht geschützt bleiben.',
      modes: {
        light: {
          name: 'Ebbe (Hell / Sand & Gischt)',
          desc: 'Ruhige Farbpalette aus weichem Sand und Meerschaum. Perfekt für das Loggen im Shack oder im Schatten.',
        },
        dark: {
          name: 'Tiefsee (Dunkel)',
          desc: 'Entspannendes dunkles Blaugrün für abendliche Funkstunden ohne blendendes Displaylicht.',
        },
        sunlight: {
          name: 'Grelle Sonne (Sonnenlicht-Modus)',
          desc: 'Speziell für direkte Sonneneinstrahlung auf Berggipfeln. Kompromissloser Schwarz-Weiß-Kontrast (≥ 7:1) ohne verwaschene Details.',
        },
        nightred: {
          name: 'Nacht-Rot (Dunkeladaptiert)',
          desc: 'Reines Rotlicht für Nachtaktivierungen und Astronomie-Fielddays. Erhält die Dunkeladaption der Stäbchenzellen vollständig aufrecht.',
        },
      },
      activateAction: 'Modus testen',
    },
    pillars: {
      sectionBadge: 'Kernphilosophie',
      title: 'Gebaut für die harte Realität des Amateurfunks',
      subtitle:
        'Für die meisten Apps ist ein Verbindungsverlust ein Fehler. Bei Tideline ist Offline-Sein der bewusste Normalzustand.',
      card1: {
        title: 'Offline ist der Normalzustand',
        desc: 'DXCC-Präfixe, Länderzuordnungen und Vorab-Hinweise laufen 100% lokal auf dem Gerät. Das Loggen stockt nie durch Ladekreise.',
        tag: 'Verzögerungsfrei',
      },
      card2: {
        title: 'Synchronisation, der du vertrauen kannst',
        desc: 'Jedes QSO zeigt seinen exakten Status: lokal, wartend, sendend, synchronisiert oder Konflikt. Transaktionen werden journalisiert und duplikatfrei übertragen.',
        tag: 'Kein Datenverlust',
      },
      card3: {
        title: 'Ergonomie für den Außeneinsatz',
        desc: 'Großzügige 64dp-Touchziele für die Bedienung mit Handschuhen, Einhandbedienung am Smartphone, Tastaturkürzel am Tablet/PC und WCAG 2.2 AA Barrierefreiheit.',
        tag: 'Felderprobt',
      },
      card4: {
        title: 'Sicher und privat ohne Kompromisse',
        desc: 'Keine Telemetrie, keine Tracker. Lokale Datenbank mit SQLite3MultipleCiphers verschlüsselt. Wavelog-API-Token liegen geschützt im Hardware-Schlüsselspeicher.',
        tag: 'Ende-zu-Ende verschlüsselt',
      },
      crossPlatform: {
        title: 'Eine Codebasis für fünf Plattformen',
        desc: 'Entwickelt mit Flutter für iOS, iPadOS, Android, macOS und Windows in sauber getrennter Schichtenarchitektur.',
      },
    },
    syncEngine: {
      sectionBadge: 'Wavelog v2 Schnittstelle',
      title: 'So synchronisiert Tideline mit deinem Wavelog',
      subtitle:
        'Tideline verbindet sich über die moderne API v2 mit deiner selbst gehosteten Wavelog-Instanz – mit sicheren Rechten und intelligenter Duplikaterkennung.',
      step1Title: '1. Im Gelände (Komplett Offline)',
      step1Desc:
        'QSOs werden sofort in die verschlüsselte lokale SQLite-Datenbank mit UUID und UTC-Zeitstempel eingetragen und als "lokal" bzw. "in Warteschlange" markiert.',
      step2Title: '2. Wieder online (Erreichbarkeits-Check)',
      step2Desc:
        'Sobald wieder Netz vorhanden ist, prüft Tideline den Server mit einer leichten Probe und gleicht das Duplikat-Tupel von Wavelog ab.',
      step3Title: '3. Unterbrechungsfreier Batch-Upload',
      step3Desc:
        'QSOs werden im Hintergrund hochgeladen. Der Wasserpegel der Tide Gauge sinkt, sobald der Server bestätigt. Mögliche Konflikte werden in Klartext erklärt.',
    },
    roadmap: {
      sectionBadge: 'Entwicklungsfahrplan',
      title: 'Der Weg vom MVP zur Version 1.0',
      subtitle:
        'Tideline wird in klar definierten, testgetriebenen Phasen entwickelt. Jeder Meilenstein wird automatisiert gegen Mock-Server geprüft.',
      m1: {
        version: 'M1: Fundament',
        status: 'Abgeschlossen',
        desc: 'Repository-Struktur, Domänenmodelle, ADIF 3.1 Parser, Mock-Server, sichere Speicheradapter.',
      },
      m2: {
        version: 'M2: MVP (v0.1)',
        status: 'In Entwicklung / Funktionsvollständig',
        desc: 'QSO-Logging, transparente Sync-Warteschlange mit Journal, Offline-DXCC, ADIF Export/Import, verschlüsseltes Backup, DE/EN Lokalisierung.',
      },
      m3: {
        version: 'M3: Contest-Modus (v0.2)',
        status: 'Als Nächstes',
        desc: 'Tastatur-orientierte Schnelleingabe, lückenlose Seriennummern, Dupe-Prüfung, Super Check Partial (MASTER.SCP), Cabrillo-Export.',
      },
      m4: {
        version: 'M4: Aktivierungen (v0.3)',
        status: 'Geplant',
        desc: 'SOTA, POTA und WWFF Aktivierungssitzungen mit Offline-Referenzdaten und Fortschrittsanzeige zur Gültigkeit.',
      },
      m5: {
        version: 'M5: FLE & Feldmodi (v0.4 → v1.0)',
        status: 'Geplant',
        desc: 'Fast Log Entry (FLE) Kurzschrift, Batteriespar-Modus, Multi-Wavelog-Konten und offizielle App Store / Play Store Versionen.',
      },
    },
    manuals: {
      sectionBadge: 'Handbuch & Anleitungen',
      title: 'Offizielle Dokumentation direkt im Web',
      subtitle:
        'Lies die detaillierten Anleitungen von Tideline: Ersteinrichtung, Wavelog API-Token, Offline-Logging und Tastenkombinationen.',
      readFullButton: 'Vollständiges Dokument auf GitHub ansehen',
    },
    download: {
      title: 'Bereit für zuverlässiges Logging unterwegs?',
      subtitle:
        'Tideline befindet sich in der aktiven v0.1 MVP-Phase. Du kannst den Quellcode auf GitHub einsehen, Test-Builds erstellen oder mitwirken.',
      btnGithub: 'Auf GitHub ansehen',
      btnWavelog: 'Mehr über Wavelog.org',
      starLabel: 'Stern auf GitHub vergeben',
    },
    footer: {
      copyright: '© Tideline Projekt. Veröffentlicht unter der MIT-Lizenz.',
      maintainer: 'Mit Leidenschaft für den Amateurfunk entwickelt von DO1HOZ / Jörg.',
      disclaimer:
        'Wavelog ist ein eigenständiges Open-Source-Projekt. Tideline verbindet sich über dessen offizielle API v2.',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
    },
    legal: {
      impressumTitle: 'Impressum',
      impressumContent: `Angaben gemäß § 5 TMG / DDG:

Jörg Holzapfel (DO1HOZ)
E-Mail: do1hoz@darc.de
Web: https://tideline.holzapfel-online.de

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV:
Jörg Holzapfel

Haftungshinweis:
Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`,
      privacyTitle: 'Datenschutzerklärung',
      privacyContent: `1. Datenschutz auf einen Blick:
Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Webseite erhebt keine personenbezogenen Tracking-Daten, verwendet keine Werbe-Cookies und bindet keine externen Tracking-Dienste ein.

2. Hosting & Server-Log-Dateien:
Der Provider dieser Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse in anonymisierter Form). Dies dient ausschließlich der technischen Betriebssicherheit.

3. Die Tideline App:
Die Tideline-App speichert alle Log-Daten lokal verschlüsselt auf Ihrem Gerät. Eine Übertragung erfolgt ausschließlich an die von Ihnen in den Einstellungen konfigurierte Wavelog-Instanz. Es gibt keine Telemetrie, keine Nutzungsstatistiken und keine Analyse-SDKs.`,
      close: 'Schließen',
    },
  },
}
