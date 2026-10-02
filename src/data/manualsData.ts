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
Tideline queries your station profiles from Wavelog. Select your primary portable station profile (e.g. \`Portable /P\`, \`SOTA Mountain\`, or \`Home Shack\`). All logged QSOs will inherit this station ID.`,
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
4. **Instant Commit:** Hit Enter or tap **Log Contact**. The contact is saved immediately to the encrypted SQLite database and timestamped in UTC.

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
Tideline lädt deine Stationsprofile von Wavelog. Wähle dein gewünschtes Profil für Portabeleinsätze aus (z.B. \`/P Portabel\`, \`SOTA Bergfunk\` oder \`Home Shack\`).`,
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
4. **Speichern:** Drücke Enter oder tippe auf **QSO loggen**. Der Kontakt wird sofort lokal verschlüsselt gespeichert und mit UTC-Zeit versehen.

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
]
