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
      badge: 'Open Source · Cross-Platform · Wavelog API v2 · v0.6.0',
      titleLine1: 'Logging in the wild.',
      titleLine2: 'Synced when you are home.',
      description:
        'Tideline is an offline-first amateur radio QSO logger for iOS, iPadOS, Android, macOS, Windows and Linux. Built for summits, parks, field days, and contests — reliably synced to your own Wavelog instance whenever you reconnect.',
      ctaPrimary: 'Explore v0.6.0 on GitHub',
      ctaSecondary: 'Read the Manual',
      ctaRoadmap: 'View Roadmap',
      statusNote: 'Status: Version 0.6.0 released. Includes built-in offline demo mode, smart sync debouncing, Fast Log Entry, SOTA/POTA activations, and hardware-secured privacy.',
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
      modeStandard: 'Standard Form',
      modeFle: 'Fast Log Entry (FLE)',
      fleHint: 'Type shorthand: e.g. 14.285 DL1XYZ 59 59 @Hans #K-1234',
      fleApply: 'Commit FLE Batch',
      notesLabel: 'Offline Notes',
    },
    fieldModes: {
      sectionBadge: 'Ergonomics in the Wild',
      title: 'One-Switch Field Mode & Four Display Themes',
      subtitle:
        'From high noon in an alpine meadow to midnight in a contest tent: Settings → Field mode instantly engages Sunlight contrast, 64dp glove mode, screen wake-lock, and battery saver.',
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
        desc: 'DXCC prefixes, Fast Log Entry (SimpleFLE shorthand), offline demo mode, and local callsign directory with private notes execute locally in milliseconds from on-device databases.',
        tag: 'Instant Responsiveness',
      },
      card2: {
        title: 'Sync You Can Trust & Multi-Account',
        desc: 'Every QSO reports its exact state: local, queued, uploading, synced, or conflict. Features smart sync debouncing, automatic backoff, and multi-account support.',
        tag: 'Zero Data Loss',
      },
      card3: {
        title: 'SOTA, POTA & WWFF Activations',
        desc: 'Download official reference lists directly to your device. Search by reference, name, or distance to your grid square, with live progress tracking toward activation validity.',
        tag: 'Summit & Park Ready',
      },
      card4: {
        title: 'Contest Mode & Field Ergonomics',
        desc: 'Keyboard-first fast entry, non-repeating serial allocator, dupe rules, Super Check Partial (MASTER.SCP), Cabrillo export, and one-switch field mode with battery saver.',
        tag: 'Competition Tested',
      },
      crossPlatform: {
        title: 'One Clean Codebase, Six Desktop & Mobile Targets',
        desc: 'Crafted in Flutter with a clean layered architecture for iOS, iPadOS, Android, macOS, Windows, and Linux.',
      },
    },
    syncEngine: {
      sectionBadge: 'Wavelog v2 Integration',
      title: 'How Tideline Syncs with Your Wavelog',
      subtitle:
        'Tideline connects to your self-hosted Wavelog instance through its official API v2, using least-privilege tokens and smart idempotency checks.',
      step1Title: '1. In the Field (Completely Offline)',
      step1Desc:
        'QSOs are written to the local SQLite journal protected by OS hardware encryption, with UUIDs, UTC timestamps, and initial status "local" or "queued".',
      step2Title: '2. Connection Regained (Smart Debounced Sync)',
      step2Desc:
        'When network returns, Tideline debounces rapid connection changes and runs a lightweight reachability probe, checking contacts against Wavelog.',
      step3Title: '3. Resumable Batch Push',
      step3Desc:
        'Batches upload transparently. The signature Tide Gauge recedes as server acknowledgments confirm each QSO. Any server rejection is explained in plain English.',
    },
    roadmap: {
      sectionBadge: 'Development Milestones',
      title: 'From Concept to Version 0.6.0 & Beyond',
      subtitle:
        'Tideline follows a phased, test-driven roadmap. Every milestone is validated against automated mock server test suites.',
      m1: {
        version: 'M1: Foundation',
        status: 'Completed',
        desc: 'Repository setup, domain entities, ADIF 3.1 parser, mock server, secure storage adapters.',
      },
      m2: {
        version: 'M2: MVP (v0.1)',
        status: 'Completed',
        desc: 'Core QSO logging, transparent sync queue & journal, offline DXCC lookups, ADIF export/import, encrypted backups, EN/DE localization.',
      },
      m3: {
        version: 'M3: Contest Mode (v0.2)',
        status: 'Completed',
        desc: 'Keyboard-first fast entry, non-repeating serial allocator, dupe rules, Super Check Partial (MASTER.SCP), Cabrillo export, Wavelog contest sessions.',
      },
      m4: {
        version: 'M4: Activations (v0.3)',
        status: 'Completed',
        desc: 'SOTA, POTA, and WWFF activation sessions with offline reference packs, distance search, and live QSO-to-validity trackers.',
      },
      m5: {
        version: 'M5: FLE, Field Mode & Multi-Account (v0.4.0)',
        status: 'Completed',
        desc: 'Fast Log Entry (FLE) shorthand parsing, one-switch field mode with battery saver, multiple Wavelog accounts, callsign directory, and desktop navigation.',
      },
      m6: {
        version: 'M6: In-App Demo & Architecture (v0.6.0)',
        status: 'Released (v0.6.0)',
        desc: 'Zero-config offline demo mode, automated multi-platform release pipelines, smart sync debouncing/throttling, and streamlined OS-hardware secure storage (ADR 0034).',
      },
      v1: {
        version: 'v1.0: Store Listings & Public Launch',
        status: 'In Preparation',
        desc: 'Final polishes, Google Play Store and Apple App Store public releases, and community documentation.',
      },
    },
    manuals: {
      sectionBadge: 'Documentation Hub',
      title: 'Official Guides & Documentation',
      subtitle:
        'Explore the comprehensive manuals bundled directly with Tideline. Learn how to set up your API token, log offline, activate parks, and run contests.',
      readFullButton: 'View Full Guide on GitHub',
    },
    download: {
      title: 'Download Tideline v0.6.0',
      subtitle:
        'Tideline 0.6.0 is available now. Download standalone packages for Windows and Linux on GitHub, join the iOS and macOS TestFlight beta, or test the Android build via Google Play.',
      btnGithub: 'GitHub Releases (Windows & Linux)',
      btnWavelog: 'About Wavelog.org',
      starLabel: 'Star on GitHub',
      testflightNote: 'Requires the free TestFlight app from Apple.',
      testingNotice: 'Public testing releases · Official store versions follow with v1.0',
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
E-Mail: {{EMAIL}}
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
Die Tideline-App speichert alle Log-Daten lokal auf Ihrem Gerät (geschützt durch die Hardware-Verschlüsselung Ihres Betriebssystems und den Hardware-Schlüsselspeicher). Eine Übertragung erfolgt ausschließlich an die von Ihnen in den Einstellungen konfigurierte Wavelog-Instanz. Es gibt keine Telemetrie, keine Nutzungsstatistiken und keine Analyse-SDKs.`,
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
      badge: 'Open Source · Plattformübergreifend · Wavelog API v2 · v0.6.0',
      titleLine1: 'Funken im Gelände.',
      titleLine2: 'Synchronisiert zu Hause.',
      description:
        'Tideline ist ein Offline-first Amateurfunk-QSO-Logger für iOS, iPadOS, Android, macOS, Windows und Linux. Entwickelt für Berggipfel, Parks, Fielddays und Contests – zuverlässig mit deiner eigenen Wavelog-Instanz synchronisiert, sobald du wieder Empfang hast.',
      ctaPrimary: 'v0.6.0 auf GitHub ansehen',
      ctaSecondary: 'Handbuch lesen',
      ctaRoadmap: 'Roadmap ansehen',
      statusNote: 'Status: Version 0.6.0 veröffentlicht. Enthält integrierten Offline-Demomodus, intelligentes Sync-Debouncing, Fast Log Entry, SOTA/POTA-Aktivierungen und hardwarebasierte Sicherheit.',
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
      modeStandard: 'Standard-Formular',
      modeFle: 'Fast Log Entry (FLE)',
      fleHint: 'Kurzschrift eingeben: z.B. 14.285 DL1XYZ 59 59 @Hans #DL-0042',
      fleApply: 'FLE-Batch speichern',
      notesLabel: 'Lokale Notiz',
    },
    fieldModes: {
      sectionBadge: 'Ergonomie im Praxiseinsatz',
      title: '1-Klick-Feldmodus & Vier Display-Themen',
      subtitle:
        'Von grellem Sonnenlicht auf der Alm bis zur stockdunklen Nacht im Contest-Zelt: Einstellungen → Feldmodus aktiviert sofort Sonnenlicht-Kontrast, 64dp-Handschuh-Modus, Display-Aktivhaltung und Batteriesparer.',
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
        desc: 'DXCC-Präfixe, Fast Log Entry (SimpleFLE Kurzschrift), Offline-Demomodus und das lokale Rufzeichenverzeichnis mit Notizen laufen 100% lokal auf dem Gerät.',
        tag: 'Verzögerungsfrei',
      },
      card2: {
        title: 'Synchronisation & Multi-Account',
        desc: 'Jedes QSO zeigt seinen exakten Status: lokal, wartend, sendend, synchronisiert oder Konflikt. Intelligentes Sync-Debouncing, automatischer Backoff und Multi-Account-Unterstützung.',
        tag: 'Kein Datenverlust',
      },
      card3: {
        title: 'SOTA, POTA & WWFF Aktivierungen',
        desc: 'Lade offizielle Referenzlisten direkt auf dein Gerät. Suche nach Referenz, Name oder Entfernung zu deinem Locator mit Fortschrittsanzeige zur Gültigkeit.',
        tag: 'Berg- & Parkfunk',
      },
      card4: {
        title: 'Contest-Modus & Feldergonomie',
        desc: 'Tastatur-orientierte Schnelleingabe, lückenlose Seriennummern, Dupe-Prüfung, Super Check Partial (MASTER.SCP), Cabrillo-Export und 1-Klick-Feldmodus.',
        tag: 'Wettkampferprobt',
      },
      crossPlatform: {
        title: 'Eine Codebasis für sechs Desktop- und Mobil-Plattformen',
        desc: 'Entwickelt mit Flutter für iOS, iPadOS, Android, macOS, Windows und Linux in sauber getrennter Schichtenarchitektur.',
      },
    },
    syncEngine: {
      sectionBadge: 'Wavelog v2 Schnittstelle',
      title: 'So synchronisiert Tideline mit deinem Wavelog',
      subtitle:
        'Tideline verbindet sich über die moderne API v2 mit deiner selbst gehosteten Wavelog-Instanz – mit sicheren Rechten und intelligenter Duplikaterkennung.',
      step1Title: '1. Im Gelände (Komplett Offline)',
      step1Desc:
        'QSOs werden sofort in die durch Hardware-Verschlüsselung des Betriebssystems geschützte lokale SQLite-Datenbank mit UUID und UTC-Zeitstempel eingetragen und als "lokal" bzw. "in Warteschlange" markiert.',
      step2Title: '2. Wieder online (Smartes Debounced Sync)',
      step2Desc:
        'Sobald wieder Netz vorhanden ist, entprellt Tideline Verbindungswechsel, führt eine leichte Erreichbarkeits-Probe aus und gleicht Duplikate mit Wavelog ab.',
      step3Title: '3. Unterbrechungsfreier Batch-Upload',
      step3Desc:
        'QSOs werden im Hintergrund hochgeladen. Der Wasserpegel der Tide Gauge sinkt, sobald der Server bestätigt. Mögliche Konflikte werden in Klartext erklärt.',
    },
    roadmap: {
      sectionBadge: 'Entwicklungsfahrplan',
      title: 'Von der Idee zur Version 0.6.0 & Zukunft',
      subtitle:
        'Tideline wird in klar definierten, testgetriebenen Phasen entwickelt. Jeder Meilenstein wird automatisiert gegen Mock-Server geprüft.',
      m1: {
        version: 'M1: Fundament',
        status: 'Abgeschlossen',
        desc: 'Repository-Struktur, Domänenmodelle, ADIF 3.1 Parser, Mock-Server, sichere Speicheradapter.',
      },
      m2: {
        version: 'M2: MVP (v0.1)',
        status: 'Abgeschlossen',
        desc: 'QSO-Logging, transparente Sync-Warteschlange mit Journal, Offline-DXCC, ADIF Export/Import, verschlüsseltes Backup, DE/EN Lokalisierung.',
      },
      m3: {
        version: 'M3: Contest-Modus (v0.2)',
        status: 'Abgeschlossen',
        desc: 'Tastatur-orientierte Schnelleingabe, lückenlose Seriennummern, Dupe-Prüfung, Super Check Partial (MASTER.SCP), Cabrillo-Export, Wavelog-Sessions.',
      },
      m4: {
        version: 'M4: Aktivierungen (v0.3)',
        status: 'Abgeschlossen',
        desc: 'SOTA, POTA und WWFF Aktivierungssitzungen mit Offline-Referenzdaten, Entfernungssuche und Fortschrittsanzeige zur Gültigkeit.',
      },
      m5: {
        version: 'M5: FLE, Feldmodus & Multi-Account (v0.4.0)',
        status: 'Abgeschlossen',
        desc: 'Fast Log Entry (FLE) Kurzschrift, 1-Klick-Feldmodus mit Batteriesparer, Multi-Wavelog-Konten, Rufzeichenverzeichnis und Desktop-Navigation.',
      },
      m6: {
        version: 'M6: In-App Demo & Architektur (v0.6.0)',
        status: 'Veröffentlicht (v0.6.0)',
        desc: 'Sofort startbarer Offline-Demomodus ohne Wavelog-Server, automatisierte Multi-Plattform-Release-Pipelines, smartes Sync-Debouncing und schlanke Hardware-Sicherheitsarchitektur (ADR 0034).',
      },
      v1: {
        version: 'v1.0: Store-Veröffentlichung & Public Launch',
        status: 'In Vorbereitung',
        desc: 'Letzte Feinabstimmungen, Veröffentlichung im Google Play Store und Apple App Store sowie Community-Dokumentation.',
      },
    },
    manuals: {
      sectionBadge: 'Handbuch & Anleitungen',
      title: 'Offizielle Dokumentation direkt im Web',
      subtitle:
        'Lies die detaillierten Anleitungen von Tideline: Ersteinrichtung, Wavelog API-Token, Offline-Logging, FLE, SOTA/POTA und Tastenkombinationen.',
      readFullButton: 'Vollständiges Dokument auf GitHub ansehen',
    },
    download: {
      title: 'Tideline v0.6.0 herunterladen',
      subtitle:
        'Tideline 0.6.0 ist jetzt verfügbar. Lade Standalone-Pakete für Windows und Linux von GitHub herunter, teste die iOS- und macOS-Beta via TestFlight oder Android via Google Play.',
      btnGithub: 'GitHub Releases (Windows & Linux)',
      btnWavelog: 'Mehr über Wavelog.org',
      starLabel: 'Stern auf GitHub vergeben',
      testflightNote: 'Erfordert die kostenlose TestFlight-App von Apple.',
      testingNotice: 'Öffentliche Testversionen · Reguläre Store-Releases folgen mit v1.0',
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
E-Mail: {{EMAIL}}
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
Die Tideline-App speichert alle Log-Daten lokal auf Ihrem Gerät (geschützt durch die Hardware-Verschlüsselung Ihres Betriebssystems und den Hardware-Schlüsselspeicher). Eine Übertragung erfolgt ausschließlich an die von Ihnen in den Einstellungen konfigurierte Wavelog-Instanz. Es gibt keine Telemetrie, keine Nutzungsstatistiken und keine Analyse-SDKs.`,
      close: 'Schließen',
    },
  },
}
