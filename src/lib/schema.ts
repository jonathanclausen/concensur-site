import { SITE } from '../data/site';

const abs = (path: string) => new URL(path, SITE.url).href;

export const personId = `${SITE.url}/#person`;
export const businessId = `${SITE.url}/#business`;
export const websiteId = `${SITE.url}/#website`;

export const person = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: SITE.person,
  url: `${SITE.url}/`,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phoneHref,
  jobTitle: 'Softwareudvikler',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Københavns Universitet' },
  knowsAbout: ['.NET', 'C#', 'ASP.NET', 'Angular', 'React', 'WooCommerce', 'WordPress', 'Procesautomatisering'],
  worksFor: { '@id': businessId },
  sameAs: [SITE.linkedin, SITE.instagram],
});

export const business = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': businessId,
  name: SITE.name,
  url: `${SITE.url}/`,
  email: SITE.email,
  telephone: SITE.phoneHref,
  vatID: `DK${SITE.cvr}`,
  founder: { '@id': personId },
  areaServed: 'DK',
  address: { '@type': 'PostalAddress', addressCountry: 'DK', addressRegion: 'Region Hovedstaden' },
  sameAs: [SITE.linkedin],
});

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: ['da-DK', 'en'],
  publisher: { '@id': businessId },
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: abs(item.path) })),
});

export const blogPosting = (p: {
  title: string; description: string; path: string; published: string; modified: string; image?: string; lang: string; section?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: p.title,
  description: p.description,
  url: abs(p.path),
  mainEntityOfPage: abs(p.path),
  datePublished: p.published,
  dateModified: p.modified,
  inLanguage: p.lang,
  articleSection: p.section,
  image: p.image,
  author: { '@id': personId, '@type': 'Person', name: SITE.person, url: `${SITE.url}/` },
  publisher: { '@id': businessId },
});
