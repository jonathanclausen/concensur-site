import { Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Lang } from '../../i18n/translations';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  readonly lang = this.languageService.currentLang;
  readonly t = this.languageService.t;
  readonly theme = this.themeService.currentTheme;

  readonly homeLink = computed(() => (this.lang() === 'en' ? '/en' : '/'));
  readonly blogLink = computed(() => (this.lang() === 'en' ? '/en/blog' : '/blog'));

  setLang(target: Lang): void {
    const url = this.router.url.split('?')[0].split('#')[0];
    const isEn = url === '/en' || url.startsWith('/en/');
    const withoutPrefix = isEn ? url.slice(3) : url;

    const targetUrl =
      target === 'en'
        ? '/en' + (withoutPrefix === '/' ? '' : withoutPrefix)
        : withoutPrefix || '/';

    this.router.navigateByUrl(targetUrl);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
