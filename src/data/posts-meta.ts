import type { CategorySlug } from './categories';

/** SEO metadata per blog post, keyed by the WordPress slug. */
export const POST_META: Record<
  string,
  { published: string; modified: string; categories: CategorySlug[]; description: { da: string; en: string } }
> = {
  'yahoo-finance-aktiepriser-i-google-sheets': {
    published: '2025-03-08T17:26:51+00:00',
    modified: '2025-03-08T17:38:18+00:00',
    categories: ['automatisering'],
    description: {
      da: 'I denne blog vil jeg vise, hvordan du kan importere aktiepriser direkte til Google Sheets ved at bruge Google Apps Script.',
      en: 'How to import live stock prices from Yahoo Finance straight into Google Sheets with a small Google Apps Script function.',
    },
  },
  'automatisk-validering-af-eu-momsnumre-via-vies-en-case-med-erp-integration-og-sign-up-optimering': {
    published: '2025-01-17T17:32:13+00:00',
    modified: '2025-03-08T17:32:06+00:00',
    categories: ['automatisering', 'optimering'],
    description: {
      da: 'Case: automatisk validering af EU-momsnumre via VIES, integreret med e-conomic og en webshops sign-up-formular.',
      en: 'Case study: automatic validation of EU VAT numbers through VIES, integrated with e-conomic and a webshop sign-up form.',
    },
  },
  'optimer-wordpress-hastighed-og-seo-med-caching': {
    published: '2025-01-14T16:44:12+00:00',
    modified: '2025-03-08T17:28:28+00:00',
    categories: ['optimering'],
    description: {
      da: 'Sådan gør caching din WordPress- og WooCommerce-side hurtigere, og hvorfor hastighed betyder noget for både SEO og konvertering.',
      en: 'How caching makes a WordPress or WooCommerce site faster, and why speed matters for both SEO and conversion.',
    },
  },
};
