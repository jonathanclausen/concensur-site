/** Blog categories, matching the WordPress category slugs (/blog/category/<slug>/). */
export const CATEGORIES = {
  automatisering: {
    name: 'Automatisering',
    description: 'Indlæg om automatisering af arbejdsgange, integrationer og scripts, der sparer manuelt arbejde.',
  },
  optimering: {
    name: 'Optimering',
    description: 'Indlæg om optimering af hjemmesider, webshops og forretningsprocesser.',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;
