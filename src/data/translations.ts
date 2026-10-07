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
      privacyContent: `1. Privacy at a Glance

General Information
The following notes provide a simple overview of what happens to your personal data when you visit this website or use the Tideline application. Personal data is any data that can be used to identify you personally.

Data Controller (Verantwortliche Stelle)
The controller responsible for data processing on this website and in the Tideline app pursuant to the General Data Protection Regulation (GDPR / DSGVO) is:

Jörg Holzapfel (DO1HOZ)
Email: {{EMAIL}}
Website: https://tideline.holzapfel-online.de
(Please refer to the Impressum / Legal Notice on this website for further details.)


2. Web Hosting & Infrastructure (Website)

Hosting with STRATO
This website is hosted on servers of STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, Germany (hereinafter: "STRATO").
When you access this website, STRATO automatically collects technical data in server log files. For details, please consult STRATO's privacy policy: https://www.strato.de/datenschutz/.

The use of STRATO is based on Art. 6(1)(f) GDPR. We have a legitimate interest in the technically secure, rapid, and reliable provision of our website.

Data Processing Agreement (AVV)
We have concluded a Data Processing Agreement (Auftragsverarbeitungsvertrag, AVV) pursuant to Art. 28 GDPR with STRATO. This contract ensures that STRATO processes personal data of our visitors strictly in accordance with our instructions and in full compliance with the GDPR.

Server Log Files
The hosting provider automatically collects and stores technical information in server log files that your browser transmits automatically:
• Browser type and browser version
• Operating system used
• Referrer URL (previously visited page)
• Hostname of the accessing device
• Time of the server request
• IP address (anonymized by the hosting provider)

This data is not combined with other data sources. Data processing is based on Art. 6(1)(f) GDPR (legitimate interest in the error-free delivery, security, and stability of the web service).


3. Data Collection on this Website

No Cookies and No Analytics
This website uses no cookies, no tracking pixels, and no web analytics tools (such as Google Analytics or Matomo).

No Third-Party CDNs or External Fonts
All fonts, icons, and stylesheets are bundled and hosted locally on our web server. No connections to external third-party services (such as Google Fonts or external CDN providers) are established when visiting this website.

Contact via Email
If you contact us via email, your message including the personal data you provide (such as your name, email address, and inquiry content) is stored and processed for the purpose of handling your inquiry and potential follow-up questions. We do not transfer this data to third parties without your consent.

The legal basis for processing is Art. 6(1)(b) GDPR if your inquiry is related to a contract or pre-contractual measures, and Art. 6(1)(f) GDPR (legitimate interest in processing user inquiries) in all other cases.

Data will be retained until the purpose for storage ceases to apply (e.g. inquiry resolved) or you request deletion, unless statutory retention requirements apply.

SSL / TLS Encryption
For security reasons and to protect the transmission of data, this website uses SSL/TLS encryption. You can identify an encrypted connection by the "https://" prefix and the lock icon in your browser address bar.


4. Data Protection in the "Tideline" App

Offline-First Local Storage
Tideline is an offline-first logging application for amateur radio operators:
• All entered QSO records, callsigns, signal reports, frequencies, modes, timestamps, locators, and notes are stored strictly locally in an encrypted database on your device.
• Sensitive credentials (such as API tokens for your Wavelog instance) are protected using your device operating system's hardware-backed credential storage (iOS Keychain, Android Keystore, Windows Credential Locker, macOS Keychain).
• The maintainer of Tideline has no access to your logs, QSOs, or account credentials.

Direct Synchronization with Wavelog
When you configure and trigger synchronization, Tideline connects directly and exclusively between your client device and your chosen Wavelog server via the official Wavelog API v2:
• Tideline does not operate intermediary relay servers, proxies, or central cloud sync services.
• Data transmission is governed by the security configuration and privacy terms of your specific Wavelog host.

No Telemetry, No Analytics, No Ads
The Tideline application contains:
• No tracking or usage analytics SDKs (e.g. no Google Analytics, Firebase, or similar)
• No third-party crash reporting SDKs
• No advertising libraries or marketing trackers
• No background telemetry

App Permissions
The app requests only permissions necessary for its intended features:
• Internet access: Exclusively to communicate directly with your configured Wavelog instance.
• Location (optional): If you choose to enable GPS location to calculate your Maidenhead grid locator, the coordinates are processed solely in volatile local memory on-device and never transmitted to external servers.

App Stores & Distribution
Tideline is distributed via Apple App Store / TestFlight (Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA) and Google Play Store (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). When downloading or updating the application, the respective store provider processes your account and device telemetry according to their own privacy policies (Apple: https://www.apple.com/legal/privacy/ | Google: https://policies.google.com/privacy).


5. Your Rights as a Data Subject (GDPR)

Under the GDPR, you have the following rights at any time regarding your personal data:
• Right of Access (Art. 15 GDPR): Free information about your stored personal data, origin, recipient, and purpose.
• Right to Rectification (Art. 16 GDPR): Immediate correction or completion of inaccurate data.
• Right to Erasure (Art. 17 GDPR): Deletion of stored data unless statutory retention obligations apply.
• Right to Restriction of Processing (Art. 18 GDPR): Restriction of data processing under statutory conditions.
• Right to Data Portability (Art. 20 GDPR): Delivery of your data in a structured, commonly used, and machine-readable format.
• Right to Object (Art. 21 GDPR): Right to object at any time to processing based on Art. 6(1)(e) or (f) GDPR on grounds relating to your particular situation.
• Right to Lodge a Complaint (Art. 77 GDPR): Right to lodge a complaint with a competent data protection supervisory authority.

To exercise your rights, please contact the controller using the email address indicated above.`,
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
      privacyContent: `1. Datenschutz auf einen Blick

Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder die mobile/Desktop-App „Tideline“ nutzen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.

Verantwortliche Stelle
Verantwortlich für die Datenverarbeitung auf dieser Website und in der App im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

Jörg Holzapfel (DO1HOZ)
E-Mail: {{EMAIL}}
Website: https://tideline.holzapfel-online.de
(Vollständige Angaben entnehmen Sie bitte dem Impressum dieser Website.)


2. Webhosting & Infrastruktur (Website)

Hosting bei STRATO
Wir hosten unsere Website bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend: „STRATO“).
Wenn Sie unsere Website besuchen, erfasst STRATO technische Daten in Server-Log-Dateien, inklusive Ihrer IP-Adresse. Weitere Details entnehmen Sie der Datenschutzerklärung von STRATO unter: https://www.strato.de/datenschutz/.

Die Nutzung von STRATO erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer technisch sicheren, schnellen und zuverlässigen Bereitstellung unserer Website.

Auftragsverarbeitung (AVV)
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO mit STRATO geschlossen. Dies ist ein gesetzlich vorgeschriebener Vertrag, der garantiert, dass STRATO die personenbezogenen Daten unserer Webseitenbesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.

Server-Log-Dateien
Der Provider der Seiten (STRATO) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
• Browsertyp und Browserversion
• Verwendetes Betriebssystem
• Referrer URL (die zuvor besuchte Seite)
• Hostname des zugreifenden Rechners
• Uhrzeit der Serveranfrage
• IP-Adresse (in anonymisierter Form durch den Hoster)

Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Systemsicherheit).


3. Datenerfassung auf dieser Website

Keine Cookies und keine Analyse-Tools
Diese Website verwendet weder Cookies noch Tracking-Pixel oder Web-Analyse-Tools (wie Google Analytics oder Matomo).

Keine externen Web-Fonts oder CDNs
Alle Schriftarten, Icons und Stylesheets sind lokal auf unserem Server bzw. im Anwendungspaket eingebunden. Es werden keine Verbindungen zu externen Servern Dritter (wie Google Fonts oder externen CDN-Diensten) hergestellt.

Kontaktaufnahme per E-Mail
Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse, Inhalt der Nachricht) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).

Die von Ihnen per E-Mail übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Gesetzliche Aufbewahrungsfristen bleiben unberührt.

SSL- bzw. TLS-Verschlüsselung
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an dem Präfix „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.


4. Datenschutz in der App „Tideline“

Lokale Datenspeicherung (Offline-First)
Die App „Tideline“ ist ein Offline-First-Logging-Programm für Funkamateure:
• Sämtliche erfassten QSO-Daten, Rufzeichen, Rapporte, Frequenzen, Betriebsarten, Zeitstempel, Grid-Locators und Notizen werden ausschließlich lokal in einer verschlüsselten Datenbank auf Ihrem Endgerät gespeichert.
• Sensible Zugangsdaten (wie API-Tokens für Ihre Wavelog-Instanz) werden sicher im Hardware-Schlüsselspeicher Ihres Betriebssystems abgelegt (iOS Keychain, Android Keystore, Windows Credential Locker, macOS Keychain).
• Der Betreiber von Tideline hat zu keinem Zeitpunkt Zugriff auf Ihre lokalen Logbuchdaten oder Zugangsdaten.

Direkte Synchronisation mit Wavelog
Wenn Sie die Synchronisationsfunktion nutzen, verbindet sich die Tideline-App ausschließlich und direkt zwischen Ihrem Endgerät und dem von Ihnen konfigurierten Wavelog-Server über die Wavelog API v2:
• Tideline betreibt keine zwischengeschalteten Relay-, Proxy- oder Cloud-Synchronisationsserver.
• Die Datenübertragung unterliegt den Datenschutzbestimmungen und Sicherheitsmaßnahmen der von Ihnen gewählten Wavelog-Instanz.

Keine Telemetrie, keine Analyse-Tools, keine Werbung
Die Tideline-App enthält:
• Keine Tracking- oder Analyse-Frameworks (z. B. kein Google Analytics, kein Firebase)
• Keine Absturzberichts-Dienste (Crashlytics o. ä.) von Drittanbietern
• Keine Werbenetzwerke oder Werbe-SDKs
• Keine Telemetrie- oder Nutzungsstatistiken

App-Berechtigungen
Die App fordert ausschließlich Berechtigungen an, die für ihre Kernfunktionen zwingend notwendig sind:
• Netzwerkzugriff: Ausschließlich zur direkten Kommunikation mit Ihrer Wavelog-Instanz.
• Standort (optional): Sofern Sie die GPS-Standortermittlung zur automatischen Berechnung Ihres Maidenhead-Grid-Locators aktivieren, werden die Koordinaten rein flüchtig im lokalen Arbeitsspeicher Ihres Geräts verarbeitet und niemals an Dritte oder den Entwickler übertragen.

App-Stores & Vertrieb
Die App wird über den Apple App Store / TestFlight (Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA) und den Google Play Store (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) bereitgestellt. Beim Herunterladen der App verarbeiten die Plattformbetreiber personenbezogene Daten gemäß ihren eigenen Bestimmungen (Apple: https://www.apple.com/legal/privacy/ | Google: https://policies.google.com/privacy).


5. Ihre Rechte als betroffene Person (Betroffenenrechte)

Nach der Datenschutz-Grundverordnung (DSGVO) stehen Ihnen folgende Rechte zu:
• Recht auf Auskunft (Art. 15 DSGVO): Unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.
• Recht auf Berichtigung (Art. 16 DSGVO): Berichtigung unrichtiger oder Vervollständigung Ihrer Daten.
• Recht auf Löschung (Art. 17 DSGVO): Löschung Ihrer bei uns gespeicherten personenbezogenen Daten, soweit dem keine gesetzlichen Pflichten entgegenstehen.
• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Einschränkung der Verarbeitung Ihrer Daten im Rahmen der gesetzlichen Vorgaben.
• Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Bereitstellung Ihrer Daten in einem gängigen, maschinenlesbaren Format.
• Widerspruchsrecht (Art. 21 DSGVO): Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen, sofern diese auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht.
• Beschwerderecht (Art. 77 DSGVO): Recht auf Beschwerde bei einer zuständigen Datenschutz-Aufsichtsbehörde.

Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben angegebene verantwortliche Stelle.`,
      close: 'Schließen',
    },
  },
}
