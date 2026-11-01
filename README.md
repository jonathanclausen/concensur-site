# concensur.dk

Portfolio og blog for Concensur (Jonathan Clausen). Statisk site bygget med [Astro](https://astro.build) og hostet på Cloudflare Workers (statiske filer).

## Kom i gang

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # bygger til dist/
npm run check      # typetjek
npm run check:urls # tjekker at alle gamle WordPress-URL'er svarer (kør mod `npm run preview` eller en URL)
```

## Struktur

| Sti | Indhold |
| --- | --- |
| `src/data/i18n.ts` | Alle tekster på forsiden (dansk og engelsk), cases og karriere |
| `src/data/blog.ts` | Blogindlæg (dansk og engelsk) |
| `src/data/posts-meta.ts` | Datoer, kategorier og meta descriptions pr. indlæg |
| `src/data/projects.ts` | Case-sider: slug, datoer, kategorier, kundelink, skærmbillede |
| `src/assets/projects/`, `src/assets/blog/` | Billeder; filnavn = `image` i projects.ts eller blog-slug |
| `public/_redirects` | 301-redirects fra gamle WordPress-stier |
| `src/lib/schema.ts` | JSON-LD (Person, ProfessionalService, BlogPosting, CreativeWork, BreadcrumbList) |

URL'erne er bevidst identiske med det gamle WordPress-site (`/blog/<slug>/`, `/project/<slug>/`, afsluttende skråstreg).

## Udgivelse

`npm run deploy` bygger og udgiver med Wrangler. Med Cloudflare Workers Builds koblet til repoet udgives `master` automatisk, og pull requests får et preview-link.
