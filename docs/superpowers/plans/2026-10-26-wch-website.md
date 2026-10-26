# WCH Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A static bilingual (EN/BM) credibility website for WCH Solutions Sdn Bhd, deployable to Netlify.

**Architecture:** Astro static build. Each page body is written once as a View component that takes `locale`. EN and BM route files are thin wrappers around it. All copy lives in `src/i18n/{en,ms}.json`, and language-neutral facts in `src/data/site.json`. A Node check script verifies the built `dist/`.

**Tech Stack:** Astro 7.x, @astrojs/sitemap 3.x, plain CSS, Node 24, Netlify Forms.

**Spec:** `docs/superpowers/specs/2026-10-26-wch-website-design.md`

## Global Constraints

- No text matching `/crypto|mining|bitcoin|blockchain|payback|RM ?10 ?m|RM3/i` anywhere in `dist/`.
- Capacity facts only: 10 MW contract, 10-year term, 2 MW Phase 1.
- Every statistic carries a source and date.
- No invented clients, partners, certifications, addresses or dates. Empty data stays hidden; no "coming soon".
- EN at `/`, BM at `/ms/`. Every page exists in both languages.
- Colours: navy `#0B1F33`, accent teal `#0FA3A3`. Text contrast is WCAG AA.
- No client-side JS except the mobile nav toggle and the form `?type=` preselect.
- No horizontal scroll at 375px width.

## Review Focus

1. Empty `ssm` / `address` / `credentials` / `partners` / `photo`: the section or line is hidden, never a blank label. Pinned by `scripts/check.mjs` (no `/credentials` link in nav while credentials and partners are empty).
2. Language switch on every page goes to the same page in the other locale. Pinned by the check script: every EN page has an `hreflang="ms"` link to its `/ms/` twin, and the reverse.
3. A BM key missing from `ms.json` would crash or show the key. Pinned by the check script: `ms.json` and `en.json` have identical key sets.
4. Netlify Forms needs the form present in static HTML with `name` and `data-netlify`. Pinned by the check script: `contact/index.html` contains `data-netlify="true"` and `name="enquiry"`.
5. `/work-with-us` CTA links to `/contact?type=contractor`, and the select preselects. This is a manual browser check (Task 5).

---

### Task 1: Scaffold, config, data and check script

**Files:**
- Create: `package.json`, `astro.config.mjs`, `netlify.toml`, `.gitignore`, `src/data/site.json`, `src/i18n/en.json`, `src/i18n/ms.json`, `src/i18n/t.ts`, `scripts/check.mjs`

**Interfaces:**
- Produces: `t(locale: 'en'|'ms'): Record<string,string>`, `localePath(locale, path: string): string` (`localePath('ms','/about')` → `/ms/about/`, `localePath('en','/')` → `/`), `otherLocale(locale)`. `site.json` shape is as in spec §6.
- `npm run build` runs `astro build && node scripts/check.mjs`.

- [ ] **Step 1:** `package.json` with scripts `dev`, `build` (build + check), `preview`. Dependencies: `astro`, `@astrojs/sitemap`.
- [ ] **Step 2:** `astro.config.mjs`: `site: 'https://wch.global'`, `trailingSlash: 'always'`, `i18n: { defaultLocale: 'en', locales: ['en','ms'], routing: { prefixDefaultLocale: false } }`, sitemap integration with i18n.
- [ ] **Step 3:** `netlify.toml`: `command = "npm run build"`, `publish = "dist"`.
- [ ] **Step 4:** `scripts/check.mjs` asserts:
  - routes `['', 'about', 'project', 'services', 'work-with-us', 'contact', 'thank-you']` exist under `dist/` and `dist/ms/`
  - the global content regex finds no matches in any `dist/**/*.html`
  - `en.json` and `ms.json` have the same keys
  - each page has hreflang links to both locales
  - the contact form markers are present
  - no `/credentials/` link is in the nav when credentials and partners are empty
  It exits 1 with a message per failure.
- [ ] **Step 5:** Fill `site.json` and `en.json` from spec §3 facts. Fill `ms.json` with the BM translation.
- [ ] **Step 6:** `npm install`, then commit.

### Task 2: Layout, styles, components

**Files:**
- Create: `src/styles/global.css`, `src/layouts/Base.astro`, `src/components/{Hero,FactStrip,Section,PersonCard,ContactForm,SourceNote}.astro`, `public/favicon.svg`

**Interfaces:**
- `Base` props: `{ locale, path, title, description }`. Renders head (title, meta description, canonical, hreflang en/ms/x-default, OG), skip link, header nav (credentials link only if data exists), language switch, footer (company name, SSM if set, email, address if set).
- `Hero {locale, eyebrow, title, lead, cta?}`, `FactStrip {locale}`, `Section {title?, eyebrow?, tone?: 'light'|'dark'}`, `PersonCard {name, role, bio, photo}` (initials avatar when there is no photo), `ContactForm {locale}`, `SourceNote {locale}`.

- [ ] **Step 1:** Write the global CSS tokens, base and layout utilities, and a mobile nav at ≤ 760px.
- [ ] **Step 2:** Write the components.
- [ ] **Step 3:** Commit.

### Task 3: Page views + EN/BM routes

**Files:**
- Create: `src/views/{Home,About,Project,Services,Credentials,WorkWithUs,Contact,ThankYou}View.astro`, the EN routes in `src/pages/*.astro`, the BM routes in `src/pages/ms/*.astro`, and `src/pages/404.astro`
- Credentials route files: generate them only when data exists (`getStaticPaths` is not needed; the page renders but the nav hides it). With data empty, the page shows a short "Credentials available on request" line plus the contact CTA. That line states a fact, not "coming soon".

- [ ] **Step 1:** Write the views from spec §5, using only i18n keys.
- [ ] **Step 2:** Write the route wrappers, e.g. `<AboutView locale="ms" />`.
- [ ] **Step 3:** Run `npm run build`. Expected: Astro build succeeds and the check prints `OK`.
- [ ] **Step 4:** Commit.

### Task 4: Phase roadmap SVG + source citations

- [ ] Add an inline SVG on Project showing 2 MW Phase 1 inside the 10 MW contract. Add a source list on Project and Home (IEA 2026, Sarawak Energy 16 Jun 2025, Microsoft 28 May 2025).
- [ ] Run `npm run build`, expect `OK`, then commit.

### Task 5: Browser verification

- [ ] Run `npm run preview`. Check every EN and BM page at 1280px and 375px: no horizontal scroll, nav toggle works, language switch works, `/contact/?type=contractor` preselects Contractor.
- [ ] Fix any issues, rebuild, and commit.
