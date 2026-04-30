# Cascina Paradiso

Sito immersivo per **Cascina Paradiso** — storica trattoria bergamasca ad Alzano Lombardo (BG), rinata dalla storica **Cantina Cerea** del 1972. Cucina alla brace, prodotti nostrani, tradizione di famiglia.

Built with **Nuxt 3**, TypeScript, TailwindCSS, GSAP + Lenis, split-type, @nuxt/image, i18n (IT/EN), color-mode (light/dark/system), @nuxtjs/seo.
Package manager: **Yarn 1 (classic)**.

---

## Quick start

```bash
# 1. install dependencies
yarn install

# 2. run dev server at http://localhost:3000
yarn dev

# 3. production build
yarn build
yarn preview

# 4. static generation (for Netlify / Vercel / any static host)
yarn generate

# extras
yarn lint         # lint source
yarn typecheck    # TypeScript strict check
```

> **Node 18+** e **Yarn 1.22+** required.
> Il progetto è bloccato su `yarn@1.22.22` via `packageManager` in `package.json`.

---

## Environment

Copy `.env.example` → `.env` and fill in if needed. All variables are optional for local dev — the site works out of the box.

```
NUXT_PUBLIC_SITE_URL=https://www.cascinaparadiso.it
NUXT_PUBLIC_MAPS_API_KEY=            # optional
```

---

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Nuxt 3 (Vue 3, Vite, Nitro) |
| Language | TypeScript (strict) |
| Styling | TailwindCSS + CSS custom properties |
| Animations | GSAP + ScrollTrigger + @studio-freight/lenis + split-type |
| Images | @nuxt/image (WebP/AVIF, responsive sizes) |
| i18n | @nuxtjs/i18n — IT default, EN secondary |
| Theme | @nuxtjs/color-mode — light / dark / system |
| State | Pinia |
| Utils | @vueuse/nuxt |
| SEO | @nuxtjs/seo (sitemap, robots, schema-org, og-image) |

---

## Project structure

```
cascina-paradiso/
├─ app.vue                    # Root — mounts layout + page
├─ error.vue                  # 404 / 500 branded error page
├─ nuxt.config.ts             # Modules, SEO, i18n, image, color-mode
├─ tailwind.config.ts         # Design tokens, fluid typography, palette
├─ assets/
│  └─ css/main.css            # Base layer, custom cursor, loader, utilities
├─ components/
│  ├─ SiteNavbar.vue          # Fixed, scroll-condensed, mobile overlay
│  ├─ SiteFooter.vue          # Oversized wordmark + nav + contacts
│  ├─ SiteLoader.vue          # Logo + progress bar + fade-out
│  ├─ CustomCursor.vue        # Smooth-follow cursor (default/hover/image)
│  ├─ ThemeToggle.vue         # Light / Dark / System
│  ├─ LangToggle.vue          # IT / EN switcher
│  ├─ AppButton.vue           # Button / link with arrow
│  ├─ SectionWrapper.vue      # Section with tone + padding tokens
│  ├─ AnimatedText.vue        # Split + GSAP reveal
│  ├─ ImageReveal.vue         # Mask reveal + parallax + "VIEW" cursor
│  ├─ Marquee.vue             # Infinite italic marquee
│  ├─ ValueCard.vue           # 3-icon values (fire / land / family)
│  ├─ MenuItem.vue            # Menu row w/ dotted divider + price
│  └─ TimelineItem.vue        # Year → title → body → image
├─ composables/
│  ├─ useCursor.ts            # Global cursor state + hover helper
│  ├─ useSplitReveal.ts       # SplitType + GSAP ScrollTrigger
│  ├─ useReveal.ts            # Fade-up w/ [data-reveal] children
│  └─ useParallax.ts          # Scrub-based parallax
├─ plugins/
│  ├─ gsap.client.ts          # Registers ScrollTrigger + defaults
│  └─ lenis.client.ts         # Lenis ↔ ScrollTrigger sync loop
├─ layouts/
│  └─ default.vue             # Loader + Cursor + Nav + Main + Footer
├─ pages/
│  ├─ index.vue               # Hero + storytelling + values + menu + gallery + CTA
│  ├─ storia.vue              # Intro + timeline + quote
│  ├─ menu.vue                # Sticky-image menu categories
│  └─ contatti.vue            # Address / hours / phone + map + schema
├─ i18n/locales/
│  ├─ it.json                 # Default language
│  └─ en.json
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ images/logo.svg
└─ .env.example
```

---

## Design system

**Palette**

- `#F5F1E8` Cream — background chiaro
- `#3E2F2B` Brown — foreground caldo
- `#0F0F0F` Noir — background dark mode
- `#7B1E1E` Wine — accento editoriale

**Tipografia**

- Titoli: **Cormorant Garamond** (serif elegante, 300–700)
- Testo: **Inter** (sans moderno)
- Scala fluida via `clamp()` (`text-fluid-xs` → `text-fluid-display`)

**Spacing**

- Sistema 8pt
- Tokens: `py-section` / `py-section-lg`
- Container con safe-x fluido

---

## Animations

Tutte le animazioni girano su `transform` + `opacity` per restare a **60fps**.

- **Smooth scroll** globale via Lenis (duration 1.25s, easing expo)
- **Split reveal** su headline (words / chars / lines) via `split-type`
- **Mask reveal** cinematografico su immagini (clip-path inset)
- **Parallax** scrub su immagini e hero
- **Sticky storytelling** con reveal progressivo riga-per-riga
- **Marquee** infinito sul tagline
- **Page transition** fluida (500ms expo)

Rispettate le preferenze `prefers-reduced-motion` — le animazioni si accelerano x10 e lo smooth scroll si disattiva.

---

## SEO

- `useSeoMeta` su ogni pagina con title + description dinamici (i18n reattivo)
- Sitemap automatica (`@nuxtjs/seo`)
- `robots.txt` consistent
- Schema-org **Restaurant** sulla pagina contatti (indirizzo, orari, geo, cucina, priceRange)
- Open Graph con OG image template
- `hreflang` automatico IT/EN

---

## Immagini

Immagini di riferimento da **Unsplash / Pexels** (free-to-use), selezionate per coerenza visiva:

- Carne alla brace, camino a legna
- Interni rustici premium
- Piatti tipici bergamaschi
- Cantina e materie prime

Per produzione, sostituire i link Unsplash nelle pagine con asset originali del cliente (consigliato: foto professionali da `@ristorantecascinaparadiso` Instagram o nuovo servizio fotografico).

Tutte le immagini passano da `@nuxt/image` → WebP/AVIF, sizes responsive, lazy loading nativo.

---

## Deploy

Il progetto è compatibile con:

- **Vercel** → zero-config (imposta `yarn install && yarn build`)
- **Netlify** → build: `yarn generate`, publish: `.output/public`
- **Cloudflare Pages** → build: `yarn build`, output: `.output`
- **Node server** → `yarn build` → `node .output/server/index.mjs`

---

## Roadmap / estensioni consigliate

- [ ] Pagina eventi / cena a tema
- [ ] Form prenotazione con Resend / email backend
- [ ] CMS headless (Sanity / Directus / Nuxt Content) per menu stagionale
- [ ] Integrazione WhatsApp Business per prenotazioni rapide
- [ ] Sezione recensioni con structured data `Review`

---

**Un luogo, una tavola, un fuoco.**
Via Guglielmo Ghilardi, 20 — 24022 Alzano Lombardo (BG) — 351 915 2082
