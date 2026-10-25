import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const indexHtmlPath = resolve(distDir, 'index.html')

const SITE_URL = 'https://tideline.holzapfel-online.de'

const STATIC_ROUTES = [
  {
    slug: 'privacy',
    canonical: `${SITE_URL}/privacy`,
    title: 'Privacy Policy — Tideline',
    description:
      'Privacy Policy (Datenschutzerklärung) for the Tideline website and the Tideline offline logger for Wavelog.',
  },
  {
    slug: 'datenschutz',
    canonical: `${SITE_URL}/privacy`,
    title: 'Datenschutzerklärung — Tideline',
    description:
      'Datenschutzerklärung (Privacy Policy) für die Website und die App Tideline — der Offline-Logger für Wavelog.',
  },
  {
    slug: 'imprint',
    canonical: `${SITE_URL}/imprint`,
    title: 'Imprint / Legal Notice — Tideline',
    description:
      'Imprint and Legal Notice (Impressum) for Tideline (tideline.holzapfel-online.de).',
  },
  {
    slug: 'impressum',
    canonical: `${SITE_URL}/imprint`,
    title: 'Impressum — Tideline',
    description: 'Impressum (Legal Notice) für Tideline (tideline.holzapfel-online.de).',
  },
]

function generateStaticRoutes() {
  if (!existsSync(indexHtmlPath)) {
    console.warn('[generate-static-routes] dist/index.html not found, skipping static routes.')
    return
  }

  const baseHtml = readFileSync(indexHtmlPath, 'utf-8')

  for (const route of STATIC_ROUTES) {
    let routeHtml = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${route.canonical}" />`
      )
      .replace(
        /<meta property="og:url" content="[^"]*"\s*\/?>/,
        `<meta property="og:url" content="${route.canonical}" />`
      )
      .replace(
        /<meta property="og:title" content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${route.title}" />`
      )
      .replace(
        /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
        `<meta name="twitter:url" content="${route.canonical}" />`
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
        `<meta name="twitter:title" content="${route.title}" />`
      )

    const routeDir = resolve(distDir, route.slug)
    mkdirSync(routeDir, { recursive: true })
    writeFileSync(resolve(routeDir, 'index.html'), routeHtml, 'utf-8')
  }

  console.log(
    `[generate-static-routes] Generated static entrypoints for: ${STATIC_ROUTES.map((r) => '/' + r.slug).join(', ')}`
  )
}

generateStaticRoutes()
