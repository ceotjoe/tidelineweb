# Tideline Web (`tideline.holzapfel-online.de`)

The official modern, responsive, and dynamic homepage for **[Tideline — the offline logger for Wavelog](https://github.com/ceotjoe/tideline)**.

Designed to align directly with Tideline's **"Low Tide"** design system, featuring an interactive live QSO entry simulation, real-time Tide Gauge sync status, 4-mode field theme preview, bilingual documentation hub (EN/DE), and deployment configurations for `tideline.holzapfel-online.de`.

---

## 🌊 Key Features

- **"Low Tide" Visual Language:** Calm coastal aesthetic with soft sand (`#F6F1E7`), deep sea (`#0F1E22`), and seafoam teal accents (`#1F6F68` / `#7FD1C3`).
- **Interactive Live QSO Simulator:** Test-drive logging contacts with real-time on-device DXCC prefix detection (e.g. `DL1XYZ`, `K1TTT`, `EA3ABC`) and simulated Wavelog v2 background sync cycle.
- **Tide Gauge Indicator:** Visual sync bar demonstrating how queued contacts upload and settle into synchronized state.
- **Four Dedicated Field Modes:**
  - **Low Tide (Light):** Daytime indoor & shaded portable logging.
  - **Deep Sea (Dark):** Restful nighttime shack logging.
  - **High Sunlight:** High-contrast monochrome (≥ 7:1) engineered for direct alpine/beach glare.
  - **Night Red:** Monochromatic deep red (`#FF4433`) preserving rod-cell dark adaptation for astronomical field days.
- **Embedded Documentation Hub:** Integrated search and viewing for the official manuals (_First Setup_, _API Token & Scopes_, _Logging Offline_, _Sync & Conflicts_, _Keyboard Shortcuts_).
- **Bilingual (EN / DE):** Full language switcher matching the app's localized UI and documentation.
- **German Legal Compliance:** Impressum and Privacy Policy (Datenschutzerklärung) compliant with German web hosting standards.

---

## 🛠 Local Development

### Requirements

- **Node.js** v18+ (tested with v25)
- **npm** or **pnpm**

### Commands

```bash
# Install dependencies
npm install

# Start local development server with Hot Module Replacement (HMR)
npm run dev

# Run TypeScript type check and compile production bundle into dist/
npm run build

# Preview production build locally
npm run preview

# Run Prettier code formatter
npm run format
```

---

## 🚀 Deployment on `tideline.holzapfel-online.de`

The build output is a static single-page application located in `dist/`.

### Option A: Standard Nginx Virtual Host

1. Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/tideline.holzapfel-online.de`.
2. Symlink to `/etc/nginx/sites-enabled/`.
3. Copy the compiled `dist/` folder contents to `/var/www/tideline.holzapfel-online.de`.
4. Run `certbot --nginx -d tideline.holzapfel-online.de` to provision SSL.
5. Reload Nginx: `systemctl reload nginx`.

### Option B: Caddy

1. Use `deploy/Caddyfile` for automated HTTPS provisioning.
2. Run `caddy reload`.

### Option C: Docker

```bash
docker compose -f deploy/docker-compose.yml up -d --build
```

### Option D: GitHub Actions CI/CD

Configure the following GitHub repository secrets:

- `DEPLOY_SSH_HOST` (e.g. server IP or hostname)
- `DEPLOY_SSH_USER` (e.g. `deploy` or `root`)
- `DEPLOY_SSH_KEY` (SSH private key)
- `DEPLOY_TARGET_DIR` (default: `/var/www/tideline.holzapfel-online.de`)

Every push to `main` will automatically build and deploy the updated site.

---

## 📄 License & Attribution

- **License:** MIT License.
- **App Repository:** [github.com/ceotjoe/tideline](https://github.com/ceotjoe/tideline)
- **Maintainer:** DO1HOZ / Jörg Holzapfel.
- **Wavelog:** Wavelog is an independent open-source project by Wavelog contributors.
