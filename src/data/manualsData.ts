export interface ManualItem {
  id: string
  title: string
  category: string
  summary: string
  content: string
}

export const MANUALS_EN: ManualItem[] = [
  {
    id: 'first-setup',
    title: 'First Setup & Connecting to Wavelog',
    category: 'Getting Started',
    summary: 'How to connect Tideline to your self-hosted Wavelog instance in under two minutes.',
    content: `### 1. Requirements
Before you begin, ensure you have:
- A running **Wavelog 3.1.0 or newer** installation with API v2 enabled.
- Your personal Wavelog base URL (e.g., \`https://log.example.org\`).
- An API v2 token generated from your Wavelog user profile.

### 2. Enter Your Wavelog Credentials
1. Open **Tideline** on your device.
2. If this is your first start, the Welcome Wizard greets you.
3. Enter your **Wavelog Server URL**. Tideline verifies the API endpoint over HTTPS.
4. Paste your **API v2 Token**.
5. Tap **Connect & Verify**.

### 3. Station Profile Selection
Tideline queries your station profiles from Wavelog. Select your primary portable station profile (e.g. \`Portable /P\`, \`SOTA Mountain\`, or \`Home Shack\`). All logged QSOs will inherit this station ID.

### No Wavelog Yet? Try Built-in Demo Mode
If you want to evaluate Tideline immediately without connecting to a live Wavelog server, tap **"Try the demo (no Wavelog needed)"** on the Welcome screen:
- Instantly provisions an isolated mock station profile (\`DL0DEMO\`) running 100% on-device.
- Zero network connection required.
- Explore standard logging, Fast Log Entry, contest mode, and SOTA/POTA activation workflows.
- Switch to your real Wavelog account anytime under **Settings → Wavelog accounts**.`,
  },
  {
    id: 'api-token',
    title: 'Wavelog API v2 Scopes & Security',
    category: 'Security',
    summary: 'Least-privilege API token scopes and cryptographic protection.',
    content: `### Token Security Principles
Tideline adheres strictly to least-privilege security:
- **Never commits or transmits credentials** to third parties.
- Tokens are stored exclusively in your operating system's **Hardware Secure Enclave / Keyring** (Apple Keychain, Android Keystore, Windows DPAPI).
- Tokens are never exposed in log files, unencrypted backups, or crash reports.

### Required Scopes
- \`qso:read\` — Needed to query existing contacts and avoid duplicate submissions.
- \`qso:write\` — Required to push offline contacts once connectivity is restored.
- \`station:read\` — Fetches available station profiles and location IDs.

### Optional Scopes
- \`contest:read\` & \`contest:write\` — Used for syncing contest sessions (Wavelog 3.2.0+).
- \`qso:delete\` — Propagates local deletions to Wavelog if desired.
- \`lookup:read\` — Allows online callsign lookups when a network connection is present.`,
  },
  {
    id: 'logging-offline',
    title: 'Logging Offline in the Field',
    category: 'Field Operations',
    summary: 'High-speed offline QSO logging on summits, parks, and field days.',
    content: `### Offline-First Workflow
When operating portable on a summit (SOTA), park (POTA), or field day:
1. **Enter Callsign:** Type the callsign (e.g., \`DL1ABC\`). Tideline instantly calculates the DXCC entity and ITU/CQ zone locally with zero latency.
2. **Frequency & Mode:** Select band and mode from one-tap quick chips or keyboard shortcuts.
3. **Signal Reports:** Sent and received RST default to 59 / 599 and can be adjusted with quick toggles.
4. **Instant Commit:** Hit Enter or tap **Log Contact**. The contact is saved immediately to the local SQLite journal (protected by OS hardware full-disk encryption) and timestamped in UTC.

### Automatic Worked-Before Detection
Tideline warns you instantly if you have already logged this station on the current band or mode, preventing accidental duplicate contacts during field activations.`,
  },
  {
    id: 'sync-and-conflicts',
    title: 'Sync Queue, Tide Gauge & Conflict Resolution',
    category: 'Synchronization',
    summary: 'Understand the tide gauge indicator and idempotent Wavelog sync.',
    content: `### The Tide Gauge Indicator
The wave graphic at the top of the app serves as your real-time **Tide Gauge**:
- **Low Tide:** All contacts are fully synchronized with your Wavelog server.
- **Rising Tide:** Unsynced contacts are waiting in the local queue.
- **Water Ripple:** Active synchronization is in progress.

### Sync States
- **Local:** Logged on device, waiting for connection.
- **Queued:** Scheduled for transmission.
- **Uploading:** Currently being sent over Wavelog API v2.
- **Synced:** Acknowledged by Wavelog.
- **Conflict:** Duplicate timestamp or conflicting station data detected.

### Conflict Resolution
Tideline never silently discards or overwrites QSOs. If the Wavelog server rejects a contact (e.g., duplicate contact logged via another device), Tideline highlights the conflict in the sync journal with a plain-language explanation, allowing you to review or resolve it.`,
  },
  {
    id: 'keyboard-shortcuts',
    title: 'Keyboard Shortcuts & Fast Entry',
    category: 'Ergonomics',
    summary: 'Keyboard-first logging optimized for laptops, iPads, and contest operators.',
    content: `### General Shortcuts
- **Enter / Return:** Commit and save the active QSO.
- **Tab / Shift+Tab:** Move focus smoothly between Callsign, RST Sent, and RST Rcvd fields.
- **Esc:** Clear current input and refocus Callsign.
- **Ctrl+F / Cmd+F:** Search local QSO log.
- **Ctrl+S / Cmd+S:** Force immediate sync reachability check.

### Band & Mode Hotkeys
- **Alt+1 to Alt+9:** Switch between favourite bands (160m to 10m).
- **Alt+C:** Switch to CW.
- **Alt+S:** Switch to SSB.
- **Alt+F:** Switch to FM / FT8.
- **Alt+T:** Open Field Theme picker (Light, Dark, Sunlight, Night Red).`,
  },
  {
    id: 'fast-log-entry',
    title: 'Fast Log Entry (FLE)',
    category: 'Field Operations',
    summary: 'Type many QSOs as SimpleFLE shorthand without touching the mouse.',
    content: `### What is Fast Log Entry?
Type QSOs as shorthand in the dialect of Wavelog's SimpleFLE: time fragments, band, mode, frequency, reports, locator, references (#K-1234), @name, date and time zone. Tideline previews how every line was interpreted, checks for duplicate times or calls, and commits them all in a single local database transaction.

### How to Access
- Open with the **lightning bolt** in the log header, or press **Ctrl/⌘ + Shift + F**.

### Example Syntax
\`\`\`
date 2026-10-05
20m ssb
1734 DL1ABC 59 59 JO62 @Anna
5 G4XYZ 59 57
40 F5ABC <good signal>
14.285 ssb #K-1234
1810 W1AW 59 59
\`\`\`

- **Time shorthand:** The first QSO needs full UTC time (1734). Subsequent contacts only need changed digits: 5 after 1734 means 17:35.
- Works 100% offline. Running activations automatically tag the logged QSOs.`,
  },
  {
    id: 'activations',
    title: 'SOTA, POTA & WWFF Activations',
    category: 'Field Operations',
    summary: 'Offline summit and park lists, distance lookup, and validity tracker.',
    content: `### Offline Reference Packs
Download official SOTA, POTA, and WWFF reference directories directly over HTTPS inside Tideline:
- **Search offline** by reference (e.g. DL/EW-001, K-1234, DLFF-0012), name, or region.
- **Find nearest references:** Tideline computes distance and bearing from your Maidenhead grid square.

### Live Activation Progress
- Live counter showing progress toward activation validity (e.g. 10 QSOs for SOTA, 10 for POTA).
- Park-to-park (P2P) and summit-to-summit (S2S) partner reference tracking.
- Retains both your own reference and hunter references across ADIF exports.`,
  },
  {
    id: 'contest-mode',
    title: 'Contest Mode & Cabrillo Export',
    category: 'Contests',
    summary: 'Keyboard-first fast entry, serial allocator, dupe rules, and MASTER.SCP.',
    content: `### Contest Features
- **Keyboard-first logging:** Tab or Space advances fields instantly; Enter logs the contact.
- **Serial Allocator:** Ensures serial numbers never repeat or jump, even across restarts.
- **Dupe Checking & Super Check Partial:** Real-time callsign matching against user-imported MASTER.SCP.
- **Live Rates & Multipliers:** View 10-minute and 60-minute QSO rates and active band multipliers.
- **Export & Sync:** Generate compliant Cabrillo logs and synchronize sessions with Wavelog 3.2.0+.`,
  },
  {
    id: 'field-mode',
    title: 'One-Switch Field Mode & Battery Saver',
    category: 'Ergonomics',
    summary: 'Maximize outdoor readability, glove targets, screen wake-lock, and battery life.',
    content: `### Instant Field Preparation
Under **Settings → Field mode**, a single toggle configures:
1. **Sunlight Theme:** Maximum monochrome contrast (≥ 7:1) for bright direct sunlight.
2. **Glove Mode:** Expands touch targets to 64dp with generous spacing.
3. **Keep Screen On:** Keeps display awake while the log, FLE, or contest screen is active.
4. **Battery Saver:** Freezes the tide animation, updates the clock once per minute, and slows rate recalculations to conserve battery in the field.

Each setting can also be toggled independently.`,
  },
  {
    id: 'accounts',
    title: 'Multiple Wavelog Accounts',
    category: 'Accounts & Sync',
    summary: 'Manage and switch between different Wavelog instances and operator profiles.',
    content: `### Multi-Account Management
Under **Settings → Wavelog accounts**, you can add, rename, or switch between multiple Wavelog instances or station credentials:
- Independent API tokens stored securely per account.
- Quick account switcher directly in the log screen header.
- Sync covers all configured accounts, with waiting queues tracked per account.`,
  },
]

export const MANUALS_DE: ManualItem[] = [
  {
    id: 'first-setup',
    title: 'Ersteinrichtung & Wavelog-Verbindung',
    category: 'Erste Schritte',
    summary: 'Wie du Tideline in unter zwei Minuten mit deiner Wavelog-Instanz verbindest.',
    content: `### 1. Voraussetzungen
Bevor du startest, stelle sicher, dass du hast:
- Eine aktive **Wavelog 3.1.0 oder neuere** Installation mit aktivierter API v2.
- Deine Wavelog-Basis-URL (z.B. \`https://log.example.org\`).
- Einen API v2 Token aus deinem Wavelog-Benutzerprofil.

### 2. Anmeldedaten eingeben
1. Öffne **Tideline** auf deinem Gerät.
2. Beim ersten Start führt dich der Einrichtungs-Assistent durch die Konfiguration.
3. Gib deine **Wavelog-Server-Adresse** ein. Tideline prüft die Erreichbarkeit über HTTPS.
4. Füge deinen **API v2 Token** ein.
5. Tippe auf **Verbindung testen**.

### 3. Stationsprofil auswählen
Tideline lädt deine Stationsprofile von Wavelog. Wähle dein gewünschtes Profil für Portabeleinsätze aus (z.B. \`/P Portabel\`, \`SOTA Bergfunk\` oder \`Home Shack\`).

### Noch kein Wavelog? Integrierter Demo-Modus
Wenn du Tideline sofort unverbindlich ausprobieren möchtest, ohne erst eine Wavelog-Instanz aufzusetzen, tippe im Startbildschirm einfach auf **"Demo ausprobieren (ohne Wavelog)"**:
- Richtet sofort eine isolierte Muster-Station (\`DL0DEMO\`) ein – 100% lokal auf deinem Gerät.
- Keinerlei Internetverbindung oder Server erforderlich.
- Teste alle Funktionen wie Standard-Logging, Fast Log Entry, Contest-Modus und SOTA/POTA-Aktivierungen.
- Jederzeit unter **Einstellungen → Wavelog-Accounts** auf ein echtes Wavelog-Konto umschaltbar.`,
  },
  {
    id: 'api-token',
    title: 'Wavelog API v2 Berechtigungen & Sicherheit',
    category: 'Sicherheit',
    summary: 'Minimale Token-Rechte und kryptografischer Schutz auf dem Gerät.',
    content: `### Sicherheitsgrundsätze
Tideline folgt dem Prinzip der minimalen Rechtevergabe (Least Privilege):
- **Keine Weitergabe von Anmeldedaten** an Dritte.
- API-Token werden ausschließlich im **Hardware-Schlüsselspeicher** deines Betriebssystems gesichert (Apple Keychain, Android Keystore, Windows DPAPI).
- Token tauchen niemals in Logdateien, unverschlüsselten Backups oder Fehlerberichten auf.

### Erforderliche Scopes
- \`qso:read\` — Zum Abgleich vorhandener Kontakte und Duplikatsvermeidung.
- \`qso:write\` — Zum Hochladen deiner erfassten Funkkontakte.
- \`station:read\` — Zum Auslesen verfügbarer Stationsprofile.

### Optionale Scopes
- \`contest:read\` & \`contest:write\` — Für Contest-Sitzungen (Wavelog 3.2.0+).
- \`qso:delete\` — Zum Weiterleiten lokaler Löschungen an Wavelog.
- \`lookup:read\` — Für optionale Online-Rufzeichenabfragen bei vorhandener Internetverbindung.`,
  },
  {
    id: 'logging-offline',
    title: 'Offline-Logging im Gelände',
    category: 'Feldeinsatz',
    summary: 'Blitzschnelles QSO-Logging auf Berggipfeln, in Parks und beim Fieldday.',
    content: `### Der Offline-Ablauf
Beim Portabelbetrieb auf dem Berg (SOTA), im Park (POTA) oder beim Fieldday:
1. **Rufzeichen eingeben:** Tippe das Rufzeichen ein (z.B. \`DL1ABC\`). Tideline ermittelt das DXCC-Land und die Zonen lokal in Millisekunden.
2. **Band & Modus:** Wähle Band und Betriebsart bequem über Touch-Chips oder Tastaturkürzel.
3. **Rapport:** Standardmäßig auf 59 / 599 voreingestellt, mit einem Fingertipp anpassbar.
4. **Speichern:** Drücke Enter oder tippe auf **QSO loggen**. Der Kontakt wird sofort im lokalen SQLite-Journal (geschützt durch Betriebssystem-Hardwareverschlüsselung) gespeichert und mit UTC-Zeit versehen.

### Automatische Duplikats-Erkennung
Tideline warnt dich sofort, wenn du diese Station bereits auf dem gleichen Band oder in derselben Betriebsart geloggt hast.`,
  },
  {
    id: 'sync-and-conflicts',
    title: 'Sync-Warteschlange & Tide Gauge',
    category: 'Synchronisation',
    summary: 'Die Gezeiten-Anzeige (Tide Gauge) und idempotenter Wavelog-Abgleich.',
    content: `### Die Tide Gauge (Gezeiten-Pegel)
Die Wellengrafik oben in der App visualisiert deinen Sync-Status wie den Meerespegel:
- **Ebbe:** Alle QSOs sind vollständig mit deinem Wavelog synchronisiert.
- **Flut / Steigendes Wasser:** Ungesendete Kontakte warten in der lokalen Warteschlange.
- **Wellenbewegung:** Die Synchronisation läuft aktiv im Hintergrund.

### Sync-Zustände
- **Lokal:** Auf dem Gerät erfasst, wartet auf Verbindung.
- **Warteschlange:** Für den nächsten Upload vorbereitet.
- **Lädt hoch:** Wird aktuell an Wavelog übertragen.
- **Synchronisiert:** Vom Server erfolgreich bestätigt.
- **Konflikt:** Zeitstempel oder Stationsdaten weichen ab.

### Konfliktbehandlung
Tideline verwirft niemals stillschweigend Kontakte. Lehnt der Server ein QSO ab, markiert Tideline den Konflikt im Journal mit einer verständlichen Erklärung.`,
  },
  {
    id: 'keyboard-shortcuts',
    title: 'Tastaturkürzel & Schnelleingabe',
    category: 'Ergonomie',
    summary: 'Tastatur-optimierte Bedienung für Notebooks, Tablets und Contest-Funker.',
    content: `### Allgemeine Kürzel
- **Enter:** Aktuelles QSO sofort speichern.
- **Tab / Umschalt+Tab:** Schnell zwischen Rufzeichen und Rapporten wechseln.
- **Esc:** Eingabefelder leeren und Fokus zurück auf Rufzeichen setzen.
- **Strg+F / Cmd+F:** Lokales Logbuch durchsuchen.
- **Strg+S / Cmd+S:** Sofortige Verbindungsprobe und Sync anstoßen.

### Band & Betriebsarten
- **Alt+1 bis Alt+9:** Schnellumschaltung zwischen Lieblingsbändern.
- **Alt+C:** CW aktivieren.
- **Alt+S:** SSB aktivieren.
- **Alt+T:** Feld-Design auswählen (Hell, Dunkel, Sonnenlicht, Nacht-Rot).`,
  },
  {
    id: 'fast-log-entry',
    title: 'Fast Log Entry (FLE)',
    category: 'Feldeinsatz',
    summary: 'Viele QSOs in SimpleFLE-Kurzschrift erfassen, ohne die Tastatur zu verlassen.',
    content: `### Was ist Fast Log Entry?
Erfasse QSOs blitzschnell als Kurztext im Dialekt von Wavelogs SimpleFLE: Zeitfragmente, Band, Betriebsart, Frequenz, Rapporte, Locator, Referenzen (#DL-0042), @Name, Datum und Zeitzone. Tideline zeigt eine Live-Vorschau der Interpretation, prüft auf Duplikate und speichert den gesamten Stapel in einer einzigen lokalen Transaktion.

### Aufruf
- Über das **Blitz-Symbol** in der oberen Leiste des Logbuchs oder mit **Strg/⌘ + Umschalt + F**.

### Syntax-Beispiel
\`\`\`
date 2026-10-05
20m ssb
1734 DL1ABC 59 59 JO62 @Anna
5 G4XYZ 59 57
40 F5ABC <gutes Signal>
14.285 ssb #DL-0042
1810 W1AW 59 59
\`\`\`

- **Zeit-Kurzschrift:** Nur das erste QSO benötigt die volle UTC-Zeit (1734). Danach genügen die geänderten Ziffern: 5 nach 1734 bedeutet 17:35.
- Funktioniert 100% offline. Laufende Aktivierungen übernehmen die erfassten QSOs automatisch.`,
  },
  {
    id: 'activations',
    title: 'SOTA, POTA & WWFF Aktivierungen',
    category: 'Feldeinsatz',
    summary: 'Offline-Gipfel- und Parklisten, Entfernungssuche und Aktivierungs-Fortschritt.',
    content: `### Offline-Referenzlisten
Lade offizielle Referenzdaten für SOTA, POTA und WWFF direkt und sicher über HTTPS in Tideline herunter:
- **Offline durchsuchen:** Nach Referenz (z.B. DL/EW-001, K-1234, DLFF-0012), Name oder Region.
- **Nächstgelegene Ziele:** Tideline berechnet Entfernung und Peilung ausgehend von deinem Maidenhead-Locator.

### Live-Gültigkeitsfortschritt
- Integrierter Zähler für die Mindest-QSO-Zahl zur Gültigkeit (z.B. 4/10 QSOs für SOTA, 10 für POTA).
- Park-to-Park (P2P) und Summit-to-Summit (S2S) Tracking.
- Speichert eigene und Partner-Referenzen zuverlässig für den ADIF-Export.`,
  },
  {
    id: 'contest-mode',
    title: 'Contest-Modus & Cabrillo-Export',
    category: 'Contest',
    summary: 'Tastatur-orientierte Schnelleingabe, Seriennummern, Dupe-Prüfung und MASTER.SCP.',
    content: `### Contest-Funktionen
- **Tastatur-Fokus:** Tab oder Leertaste springt durch die Felder, Enter loggt den Kontakt.
- **Seriennummern-Generator:** Garantiert lückenlose, nicht wiederholte Nummern auch nach Neustarts.
- **Dupe-Check & Super Check Partial:** Live-Prüfung gegen selbst importierte MASTER.SCP-Dateien.
- **Live-Raten & Multiplikatoren:** 10- und 60-Minuten-QSO-Raten und Band-Multiplikatoren auf einen Blick.
- **Export & Sync:** Erstelle Cabrillo-Dateien und synchronisiere Contest-Sessions mit Wavelog 3.2.0+.`,
  },
  {
    id: 'field-mode',
    title: '1-Klick-Feldmodus & Batteriesparer',
    category: 'Ergonomie',
    summary: 'Maximaler Kontrast, Handschuh-Touchziele, Display-Aktivhaltung und Batteriesparer.',
    content: `### Sofortige Feldbereitschaft
Unter **Einstellungen → Feldmodus** schaltet ein einziger Schalter:
1. **Sonnenlicht-Thema:** Kompromissloser Schwarz-Weiß-Kontrast (≥ 7:1) für direkte Bergsonne.
2. **Handschuh-Modus:** Vergrößerte 64dp Touch-Ziele mit weiten Abständen.
3. **Display aktiv halten:** Verhindert das Abschalten des Bildschirms beim Loggen.
4. **Batteriesparer:** Hält die Wellenanimation an, taktet die Uhr minütlich und schont den Akku.

Alle vier Einstellungen können auch individuell justiert werden.`,
  },
  {
    id: 'accounts',
    title: 'Mehrere Wavelog-Accounts',
    category: 'Konten & Sync',
    summary: 'Verwalte mehrere Wavelog-Instanzen und Rufzeichen-Profile parallel.',
    content: `### Multi-Account-Verwaltung
Unter **Einstellungen → Wavelog-Accounts** kannst du mehrere Wavelog-Server oder Benutzer anlegen:
- Unabhängig und sicher im Schlüsselspeicher abgelegte Token.
- Schnelle Konten-Umschaltung direkt in der Kopfzeile des Logbuchs.
- Synchronisation deckt alle Konten ab mit getrennter Warteschlangenanzeige.`,
  },
]
