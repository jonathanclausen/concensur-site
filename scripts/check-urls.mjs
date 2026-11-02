// Checks that every URL from the old WordPress site answers 200 (or 301 to a 200) on the target host.
// Usage: node scripts/check-urls.mjs [baseUrl]   (default http://localhost:4321)
const base = process.argv[2] ?? 'http://localhost:4321';

const KEEP = [
  '/', '/blog/',
  '/blog/yahoo-finance-aktiepriser-i-google-sheets/',
  '/blog/automatisk-validering-af-eu-momsnumre-via-vies-en-case-med-erp-integration-og-sign-up-optimering/',
  '/blog/optimer-wordpress-hastighed-og-seo-med-caching/',
  '/blog/category/automatisering/', '/blog/category/optimering/',
  '/en/', '/en/blog/', '/rss.xml', '/sitemap-index.xml', '/robots.txt',
];
const REDIRECT = {
  '/blog/author/jona8820/': '/blog/',
  '/feed/': '/rss.xml',
  '/sitemap_index.xml': '/sitemap-index.xml',
  '/post-sitemap.xml': '/sitemap-index.xml',
  '/project/': '/',
  '/project/349/': '/',
  '/project/luxury-by-ho/': '/',
};

let failed = 0;
const check = async (path, expectRedirect) => {
  const res = await fetch(base + path, { redirect: 'manual' });
  const loc = res.headers.get('location');
  let ok;
  if (expectRedirect) ok = [301, 308].includes(res.status) && loc && new URL(loc, base).pathname === expectRedirect;
  else ok = res.status === 200;
  if (!ok) failed++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${res.status} ${path}${loc ? ` -> ${loc}` : ''}`);
};

for (const p of KEEP) await check(p);
if (!base.includes('localhost')) for (const [from, to] of Object.entries(REDIRECT)) await check(from, to);
console.log(failed ? `\n${failed} problem(s)` : '\nAll URLs OK');
process.exit(failed ? 1 : 0);
