import { TRANSLATIONS, type Lang } from './data/i18n';

export type { Lang };
export const t = (lang: Lang) => TRANSLATIONS[lang];

/** Path of a page in the other language. Only pages that exist in both languages are mapped. */
export const prefix = (lang: Lang) => (lang === 'en' ? '/en' : '');
