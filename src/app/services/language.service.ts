import { Injectable, computed, signal } from '@angular/core';
import { Lang, TRANSLATIONS, Translations } from '../i18n/translations';

const STORAGE_KEY = 'concensur-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly lang = signal<Lang>(this.detectInitialLang());

  readonly currentLang = this.lang.asReadonly();
  readonly t = computed<Translations>(() => TRANSLATIONS[this.lang()]);

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  private detectInitialLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'da' || stored === 'en') {
        return stored;
      }
    }
    if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('da')) {
      return 'da';
    }
    return 'en';
  }
}
