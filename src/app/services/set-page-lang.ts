import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from './language.service';
import { Lang } from '../i18n/translations';

export function setPageLang(): void {
  const route = inject(ActivatedRoute);
  const languageService = inject(LanguageService);
  const lang = (route.snapshot.data['lang'] as Lang) ?? 'da';
  languageService.setLang(lang);
}
