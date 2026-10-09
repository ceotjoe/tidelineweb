import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const sitemapPath = resolve(rootDir, 'public', 'sitemap.xml')

const SITE_URL = 'https://tideline.holzapfel-online.de'

function getGitDate() {
  try {
    const output = execSync('git log -1 --format=%cs -- src index.html public', {
      cwd: rootDir,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()

    if (/^\d{4}-\d{2}-\d{2}$/.test(output)) {
      return output
    }
  } catch {
    // Git not available or not a git repository
  }

  // Fallback 1: Retain existing date from public/sitemap.xml if present
  if (existsSync(sitemapPath)) {
    try {
      const existing = readFileSync(sitemapPath, 'utf-8')
      const match = existing.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)
      if (match) {
        return match[1]
      }
    } catch {
      // Ignore read errors
    }
  }

  // Fallback 2: Today's date
  return new Date().toISOString().split('T')[0]
}

function generateSitemap() {
  const lastmod = getGitDate()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

  // Only write if file doesn't exist or content changed
  if (!existsSync(sitemapPath) || readFileSync(sitemapPath, 'utf-8') !== xml) {
    writeFileSync(sitemapPath, xml, 'utf-8')
    console.log(`[generate-sitemap] Generated public/sitemap.xml with lastmod: ${lastmod}`)
  } else {
    console.log(`[generate-sitemap] public/sitemap.xml is up to date (lastmod: ${lastmod})`)
  }
}

generateSitemap()
