import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang } from '../i18n/translations';

export interface PageSeo {
  title: string;
  description: string;
  /** Canonical path without a language prefix or leading slash, e.g. '' | 'blog' | 'blog/some-slug'. */
  path: string;
  lang: Lang;
  image?: string;
}

const BASE_URL = 'https://concensur.dk';
const DEFAULT_IMAGE = `${BASE_URL}/jonathan-clausen.jpg`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  setPageMeta(page: PageSeo): void {
    const image = page.image ?? DEFAULT_IMAGE;
    const daPath = page.path ? `/${page.path}` : '/';
    const enPath = page.path ? `/en/${page.path}` : '/en';
    const canonical = page.lang === 'en' ? `${BASE_URL}${enPath}` : `${BASE_URL}${daPath}`;

    this.titleService.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:locale', content: page.lang === 'en' ? 'en_US' : 'da_DK' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setLink('canonical', canonical);
    this.setLink('alternate', `${BASE_URL}${daPath}`, 'da');
    this.setLink('alternate', `${BASE_URL}${enPath}`, 'en');
    this.setLink('alternate', `${BASE_URL}${daPath}`, 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let link = this.document.head.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) {
        link.setAttribute('hreflang', hreflang);
      }
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
