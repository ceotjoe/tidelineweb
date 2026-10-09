import { execSync } from 'node:child_process'
import { existsSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const svgPath = resolve(rootDir, 'public', 'og-image.svg')
const pngPath = resolve(rootDir, 'public', 'og-image.png')

const OG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B171A" />
      <stop offset="50%" stop-color="#0F1E22" />
      <stop offset="100%" stop-color="#14282D" />
    </linearGradient>

    <!-- Radial Glows -->
    <radialGradient id="tealGlow" cx="20%" cy="45%" r="42%">
      <stop offset="0%" stop-color="#1F6F68" stop-opacity="0.45" />
      <stop offset="60%" stop-color="#1F6F68" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#1F6F68" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="topRightGlow" cx="85%" cy="15%" r="35%">
      <stop offset="0%" stop-color="#7FD1C3" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#7FD1C3" stop-opacity="0" />
    </radialGradient>

    <!-- Logo Drop Shadow -->
    <filter id="logoShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.65" />
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#1F6F68" flood-opacity="0.35" />
    </filter>

    <!-- Wave Gradients -->
    <linearGradient id="waveFrontGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1F6F68" />
      <stop offset="50%" stop-color="#247C74" />
      <stop offset="100%" stop-color="#1F6F68" />
    </linearGradient>

    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7FD1C3" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#1F6F68" stop-opacity="0.08" />
    </linearGradient>
  </defs>

  <!-- Base Canvas -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Outer Card Border (Subtle 1px inset) -->
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" />

  <!-- Ambient Glows -->
  <rect width="1200" height="630" fill="url(#tealGlow)" />
  <rect width="1200" height="630" fill="url(#topRightGlow)" />

  <!-- Subtle RF Concentric Rings in Background -->
  <g opacity="0.08" stroke="#7FD1C3" fill="none" stroke-width="1.5">
    <circle cx="210" cy="275" r="160" />
    <circle cx="210" cy="275" r="230" stroke-dasharray="6 6" />
    <circle cx="210" cy="275" r="310" />
    <circle cx="210" cy="275" r="400" stroke-dasharray="8 8" />
    <circle cx="210" cy="275" r="500" />
  </g>

  <!-- Coastal Waves (Bottom of Card) -->
  <g opacity="0.45">
    <path
      d="M0,520 C200,560 400,480 600,530 C800,580 1000,500 1200,540 L1200,630 L0,630 Z"
      fill="#16292E"
    />
  </g>
  <g opacity="0.7">
    <path
      d="M0,545 C250,510 500,570 750,535 C950,505 1100,550 1200,535 L1200,630 L0,630 Z"
      fill="#1E383D"
    />
  </g>
  <path
    d="M0,575 C300,550 600,595 900,565 C1050,550 1150,570 1200,560 L1200,630 L0,630 Z"
    fill="url(#waveFrontGrad)"
  />
  <path
    d="M0,575 C300,550 600,595 900,565 C1050,550 1150,570 1200,560"
    fill="none"
    stroke="#7FD1C3"
    stroke-width="2"
    opacity="0.8"
  />

  <!-- Main Left: Official App Icon (Tile size 230x230, x=95, y=160) -->
  <g transform="translate(95, 160)" filter="url(#logoShadow)">
    <svg width="230" height="230" viewBox="0 0 1024 1024">
      <rect width="1024" height="1024" rx="224" fill="#1F6F68" />
      <!-- Wave 1 -->
      <path
        d="M150.0 692.0 L154.0 694.1 L158.0 696.2 L162.0 698.2 L166.0 700.2 L170.0 702.2 L174.0 704.1 L178.0 706.0 L182.0 707.8 L186.0 709.5 L190.0 711.2 L194.0 712.7 L198.0 714.2 L202.0 715.5 L206.0 716.8 L210.0 717.9 L214.0 718.9 L218.0 719.7 L222.0 720.5 L226.0 721.1 L230.0 721.5 L234.0 721.8 L238.0 722.0 L242.0 722.0 L246.0 721.9 L250.0 721.6 L254.0 721.2 L258.0 720.6 L262.0 719.9 L266.0 719.1 L270.0 718.2 L274.0 717.1 L278.0 715.9 L282.0 714.5 L286.0 713.1 L290.0 711.6 L294.0 710.0 L298.0 708.3 L302.0 706.5 L306.0 704.6 L310.0 702.7 L314.0 700.7 L318.0 698.7 L322.0 696.7 L326.0 694.6 L330.0 692.5 L334.0 690.4 L338.0 688.4 L342.0 686.3 L346.0 684.3 L350.0 682.3 L354.0 680.3 L358.0 678.4 L362.0 676.6 L366.0 674.9 L370.0 673.2 L374.0 671.6 L378.0 670.2 L382.0 668.8 L386.0 667.5 L390.0 666.4 L394.0 665.4 L398.0 664.5 L402.0 663.7 L406.0 663.1 L410.0 662.6 L414.0 662.3 L418.0 662.1 L422.0 662.0 L426.0 662.1 L430.0 662.3 L434.0 662.7 L438.0 663.2 L442.0 663.9 L446.0 664.7 L450.0 665.6 L454.0 666.6 L458.0 667.8 L462.0 669.1 L466.0 670.5 L470.0 672.0 L474.0 673.6 L478.0 675.3 L482.0 677.1 L486.0 678.9 L490.0 680.8 L494.0 682.8 L498.0 684.8 L502.0 686.8 L506.0 688.9 L510.0 691.0 L514.0 693.0 L518.0 695.1 L522.0 697.2 L526.0 699.2 L530.0 701.2 L534.0 703.2 L538.0 705.1 L542.0 706.9 L546.0 708.7 L550.0 710.4 L554.0 712.0 L558.0 713.5 L562.0 714.9 L566.0 716.2 L570.0 717.4 L574.0 718.4 L578.0 719.3 L582.0 720.1 L586.0 720.8 L590.0 721.3 L594.0 721.7 L598.0 721.9 L602.0 722.0 L606.0 721.9 L610.0 721.7 L614.0 721.4 L618.0 720.9 L622.0 720.3 L626.0 719.5 L630.0 718.6 L634.0 717.6 L638.0 716.5 L642.0 715.2 L646.0 713.8 L650.0 712.4 L654.0 710.8 L658.0 709.1 L662.0 707.4 L666.0 705.6 L670.0 703.7 L674.0 701.7 L678.0 699.7 L682.0 697.7 L686.0 695.6 L690.0 693.6 L694.0 691.5 L698.0 689.4 L702.0 687.3 L706.0 685.3 L710.0 683.3 L714.0 681.3 L718.0 679.4 L722.0 677.5 L726.0 675.7 L730.0 674.0 L734.0 672.4 L738.0 670.9 L742.0 669.5 L746.0 668.1 L750.0 666.9 L754.0 665.8 L758.0 664.9 L762.0 664.1 L766.0 663.4 L770.0 662.8 L774.0 662.4 L778.0 662.1 L782.0 662.0 L786.0 662.0 L790.0 662.2 L794.0 662.5 L798.0 662.9 L802.0 663.5 L806.0 664.3 L810.0 665.1 L814.0 666.1 L818.0 667.2 L822.0 668.5 L826.0 669.8 L830.0 671.3 L834.0 672.8 L838.0 674.5 L842.0 676.2 L846.0 678.0 L850.0 679.9 L854.0 681.8 L858.0 683.8 L862.0 685.8 L866.0 687.8 L870.0 689.9 L874.0 692.0"
        fill="none"
        stroke="#9FD3C7"
        stroke-width="74"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Wave 2 -->
      <path
        d="M250.0 853.6 L254.0 853.2 L258.0 852.6 L262.0 851.9 L266.0 851.1 L270.0 850.2 L274.0 849.1 L278.0 847.9 L282.0 846.5 L286.0 845.1 L290.0 843.6 L294.0 842.0 L298.0 840.3 L302.0 838.5 L306.0 836.6 L310.0 834.7 L314.0 832.7 L318.0 830.7 L322.0 828.7 L326.0 826.6 L330.0 824.5 L334.0 822.4 L338.0 820.4 L342.0 818.3 L346.0 816.3 L350.0 814.3 L354.0 812.3 L358.0 810.4 L362.0 808.6 L366.0 806.9 L370.0 805.2 L374.0 803.6 L378.0 802.2 L382.0 800.8 L386.0 799.5 L390.0 798.4 L394.0 797.4 L398.0 796.5 L402.0 795.7 L406.0 795.1 L410.0 794.6 L414.0 794.3 L418.0 794.1 L422.0 794.0 L426.0 794.1 L430.0 794.3 L434.0 794.7 L438.0 795.2 L442.0 795.9 L446.0 796.7 L450.0 797.6 L454.0 798.6 L458.0 799.8 L462.0 801.1 L466.0 802.5 L470.0 804.0 L474.0 805.6 L478.0 807.3 L482.0 809.1 L486.0 810.9 L490.0 812.8 L494.0 814.8 L498.0 816.8 L502.0 818.8 L506.0 820.9 L510.0 823.0 L514.0 825.0 L518.0 827.1 L522.0 829.2 L526.0 831.2 L530.0 833.2 L534.0 835.2 L538.0 837.1 L542.0 838.9 L546.0 840.7 L550.0 842.4 L554.0 844.0 L558.0 845.5 L562.0 846.9 L566.0 848.2 L570.0 849.4 L574.0 850.4 L578.0 851.3 L582.0 852.1 L586.0 852.8 L590.0 853.3 L594.0 853.7 L598.0 853.9 L602.0 854.0 L606.0 853.9 L610.0 853.7 L614.0 853.4 L618.0 852.9 L622.0 852.3 L626.0 851.5 L630.0 850.6 L634.0 849.6 L638.0 848.5 L642.0 847.2 L646.0 845.8 L650.0 844.4 L654.0 842.8 L658.0 841.1 L662.0 839.4 L666.0 837.6 L670.0 835.7 L674.0 833.7 L678.0 831.7 L682.0 829.7 L686.0 827.6 L690.0 825.6 L694.0 823.5 L698.0 821.4 L702.0 819.3 L706.0 817.3 L710.0 815.3 L714.0 813.3 L718.0 811.4 L722.0 809.5 L726.0 807.7 L730.0 806.0 L734.0 804.4 L738.0 802.9 L742.0 801.5 L746.0 800.1 L750.0 798.9 L754.0 797.8 L758.0 796.9 L762.0 796.1 L766.0 795.4 L770.0 794.8 L774.0 794.4"
        fill="none"
        stroke="#9FD3C7"
        stroke-width="74"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Sun -->
      <path d="M380 580 A132 132 0 0 1 644 580 Z" fill="#FFFCF6" />
      <!-- Arcs -->
      <path d="M620.9 375.2 A232 232 0 0 1 737.1 523.9" fill="none" stroke="#FFFCF6" stroke-width="66" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M703.2 296.5 A342 342 0 0 1 837.3 474.3" fill="none" stroke="#FFFCF6" stroke-width="66" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M286.9 523.9 A232 232 0 0 1 403.1 375.2" fill="none" stroke="#FFFCF6" stroke-width="66" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M186.7 474.3 A342 342 0 0 1 320.8 296.5" fill="none" stroke="#FFFCF6" stroke-width="66" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </g>

  <!-- Right Content Block (starts x=370) -->
  <!-- Top Category Pill -->
  <g transform="translate(370, 110)">
    <rect width="272" height="34" rx="17" fill="#16292E" stroke="#7FD1C3" stroke-width="1.2" stroke-opacity="0.45" />
    <!-- Radio wave beacon icon -->
    <circle cx="20" cy="17" r="4" fill="#7FD1C3" />
    <path d="M20,9 A8,8 0 0 1 26,17" fill="none" stroke="#7FD1C3" stroke-width="1.5" stroke-linecap="round" opacity="0.8" />
    <text x="34" y="22" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="12" font-weight="700" fill="#7FD1C3" letter-spacing="1.4">AMATEUR RADIO · QSO LOGGER</text>
  </g>

  <!-- Title: Tideline -->
  <text x="370" y="214" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="66" font-weight="800" fill="#FFFCF6" letter-spacing="-1">Tideline</text>

  <!-- Tagline: The Offline Logger for Wavelog -->
  <text x="370" y="266" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#7FD1C3">The Offline Logger for Wavelog</text>

  <!-- Subtitle / Mission Statement -->
  <text x="370" y="316" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="19" font-weight="400" fill="#C2DCD7">
    <tspan x="370" dy="0">Offline-first QSO logging built for summits, parks, field days and contests.</tspan>
    <tspan x="370" dy="28">Seamless, journaled synchronization with your self-hosted Wavelog instance.</tspan>
  </text>

  <!-- Highlights / Feature Badges (Pills with Vector Icons) -->
  <g transform="translate(370, 395)">
    <!-- Badge 1: 100% Offline-First (Lightning bolt) -->
    <g transform="translate(0, 0)">
      <rect width="176" height="38" rx="12" fill="#14282D" stroke="#435E63" stroke-width="1.2" />
      <!-- Bolt icon -->
      <path d="M21 9 L13 21 L19 21 L17 29 L25 17 L19 17 Z" fill="#7FD1C3" />
      <text x="33" y="24" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#E8F1EF">100% Offline-First</text>
    </g>

    <!-- Badge 2: Journaled Sync (Sync arrows) -->
    <g transform="translate(188, 0)">
      <rect width="168" height="38" rx="12" fill="#14282D" stroke="#435E63" stroke-width="1.2" />
      <!-- Sync arrows icon -->
      <g transform="translate(14, 10)">
        <path d="M14 2 A7 7 0 0 0 3 8 L1 8" fill="none" stroke="#7FD1C3" stroke-width="2" stroke-linecap="round" />
        <path d="M4 5 L1 8 L4 11" fill="none" stroke="#7FD1C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 14 A7 7 0 0 0 13 8 L15 8" fill="none" stroke="#7FD1C3" stroke-width="2" stroke-linecap="round" />
        <path d="M12 11 L15 8 L12 5" fill="none" stroke="#7FD1C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <text x="38" y="24" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#E8F1EF">Journaled Sync</text>
    </g>

    <!-- Badge 3: SOTA · POTA · FLE (Mountain / Field) -->
    <g transform="translate(368, 0)">
      <rect width="186" height="38" rx="12" fill="#14282D" stroke="#435E63" stroke-width="1.2" />
      <!-- Mountain icon -->
      <g transform="translate(14, 10)">
        <path d="M2 15 L7 6 L10 11 L13 8 L17 15 Z" fill="none" stroke="#7FD1C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <text x="38" y="24" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#E8F1EF">SOTA · POTA · FLE</text>
    </g>

    <!-- Badge 4: Cross-Platform (Devices icon) -->
    <g transform="translate(566, 0)">
      <rect width="182" height="38" rx="12" fill="#14282D" stroke="#435E63" stroke-width="1.2" />
      <!-- Device/phone/tablet icon -->
      <g transform="translate(14, 10)">
        <rect x="2" y="1" width="14" height="15" rx="2" fill="none" stroke="#7FD1C3" stroke-width="1.8" />
        <line x1="7" y1="13" x2="11" y2="13" stroke="#7FD1C3" stroke-width="1.8" stroke-linecap="round" />
      </g>
      <text x="37" y="24" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#E8F1EF">Cross-Platform</text>
    </g>
  </g>

  <!-- Bottom Details Bar -->
  <g transform="translate(95, 478)">
    <!-- Platform listing & Ham radio credit -->
    <text x="0" y="0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="14.5" font-weight="500" fill="#9FBDB8">
      iOS · iPadOS · Android · macOS · Windows · 73 de DO1HOZ
    </text>
    
    <!-- Website URL badge on right -->
    <g transform="translate(730, -20)">
      <rect width="280" height="36" rx="18" fill="#0F1E22" stroke="#7FD1C3" stroke-width="1.2" opacity="0.95" />
      <circle cx="20" cy="18" r="4.5" fill="#7FD1C3" />
      <text x="35" y="23" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#E8F1EF">tideline.holzapfel-online.de</text>
    </g>
  </g>

</svg>
`

function findConverter() {
  const candidates = [
    '/opt/homebrew/bin/rsvg-convert',
    'rsvg-convert',
    '/opt/homebrew/bin/magick',
    'magick',
  ]

  for (const cmd of candidates) {
    try {
      execSync(`${cmd} --version`, { stdio: 'ignore' })
      return cmd
    } catch {
      // not available
    }
  }
  return null
}

function generateOgImage() {
  // 1. Write the vector SVG
  writeFileSync(svgPath, OG_SVG.trim() + '\n', 'utf-8')
  console.log(`[generate-og-image] Written SVG to public/og-image.svg`)

  // 2. Render to PNG
  const converter = findConverter()
  if (!converter) {
    if (existsSync(pngPath)) {
      console.log(
        `[generate-og-image] No CLI rasterizer found, existing public/og-image.png retained`
      )
      return
    }
    console.warn(
      `[generate-og-image] Warning: Neither rsvg-convert nor magick found to rasterize PNG`
    )
    return
  }

  try {
    if (converter.includes('rsvg-convert')) {
      execSync(`${converter} -w 1200 -h 630 "${svgPath}" -o "${pngPath}"`, {
        cwd: rootDir,
        stdio: 'inherit',
      })
    } else {
      execSync(
        `${converter} -background none -density 150 "${svgPath}" -resize 1200x630 "${pngPath}"`,
        {
          cwd: rootDir,
          stdio: 'inherit',
        }
      )
    }
    console.log(`[generate-og-image] Rendered high-res PNG to public/og-image.png via ${converter}`)
  } catch (err) {
    console.error(`[generate-og-image] Failed to render PNG:`, err)
  }
}

generateOgImage()
