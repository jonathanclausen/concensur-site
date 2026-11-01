import { TRANSLATIONS, type CaseStudy } from './i18n';

export interface Project extends CaseStudy {
  /** WordPress slug, kept so /project/<slug>/ URLs stay unchanged. */
  slug: string;
  /** Month the project was published on the old site (YYYY-MM). */
  date: string;
  dateLabel: string;
  modified: string;
  categories: string[];
  details: string[];
  url?: string;
  /** Screenshot file name in src/assets/projects/ (without extension), if available. */
  image?: string;
}

type ProjectExtra = Omit<Project, keyof CaseStudy>;

/** Old-site data per case, in the same order as TRANSLATIONS.da.caseStudies.items. */
const EXTRA: Record<string, ProjectExtra> = {
  'Luxury by Ho': {
    slug: 'luxury-by-ho',
    date: '2024-12',
    dateLabel: 'december 2024',
    modified: '2025-01-13T16:59:47+00:00',
    categories: ['Webshop', 'Support', 'Custom Features'],
    details: ['Temaudvikling', 'Webshop', 'SEO', 'E-mailmarkedsføring'],
    url: 'https://luxurybyho.com',
    image: 'luxury-by-ho',
  },
  'DRT Architects': {
    slug: '33499',
    date: '2021-10',
    dateLabel: 'oktober 2021',
    modified: '2024-12-19T14:45:42+00:00',
    categories: ['Support', 'One-pager'],
    details: ['Temaudvikling', 'SEO'],
    image: 'drt-architects',
  },
  'Auto-Mow': {
    slug: 'auto-mow',
    date: '2019-10',
    dateLabel: 'oktober 2019',
    modified: '2025-01-17T18:02:59+00:00',
    categories: ['Webshop', 'B2B', 'Integrationer'],
    details: ['WooCommerce', 'ERP-integration', 'CRM', 'E-mailkampagner'],
    url: 'https://auto-mow.com',
    image: 'auto-mow',
  },
  'Den Kvække Gartner': {
    slug: 'den-kvaekke-gartner',
    date: '2019-09',
    dateLabel: 'september 2019',
    modified: '2025-01-17T18:01:21+00:00',
    categories: ['Web Design', 'WordPress'],
    details: ['Redesign', 'Galleri', 'SEO'],
    image: 'den-kvaekke-gartner',
  },
  'Hornbæk Vin': {
    slug: 'hornbaek-vin',
    date: '2019-03',
    dateLabel: 'marts 2019',
    modified: '2024-12-19T15:12:29+00:00',
    categories: ['Web Design', 'WordPress'],
    details: ['Redesign', 'Billedredigering', 'SEO'],
    image: 'hornbaek-vin',
  },
  'Kronborg Knights': {
    slug: '349',
    date: '2019-03',
    dateLabel: 'marts 2019',
    modified: '2020-11-18T11:06:38+00:00',
    categories: ['Web Design', 'WordPress', 'Support'],
    details: ['2018–2019'],
    url: 'http://www.kronborgknights.dk',
    image: 'kronborg-knights',
  },
};

export const PROJECTS: Project[] = TRANSLATIONS.da.caseStudies.items.map((item) => {
  const extra = EXTRA[item.company];
  if (!extra) throw new Error(`Missing project data for ${item.company}`);
  return { ...item, ...extra };
});

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const projectByCompany = (company: string) => PROJECTS.find((p) => p.company === company);
