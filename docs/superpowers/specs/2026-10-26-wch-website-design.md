# WCH Solutions Website — Design Spec

Date: 2026-10-26
Status: Draft for review

## 1. Purpose

WCH Solutions Sdn Bhd plans an AI data centre in Sarawak. The website must convince three audiences that WCH is a genuine, registered company able to deliver that facility:

- **Government and state agencies**: they evaluate WCH for permits, power allocation, land and policy alignment.
- **Contractors and suppliers**: they decide whether to bid for or partner on construction, electrical and maintenance work.
- **Potential partners**: they judge credibility before a first meeting.

Success means a visitor from any of these groups can, within two minutes:

1. Confirm WCH is a real company (registration, people, address, contact).
2. Understand what WCH is building, where, and at what scale.
3. See why Sarawak and why WCH can deliver.
4. Find the right way to make contact.

## 2. Source material

The only content source is the investor deck *Sarawak DC infrastructures development by WCH* (22 pages, October 2026). The site must also use proof material that the client will supply later (see section 9).

The deck targets local investors. The website changes that framing for an institutional audience.

## 3. Content decisions

| Topic | Decision |
|---|---|
| Positioning | AI / HPC data centre infrastructure and colocation for East Malaysia. |
| Crypto / digital-asset mining | Excluded completely, including from services, copy and metadata. |
| Financial figures | Capacity facts only. The RM10m budget, three-year payback, RM3.33m/year and asset-comparison slides are excluded. |
| Statistics | Each one is cited with source and date. |
| Unverified claims | None. No invented clients, certifications, partners or dates. |
| Missing proof | The section stays hidden until real data exists. No "coming soon" text. |
| Photos | Representative or stock photos are labelled, as in the deck. |

### Facts available now (from the deck)

- 10 MW power contract, 10-year term.
- 2 MW planned initial (Phase 1) power allocation.
- Management reports that power and land are secured.
- Next steps: detailed design, customer contracts, delivery.
- Sarawak Energy (June 2025): 5.9 GW available generation capacity. Baleh project 1.285 GW, scheduled for Q4 2030. Installed capacity targets: 10 GW by 2030 and 15 GW by 2035. Hydropower is the main source.
- IEA (2026): global data-centre electricity use grows from 485 TWh (2025) to 950 TWh (2030 forecast).
- Microsoft launched its Malaysia West cloud region on 28 May 2025.
- Leadership: Jason Wong (CEO, 10+ years in blockchain infrastructure; on the site this reads "digital infrastructure"), Leo Tan (CTO, equipment planning and technical deployment), Perry Wong (COO, compliance and operating controls).
- Honorary advisers: Datuk Justine Jinggut (Honorary Chairman, strategic guidance and local relationships), Andy Yek ABK (Honorary Consultant, Sarawak business experience).
- Contact: info@wch.global, wch.global.

> **Open point for client:** Jason Wong's deck bio says "10+ years in blockchain and mining". This spec proposes "10+ years in digital infrastructure and large-scale computing deployment" to fit the no-crypto rule. The client must confirm this wording is accurate.

## 4. Languages

- English (default) at `/`.
- Bahasa Melayu at `/ms/`.
- The header language switch goes to the same page in the other language.
- All copy lives in `src/i18n/en.json` and `src/i18n/ms.json`, so a reviewer can check the BM text without reading code.
- Claude drafts the BM copy, and a native speaker reviews it before launch.

## 5. Site map

Each page exists in both EN and BM.

| # | Page | Path (EN / BM) | Content |
|---|---|---|---|
| 1 | Home | `/` · `/ms/` | Hero, key-facts strip, why Sarawak, what we build, leadership teaser, credentials teaser (hidden if empty), contact CTA. |
| 2 | About | `/about` · `/ms/about` | Company profile, registration details, mission, leadership team, honorary advisers. |
| 3 | Project | `/project` · `/ms/project` | Sarawak location, power foundation, Phase 1 to 10 MW roadmap, site requirements (power, fibre, cooling, people), cited market context. |
| 4 | Services | `/services` · `/ms/services` | Powered space, facility development, equipment hosting (colocation), operating support. |
| 5 | Credentials | `/credentials` · `/ms/credentials` | Registration, licences, power agreement, MOUs, partners. Data-driven; the page is hidden from the nav until it has at least one item. |
| 6 | Work with us | `/work-with-us` · `/ms/work-with-us` | For contractors and suppliers: construction, electrical, maintenance, site supply, with a CTA to the contact form preset to "Contractor". |
| 7 | Contact | `/contact` · `/ms/contact` | Netlify form, email, address, plus a thank-you page. |

## 6. Architecture

- **Framework:** Astro, static output, built-in i18n routing (`defaultLocale: "en"`, `locales: ["en", "ms"]`, no prefix for the default).
- **Styling:** one global CSS file with design tokens as CSS custom properties. No CSS framework.
- **JavaScript:** none by default. The only scripts are a mobile nav toggle and reading `?type=` to preselect the form enquiry type.
- **Hosting:** Netlify. `netlify.toml` sets `npm run build` and publishes `dist`. Auto-deploys from GitHub `main`. Domain wch.global.
- **Forms:** Netlify Forms (`data-netlify="true"`, honeypot field). The form posts to `/thank-you` (and `/ms/thank-you`).

### File layout

```
astro.config.mjs
netlify.toml
package.json
public/
  favicon.svg
  images/                   client photos (slots defined in site.json)
src/
  data/site.json            language-neutral facts: company, facts, team, advisers, credentials, partners, sources
  i18n/en.json              all English copy and UI strings
  i18n/ms.json              all Bahasa Melayu copy and UI strings
  i18n/t.ts                 helper: getStrings(locale), localePath(locale, path)
  layouts/Base.astro        <head>/SEO/hreflang, header + nav + language switch, footer
  components/
    Hero.astro
    FactStrip.astro
    Section.astro
    PersonCard.astro
    CredentialList.astro
    ContactForm.astro
    SourceNote.astro
  pages/
    index.astro, about.astro, project.astro, services.astro,
    credentials.astro, work-with-us.astro, contact.astro, thank-you.astro, 404.astro
    ms/  same page set; each file imports the shared page body and passes locale="ms"
  views/                    shared page bodies (HomeView.astro, AboutView.astro …) that take a locale prop
  styles/global.css
```

Each page lives once as a View component. The EN and BM route files are three-line wrappers, so the two languages cannot drift apart in structure.

### Data model (`site.json`)

```json
{
  "company": { "name": "WCH Solutions Sdn Bhd", "ssm": "", "email": "info@wch.global", "address": "", "domain": "wch.global" },
  "facts": [ { "value": "10", "unit": "MW", "key": "fact_contract" }, ... ],
  "team": [ { "name": "Jason Wong", "roleKey": "role_ceo", "bioKey": "bio_jason", "photo": "" }, ... ],
  "advisers": [ ... ],
  "credentials": [],
  "partners": [],
  "sources": [ { "label": "IEA", "title": "Key Questions on Energy and AI", "date": "2026", "url": "" }, ... ]
}
```

Rules: an empty `photo` shows an initials avatar, an empty `ssm` hides the registration line, and an empty `credentials` + `partners` hides the Credentials page from the nav and the home teaser.

## 7. Visual design

- **Tone:** institutional and engineering, calm and precise. No startup hype, no gradients-on-everything, no stock "glowing server" overload.
- **Colour:** deep navy (`#0B1F33`) background for the hero and footer, off-white body, slate text, and one accent: hydro teal (`#0FA3A3`). All text meets WCAG AA contrast.
- **Type:** a sans-serif for headings and body (Inter or IBM Plex Sans, self-hosted), and a mono typeface for numbers in fact strips.
- **Layout:** max content width about 1120px, generous vertical rhythm, 16px side gutter on mobile, no horizontal scroll at 375px.
- **Imagery:** the client's real site and power photos are preferred. Until they arrive, sections use solid-colour or simple line-diagram treatments, never fake site photos.
- **Diagrams:** one simple inline SVG for the Phase 1 to 10 MW roadmap.

## 8. SEO and accessibility

- Per-page `<title>` and description from the i18n files. `hreflang` links between EN and BM. Canonical URLs. `sitemap` via `@astrojs/sitemap`.
- Open Graph image (static, branded).
- Semantic landmarks, visible focus styles, alt text on every image, a form label on every input, and a skip link.

## 9. Client-supplied items (blocking launch, not build)

1. SSM registration number, plus licence or permit scans if they should be shown.
2. Office address.
3. Site, land and power photos, and power-agreement evidence that may be shown publicly.
4. Partner names, logos and MOU details, with permission to display them.
5. Team headshots and full bios. Confirm Jason Wong's bio wording.
6. Netlify account access and DNS control for wch.global.

The site builds and works without these items. Only launch depends on them.

## 10. Out of scope

CMS, login, blog/news, analytics beyond Netlify's built-in, chat widgets, investor or financial pages, and a Chinese language version.

## 11. Testing and verification

- `npm run build` succeeds, and every EN and BM route exists in `dist/`.
- Content guard: `grep -riE "crypto|mining|bitcoin|payback|RM ?10m|RM3" dist/` returns nothing.
- Manual browser check of each page at 1280px and 375px, including the language switch, nav, and form preselect.
- Netlify deploy preview: a test submission appears in Netlify Forms.
- Lighthouse accessibility and SEO scores ≥ 90 on Home and Contact.
