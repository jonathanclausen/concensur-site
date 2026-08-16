import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
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

  readonly lang = this.languageService.currentLang;
  readonly t = this.languageService.t;
  readonly theme = this.themeService.currentTheme;

  setLang(lang: Lang): void {
    this.languageService.setLang(lang);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
