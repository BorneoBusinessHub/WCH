// Post-build checks for dist/. Exits 1 on any failure.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const fail = [];
const read = (p) => readFileSync(p, 'utf8');

const routes = ['', 'about', 'project', 'services', 'credentials', 'work-with-us', 'contact', 'thank-you'];
for (const r of routes) {
  for (const prefix of ['', 'ms']) {
    const f = join(dist, prefix, r, 'index.html');
    if (!existsSync(f)) fail.push(`missing route: ${f}`);
  }
}

const html = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) html.push(p);
  }
})(dist);

const banned = /\b(crypto\w*|mining|miners?|bitcoin|blockchain|payback)\b|RM ?10 ?m\b|RM ?3\.33/i;
for (const f of html) {
  const m = read(f).match(banned);
  if (m) fail.push(`banned text "${m[0]}" in ${f}`);
}

const en = JSON.parse(read('src/i18n/en.json'));
const ms = JSON.parse(read('src/i18n/ms.json'));
for (const k of Object.keys(en)) if (!(k in ms)) fail.push(`ms.json missing key: ${k}`);
for (const k of Object.keys(ms)) if (!(k in en)) fail.push(`en.json missing key: ${k}`);

for (const r of routes.filter((r) => r !== 'thank-you')) {
  for (const prefix of ['', 'ms']) {
    const f = join(dist, prefix, r, 'index.html');
    if (!existsSync(f)) continue;
    const s = read(f);
    const enHref = `https://wch.global/${r ? r + '/' : ''}`;
    const msHref = `https://wch.global/ms/${r ? r + '/' : ''}`;
    if (!s.includes(`hreflang="en" href="${enHref}"`)) fail.push(`no hreflang en in ${f}`);
    if (!s.includes(`hreflang="ms" href="${msHref}"`)) fail.push(`no hreflang ms in ${f}`);
  }
}

for (const prefix of ['', 'ms']) {
  const f = join(dist, prefix, 'contact', 'index.html');
  if (!existsSync(f)) continue;
  const s = read(f);
  if (!s.includes('data-netlify="true"') || !s.includes('name="enquiry"')) fail.push(`netlify form markers missing in ${f}`);
}

const site = JSON.parse(read('src/data/site.json'));
if (!site.credentials.length && !site.partners.length) {
  const home = read(join(dist, 'index.html'));
  const nav = home.match(/<nav[\s\S]*?<\/nav>/)?.[0] ?? '';
  if (nav.includes('/credentials/')) fail.push('nav links to /credentials/ while credentials data is empty');
}

if (fail.length) {
  console.error('CHECK FAILED\n' + fail.map((f) => ' - ' + f).join('\n'));
  process.exit(1);
}
console.log(`CHECK OK (${html.length} html files)`);
