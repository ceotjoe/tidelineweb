#!/usr/bin/env python3
"""
Erzeugt die statische, zweisprachige Tideline-Webseite.

    python3 tools/build.py

Quellen:  data/content.json (Texte DE/EN), data/links.json (zentrale Links),
          data/privacy.de.txt / privacy.en.txt (Datenschutztexte)
Ergebnis: index.html, de/, en/, sitemap.xml, robots.txt
Das Ergebnis ist reines HTML/CSS/JS und läuft auf jedem einfachen Webspace.
"""
import html
import json
import math
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
C = json.loads((ROOT / "data/content.json").read_text(encoding="utf-8"))
L = json.loads((ROOT / "data/links.json").read_text(encoding="utf-8"))
SITE = L["site"].rstrip("/")
VERSION = L["version"]
esc = html.escape

PATHS = {
    "de": {"home": "/de/", "imprint": "/de/impressum/", "privacy": "/de/datenschutz/"},
    "en": {"home": "/en/", "imprint": "/en/legal-notice/", "privacy": "/en/privacy/"},
}

META = {
    "de": {
        "title": "Tideline – Offline-Logger für Wavelog",
        "desc": "Tideline ist die Open-Source-App für Funkamateure: QSOs bei SOTA, POTA, WWFF und im Contest offline loggen und mit Wavelog synchronisieren. iOS, Android, macOS, Windows.",
        "og_locale": "de_DE",
    },
    "en": {
        "title": "Tideline – the offline logger for Wavelog",
        "desc": "Tideline is the open-source app for radio amateurs: log QSOs offline at SOTA, POTA, WWFF and in contests, and sync them with Wavelog. iOS, Android, macOS, Windows.",
        "og_locale": "en_US",
    },
}
STORY = {
    "de": {"offline": "kein Netz", "home": "zu Hause", "online": "Netz da", "zero": "0 QSOs offen"},
    "en": {"offline": "no signal", "home": "at home", "online": "online", "zero": "0 QSOs pending"},
}
LABEL = {
    "de": {"home": "Startseite", "nav": "Hauptnavigation", "theme_l": "Hell", "theme_d": "Dunkel", "back": "← Zur Startseite",
           "imprint": "Impressum", "privacy": "Datenschutzerklärung", "alt_lang": "English", "alt_code": "en"},
    "en": {"home": "Home", "nav": "Main navigation", "theme_l": "Light", "theme_d": "Dark", "back": "← Back to home",
           "imprint": "Legal notice", "privacy": "Privacy policy", "alt_lang": "Deutsch", "alt_code": "de"},
}


def t(lang, key):
    return C[lang][key]


def tx(lang, key):
    return esc(t(lang, key))


# ---------------------------------------------------------------- Teilstücke
def topo_svg():
    """Höhenlinien um einen Gipfel (reine Dekoration, deterministisch)."""
    cx, cy, out = 900, 300, []
    for k in range(1, 23):
        r, n, pts = k * 30, 56, []
        for i in range(n):
            a = i / n * math.pi * 2
            w = 1 + .22 * math.sin(a * 3 + k * .15) + .12 * math.sin(a * 5 - k * .25) + .07 * math.sin(a * 9 + k * .4)
            pts.append(f"{cx + math.cos(a) * r * 1.45 * w:.0f} {cy + math.sin(a) * r * w:.0f}")
        cls = ' class="idx"' if k % 5 == 0 else ""
        out.append(f'<path{cls} d="M{" L".join(pts)}Z"/>')
    return ('<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" focusable="false">' + "".join(out) + "</svg>")


def badge_html(s, lang):
    if s.get("kind") == "apple":
        w = round(48 * s["w"] / 40)
        img = f'<img src="/{s["badge"][lang]}" alt="{esc(s["badgeAlt"][lang])} – {esc(s["name"][lang])}" width="{w}" height="48">'
        return f'<a class="dl-badge" href="{esc(s["url"])}" rel="noopener">{img}</a>'
    if s.get("kind") == "google":
        img = f'<img src="/{s["badge"][lang]}" alt="{esc(s["badgeAlt"][lang])} – {esc(s["name"][lang])}" width="646" height="250">'
        return f'<a class="dl-badge gb gb-{lang}" href="{esc(s["url"])}" rel="noopener">{img}</a>'
    return ""


def hero_badges(lang):
    parts = [badge_html(s, lang) for s in L["stores"] if s.get("badge")]
    parts.append(f'<a class="btn btn-line" href="#download">{tx(lang, "hero.cta2")}</a>')
    return "\n    ".join(parts)


def downloads(lang):
    items = []
    for s in L["stores"]:
        if s.get("badge"):
            action = badge_html(s, lang)
        else:
            action = f'<a class="dl-action btn btn-line" href="{esc(s["url"])}" rel="noopener">{esc(s["label"][lang])}</a>'
        items.append(
            f'<li class="dl dl-{s["id"]}"><div class="dl-meta"><h3 class="dl-name">{esc(s["name"][lang])}</h3>'
            f'<p class="dl-sub">{esc(s["sub"][lang])}</p></div>{action}</li>')
    return "\n   ".join(items)


def ul(lang, key):
    return "<ul>" + "".join(f"<li>{esc(x)}</li>" for x in t(lang, key)) + "</ul>"


def faq(lang):
    return "\n   ".join(
        f'<details class="faq-item"><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q, a in t(lang, "faq.l"))


def head(lang, page, title, desc, robots="index,follow", jsonld=None):
    """page: 'home' | 'imprint' | 'privacy'"""
    other = LABEL[lang]["alt_code"]
    cur = PATHS[lang][page]
    alt = PATHS[other][page]
    og = f"{SITE}/assets/img/og-{lang}.png"
    ld = f'\n<script type="application/ld+json">{json.dumps(jsonld, ensure_ascii=False, indent=1)}</script>' if jsonld else ""
    return f"""<!doctype html>
<html lang="{lang}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<meta name="robots" content="{robots}">
<meta name="color-scheme" content="light dark">
<link rel="canonical" href="{SITE}{cur}">
<link rel="alternate" hreflang="{lang}" href="{SITE}{cur}">
<link rel="alternate" hreflang="{other}" href="{SITE}{alt}">
<link rel="alternate" hreflang="x-default" href="{SITE}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Tideline">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{SITE}{cur}">
<meta property="og:locale" content="{META[lang]['og_locale']}">
<meta property="og:image" content="{og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{esc('Tideline – ' + t(lang, 'hero.eyebrow'))}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/site.css">{ld}
</head>
"""


def header(lang, page, solid=False):
    lab = LABEL[lang]
    home = PATHS[lang]["home"]
    other = lab["alt_code"]
    prefix = home if page != "home" else ""
    nav = "".join(f'<a href="{prefix}#{a}">{tx(lang, k)}</a>' for a, k in
                  [("ideen", "nav.ideas"), ("tag", "nav.shots"), ("funktionen", "nav.features"),
                   ("plus", "nav.access"), ("faq", "nav.faq"), ("download", "nav.download")])
    cls = "top solid" if solid else "top"
    return f"""<body>
<a class="skip" href="#main">{tx(lang, 'skip')}</a>
<header class="{cls}"><div class="wrap">
 <a class="brand" href="{home}"><img src="/assets/img/tideline-icon.svg" alt="" width="36" height="36">Tideline</a>
 <nav aria-label="{lab['nav']}">{nav}</nav>
 <div class="ctl">
  <div class="toggle" role="group" aria-label="{tx(lang, 'lang.switch')}">
   <a href="{PATHS[lang][page]}" lang="{lang}" hreflang="{lang}" aria-current="true" data-lang-link="{lang}">{lang.upper()}</a>
   <a href="{PATHS[other][page]}" lang="{other}" hreflang="{other}" data-lang-link="{other}">{other.upper()}</a>
  </div>
  <div class="toggle theme-toggle" role="group" aria-label="{tx(lang, 'theme.switch')}">
   <button type="button" data-theme-set="light" aria-pressed="false" aria-label="{lab['theme_l']}">☀</button>
   <button type="button" data-theme-set="dark" aria-pressed="false" aria-label="{lab['theme_d']}">☾</button>
  </div>
 </div>
</div></header>
"""


def footer(lang):
    lab, p = LABEL[lang], PATHS[lang]
    return f"""<footer><div class="wrap">
 <ul class="links">
  <li><a href="{esc(L['manual'][lang])}" rel="noopener">{tx(lang, 'foot.manual')}</a></li>
  <li><a href="{esc(L['repo'])}" rel="noopener">{tx(lang, 'foot.github')}</a></li>
  <li><a href="{p['privacy']}">{tx(lang, 'foot.privacy')}</a></li>
  <li><a href="{p['imprint']}">{tx(lang, 'foot.imprint')}</a></li>
  <li><a href="{esc(L['changelog'])}" rel="noopener">{tx(lang, 'foot.changelog')}</a></li>
 </ul>
 <p>{tx(lang, 'oss.credit')}</p>
 <p>{tx(lang, 'foot.note')}</p>
</div></footer>
<script src="/assets/js/site.js"></script>
</body>
</html>
"""


# ---------------------------------------------------------------- Startseite
def jsonld(lang):
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Tideline for Wavelog",
        "alternateName": "Tideline",
        "description": META[lang]["desc"],
        "url": f"{SITE}{PATHS[lang]['home']}",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "iOS, iPadOS, Android, macOS, Windows, Linux",
        "softwareVersion": VERSION,
        "inLanguage": ["de", "en"],
        "license": "https://opensource.org/licenses/MIT",
        "isAccessibleForFree": True,
        "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"},
        "image": f"{SITE}/assets/img/og-{lang}.png",
        "downloadUrl": L["releases"],
        "installUrl": [s["url"] for s in L["stores"] if s["id"] in ("ios", "android")],
        "sameAs": [L["repo"]],
        "author": {"@type": "Person", "name": "Jörg Holzapfel", "alternateName": "DO1HOZ"},
    }


def home(lang):
    m = META[lang]
    p = PATHS[lang]
    st = STORY[lang]
    ideas = "".join(
        f'<li><span class="n">{i} / 4</span><h3>{tx(lang, f"ideas.{i}.t")}</h3><p>{tx(lang, f"ideas.{i}.d")}</p></li>' for i in range(1, 5))
    legend = "".join(
        f'<div><h3>{tx(lang, f"sc.{k}.t")}</h3><p class="s">{tx(lang, f"sc.{k}.s")}</p>{ul(lang, f"sc.{k}.l")}</div>'
        for k in ("act", "con", "fd", "home"))
    steps = "".join(
        f'<div class="step{" on" if i == 1 else ""}" data-k="{i - 1}"><span class="num">0{i}</span>'
        f'<h3>{tx(lang, f"story.{i}.t")}</h3><p>{tx(lang, f"story.{i}.d")}</p></div>' for i in range(1, 5))
    themes = "".join(f"<li>{esc(x)}</li>" for x in t(lang, "themes.l"))
    return (
        head(lang, "home", m["title"], m["desc"], jsonld=jsonld(lang))
        + header(lang, "home")
        + f"""
<main id="main">
<div class="hero">
 <div class="topo" aria-hidden="true">{topo_svg()}</div>
 <div class="peak" aria-hidden="true"><i></i><span>SOTA · POTA · WWFF</span></div>
 <div class="wrap">
  <div class="eyebrow">{tx(lang, 'hero.eyebrow')}</div>
  <h1>{tx(lang, 'hero.h1')}</h1>
  <p class="lead">{tx(lang, 'hero.lead')}</p>
  <div class="badges">
    {hero_badges(lang)}
  </div>
  <p class="note">{tx(lang, 'hero.note')} · {tx(lang, 'hero.version')} {VERSION}</p>
 </div>
</div>

<section id="ideen" class="contour-top"><div class="wrap">
 <h2>{tx(lang, 'ideas.h')}</h2>
 <ol class="ideas">{ideas}</ol>
</div></section>

<section id="tag" class="alt"><div class="wrap">
 <h2>{tx(lang, 'story.h')}</h2><p class="muted">{tx(lang, 'story.lead')}</p>
 <div class="story" id="story" data-offline="{st['offline']}" data-home="{st['home']}" data-online="{st['online']}" data-zero="{st['zero']}" data-pending="{esc(t(lang, 'gauge.pending'))}">
  <div class="sticky" aria-hidden="true">
   <svg class="profile" viewBox="0 0 400 200" focusable="false"><path class="ground" d="M0 200 V150 C40 140 70 150 110 120 S170 50 210 40 S280 90 320 110 S380 150 400 140 V200Z"/>
    <path class="path" id="pPath" d="M10 148 C40 140 70 150 110 120 S170 50 210 40 S280 90 320 110 S380 150 392 142" pathLength="1000"/>
    <circle id="pDot" cx="10" cy="148" r="8"/></svg>
   <div class="state"><span class="chip on" id="pNet">✓ {st['home']}</span><span id="pCount"></span></div>
   <div class="cap">{tx(lang, 'gauge.demo')}</div>
  </div>
  <div class="steps">{steps}</div>
 </div>
</div></section>

<section id="funktionen"><div class="wrap">
 <h2>{tx(lang, 'feat.h')}</h2><p class="muted narrow">{tx(lang, 'feat.lead')}</p>
 <div class="legend">{legend}</div>
 <div class="plan"><h3><span>{tx(lang, 'plan.h')}</span><span class="tag">{tx(lang, 'plan.tag')}</span></h3>{ul(lang, 'plan.l')}</div>
</div></section>

<section class="alt" id="app"><div class="wrap">
 <h2>{tx(lang, 'shots.h')}</h2><p class="muted">{tx(lang, 'shots.d')}</p>
 <div class="shots">
  <figure class="shot s-phone"><img src="/assets/img/shots/phone-01-log.jpg" alt="{tx(lang, 'shots.alt1')}" width="747" height="1624" loading="lazy"><figcaption>{tx(lang, 'shots.cap1')}</figcaption></figure>
  <figure class="shot s-tablet"><img src="/assets/img/shots/ipad-01-log.jpg" alt="{tx(lang, 'shots.alt2')}" width="1000" height="1333" loading="lazy"><figcaption>{tx(lang, 'shots.cap2')}</figcaption></figure>
  <figure class="shot s-phone"><img src="/assets/img/shots/phone-03-sync.jpg" alt="{tx(lang, 'shots.alt3')}" width="747" height="1624" loading="lazy"><figcaption>{tx(lang, 'shots.cap3')}</figcaption></figure>
 </div>
 <h3 class="serif themes-h">{tx(lang, 'themes.h')}</h3>
 <ul class="themes">{themes}</ul>
</div></section>

<section id="plus"><div class="wrap two">
 <div><h2>{tx(lang, 'a11y.h')}</h2><p>{tx(lang, 'a11y.d')}</p>{ul(lang, 'a11y.l')}</div>
 <div><h2>{tx(lang, 'priv.h')}</h2><p>{tx(lang, 'priv.d')}</p>{ul(lang, 'priv.l')}<p class="honest">{tx(lang, 'priv.honest')}</p></div>
</div></section>

<section class="alt" id="voraussetzungen"><div class="wrap two">
 <div><h2>{tx(lang, 'req.h')}</h2>
  <dl class="req"><dt>{tx(lang, 'req.wl.k')}</dt><dd>{tx(lang, 'req.wl.v')}</dd><dt>{tx(lang, 'req.tok.k')}</dt><dd>{tx(lang, 'req.tok.v')}</dd><dt>{tx(lang, 'req.os.k')}</dt><dd>{tx(lang, 'req.os.v')}</dd><dt>{tx(lang, 'req.demo.k')}</dt><dd>{tx(lang, 'req.demo.v')}</dd></dl></div>
 <div id="opensource"><h2>{tx(lang, 'oss.h')}</h2><p>{tx(lang, 'oss.d')}</p>
  <div class="links">
   <a class="btn" href="{esc(L['repo'])}" rel="noopener">{tx(lang, 'oss.repo')}</a>
   <a class="btn btn-line" href="{esc(L['issues'])}" rel="noopener">{tx(lang, 'oss.issue')}</a>
   <a class="btn btn-line" href="{esc(L['contributing'])}" rel="noopener">{tx(lang, 'oss.contrib')}</a>
   <a class="btn btn-line" href="{esc(L['translating'])}" rel="noopener">{tx(lang, 'oss.trans')}</a>
  </div>
  <p>{tx(lang, 'oss.fair')}</p></div>
</div></section>

<section id="faq"><div class="wrap"><h2>{tx(lang, 'faq.h')}</h2><div class="faq">
   {faq(lang)}
</div></div></section>

<section class="base" id="download"><div class="wrap">
 <h2>{tx(lang, 'dl.h')}</h2><p class="lead">{tx(lang, 'dl.d')}</p>
 <ul class="downloads">
   {downloads(lang)}
 </ul>
 <p class="note">{tx(lang, 'dl.checksums')}</p>
</div></section>
</main>
"""
        + footer(lang)
    )


# ---------------------------------------------------------------- Rechtstexte
def linkify(s):
    s = esc(s)
    return re.sub(r"(https?://[^\s<)|]+)", r'<a href="\1" rel="noopener">\1</a>', s)


def mail_span(addr):
    # Adresse rückwärts im HTML; CSS (.mail-rev) zeigt sie korrekt an, site.js macht einen mailto-Link daraus
    return f'<span class="mail-rev" data-mail>{esc(addr[::-1])}</span>'


def text_to_html(raw, lang):
    raw = raw.replace("Apple App Store / TestFlight", "Apple App Store / Mac App Store")
    blocks = [b.strip("\n") for b in re.split(r"\n\s*\n", raw.strip()) if b.strip()]
    out = []
    for b in blocks:
        lines = [x.rstrip() for x in b.split("\n") if x.strip()]
        if all(x.lstrip().startswith("•") for x in lines):
            out.append("<ul>" + "".join(f"<li>{inline(x.lstrip()[1:].strip())}</li>" for x in lines) + "</ul>")
        elif len(lines) == 1 and re.match(r"^\d+\.\s", lines[0]):
            out.append(f"<h2>{inline(lines[0])}</h2>")
        elif len(lines) == 1 and len(lines[0]) < 90 and not lines[0].endswith((".", ":", ";")) and not lines[0].startswith("•"):
            out.append(f"<h3>{inline(lines[0])}</h3>")
        else:
            out.append("<p>" + "<br>".join(inline(x) for x in lines) + "</p>")
    return "\n".join(out)


def inline(s):
    if "{{EMAIL}}" in s:
        pre, post = s.split("{{EMAIL}}", 1)
        return linkify(pre) + mail_span(L["contact_email"]) + linkify(post)
    return linkify(s)


def legal_page(lang, page, title, body, desc):
    return (
        head(lang, page, f"{title} – Tideline", desc, robots="noindex,follow")
        + header(lang, page, solid=True)
        + f'<main id="main" class="legal"><div class="wrap">\n<a class="back" href="{PATHS[lang]["home"]}">{LABEL[lang]["back"]}</a>\n<h1>{esc(title)}</h1>\n{body}\n</div></main>\n'
        + footer(lang)
    )


def imprint_body(lang):
    mail = mail_span(L["contact_email"])
    if lang == "de":
        return f"""<h2>Angaben gemäß § 5 TMG / DDG</h2>
<address>Jörg Holzapfel (DO1HOZ)<br>Justus-von-Liebig-Str. 20a<br>83052 Bruckmühl<br>Deutschland<br>E-Mail: {mail}<br>Web: <a href="{SITE}">{SITE}</a></address>
<h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV</h2>
<p>Jörg Holzapfel</p>
<h2>Haftungshinweis</h2>
<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>"""
    return f"""<h2>Information pursuant to § 5 TMG / DDG</h2>
<address>Jörg Holzapfel (DO1HOZ)<br>Justus-von-Liebig-Str. 20a<br>83052 Bruckmühl<br>Germany<br>Email: {mail}<br>Web: <a href="{SITE}">{SITE}</a></address>
<h2>Responsible for the content pursuant to § 55 (2) RStV / § 18 (2) MStV</h2>
<p>Jörg Holzapfel</p>
<h2>Liability for links</h2>
<p>Despite careful checking of the content, we accept no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>"""


def write(rel, content):
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def root_index():
    de, en = PATHS["de"]["home"], PATHS["en"]["home"]
    return f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tideline – Offline-Logger für Wavelog / the offline logger for Wavelog</title>
<meta name="description" content="{esc(META['de']['desc'])}">
<link rel="canonical" href="{SITE}/">
<link rel="alternate" hreflang="de" href="{SITE}{de}">
<link rel="alternate" hreflang="en" href="{SITE}{en}">
<link rel="alternate" hreflang="x-default" href="{SITE}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:title" content="Tideline"><meta property="og:image" content="{SITE}/assets/img/og-en.png">
<link rel="stylesheet" href="/assets/site.css">
<script src="/assets/js/redirect.js"></script>
</head>
<body>
<main id="main" class="chooser"><div>
<img src="/assets/img/tideline-icon.svg" alt="" width="96" height="96" class="chooser-icon">
<h1 class="serif">Tideline</h1>
<p>Offline-Logger für Wavelog · The offline logger for Wavelog</p>
<p><a class="btn" href="{de}" hreflang="de" lang="de">Deutsch</a> <a class="btn btn-line" href="{en}" hreflang="en" lang="en">English</a></p>
</div></main>
</body>
</html>
"""


def sitemap():
    def url(page):
        return (f"<url><loc>{SITE}{PATHS['de'][page]}</loc>"
                f'<xhtml:link rel="alternate" hreflang="de" href="{SITE}{PATHS["de"][page]}"/>'
                f'<xhtml:link rel="alternate" hreflang="en" href="{SITE}{PATHS["en"][page]}"/></url>\n'
                f"<url><loc>{SITE}{PATHS['en'][page]}</loc>"
                f'<xhtml:link rel="alternate" hreflang="de" href="{SITE}{PATHS["de"][page]}"/>'
                f'<xhtml:link rel="alternate" hreflang="en" href="{SITE}{PATHS["en"][page]}"/></url>\n')
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
            'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + url("home") + "</urlset>\n")


# Alte URLs der React-Seite, in den App-Stores verlinkt – müssen unverändert mit HTTP 200 antworten.
# Liegen bewusst NICHT als Ordner /privacy/ vor, sonst leitet Apache (DirectorySlash) per 301 auf /privacy/ um;
# .htaccess liefert legacy/<slug>.html unter /<slug> aus.
# slug -> (Sprache, Seite, kanonische URL wie bisher)
LEGACY = {
    "privacy": ("en", "privacy", "/privacy"),
    "imprint": ("en", "imprint", "/imprint"),
    "datenschutz": ("de", "privacy", "/privacy"),
    "impressum": ("de", "imprint", "/imprint"),
}


def legacy_copy(html_text, lang, page, canon):
    cur = f'{SITE}{PATHS[lang][page]}'
    return (html_text.replace(f'<link rel="canonical" href="{cur}">', f'<link rel="canonical" href="{SITE}{canon}">')
                     .replace(f'<meta property="og:url" content="{cur}">', f'<meta property="og:url" content="{SITE}{canon}">'))


def main():
    pages = {}
    for lang in ("de", "en"):
        write(PATHS[lang]["home"].strip("/") + "/index.html", home(lang))
        d_desc = {"de": "Impressum der Tideline-Webseite.", "en": "Legal notice of the Tideline website."}[lang]
        pages[(lang, "imprint")] = legal_page(lang, "imprint", LABEL[lang]["imprint"], imprint_body(lang), d_desc)
        write(PATHS[lang]["imprint"].strip("/") + "/index.html", pages[(lang, "imprint")])
        raw = (ROOT / f"data/privacy.{lang}.txt").read_text(encoding="utf-8")
        p_desc = {"de": "Datenschutzerklärung der Tideline-Webseite und der Tideline-App.",
                  "en": "Privacy policy of the Tideline website and the Tideline app."}[lang]
        pages[(lang, "privacy")] = legal_page(lang, "privacy", LABEL[lang]["privacy"], text_to_html(raw, lang), p_desc)
        write(PATHS[lang]["privacy"].strip("/") + "/index.html", pages[(lang, "privacy")])
    for slug, (lang, page, canon) in LEGACY.items():
        write(f"legacy/{slug}.html", legacy_copy(pages[(lang, page)], lang, page, canon))
    write("index.html", root_index())
    write("sitemap.xml", sitemap())
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
    print("Fertig: index.html, de/, en/, legacy/, sitemap.xml, robots.txt")


if __name__ == "__main__":
    main()
