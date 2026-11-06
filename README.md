# Tideline-Webseite

Statische, zweisprachige Produktseite (DE/EN) für <https://tideline.holzapfel-online.de>.
Reines HTML/CSS/JS – keine Cookies, kein Tracking, keine externen Dienste, Schriften lokal.

## Dateien

| Pfad | Inhalt |
|---|---|
| `index.html` | Sprachwahl; leitet nach Browsersprache auf `/de/` oder `/en/` |
| `de/`, `en/` | Startseite, Impressum/Legal notice, Datenschutz/Privacy (fertiges HTML) |
| `assets/` | CSS, JS, Schriften (Atkinson Hyperlegible, OFL), Icon, OG-Bilder, offizielle Store-Badges |
| `data/links.json` | **Zentrale Links** (Stores, GitHub, Handbuch, Kontakt-E-Mail, Version) |
| `data/content.json` | Alle Texte DE/EN |
| `data/privacy.de.txt`, `privacy.en.txt` | Datenschutztexte (aus der bisherigen Seite) |
| `tools/build.py` | erzeugt alle HTML-Seiten, `sitemap.xml`, `robots.txt` |
| `tools/og.html`, `tools/icon.html` | Vorlagen für OG-Bild und Icons (Chrome headless) |
| `legacy/` | alte URLs (Store-Links), von `build.py` erzeugt |
| `.htaccess` | Rewrite für alte URLs, Sicherheits-Header (inkl. strenger CSP), Caching, Kompression |

## Links oder Texte ändern

1. `data/links.json` bzw. `data/content.json` bearbeiten.
2. `python3 tools/build.py` ausführen (nur Python 3, keine Pakete nötig).
3. Geänderte Dateien hochladen.

Neue Version: `version` in `links.json` anpassen und neu bauen.

## Veröffentlichen (automatisch)

Jeder Push auf `main` startet `.github/workflows/deploy.yml`: `tools/build.py` läuft, die auslieferbaren Dateien werden in `dist/` gesammelt und per `rsync --delete` über SSH auf den Apache-Webserver kopiert (Repo-Secrets `DEPLOY_SSH_HOST`, `DEPLOY_SSH_USER`, `DEPLOY_SSH_KEY`, `DEPLOY_TARGET_DIR`). Ein vorgeschalteter nginx arbeitet nur als Proxy. Manuell: Actions → *Deploy Tideline Homepage* → *Run workflow*.

Nach dem Deploy prüft der Workflow, dass die Store-Links antworten.

**Wichtig – nicht entfernen:** `/privacy`, `/imprint`, `/datenschutz` und `/impressum` sind in den App-Stores verlinkt und müssen weiter mit HTTP 200 (ohne Weiterleitung) antworten. Sie werden von `build.py` als `legacy/*.html` erzeugt (`LEGACY`) und per `.htaccess`-Rewrite ausgeliefert (kein Ordner `/privacy/`, sonst gäbe es eine 301-Weiterleitung); `/privacy` und `/imprint` zeigen die englischen Seiten.

## Lokal ansehen

```bash
python3 -m http.server 8099
```

Dann <http://localhost:8099/> öffnen (Pfade sind absolut ab Wurzel, daher kein Öffnen per Doppelklick).
