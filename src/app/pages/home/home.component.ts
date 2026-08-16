import { Component, effect, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { setPageLang } from '../../services/set-page-lang';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly _lang = setPageLang();
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  readonly t = this.languageService.t;

  private readonly seoEffect = effect(() => {
    this.seoService.setPageMeta({
      title: this.t().seo.homeTitle,
      description: this.t().seo.homeDescription,
      path: '',
      lang: this.languageService.currentLang(),
    });
  });
  readonly yearsExperience = new Date().getFullYear() - 2019;
  readonly companiesCount = 8;

  readonly competencyIcons = [
    // .NET
    'M9.75 8.25 6 12l3.75 3.75M14.25 8.25 18 12l-3.75 3.75',
    // Full-stack
    'M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5',
    // Scalable & distributed architecture
    'M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z',
    // Reporting
    'M3.75 3v18h18M8.25 15.75V18M12.75 11.25V18M17.25 6.75V18',
    // Process optimization
    'M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3M6.5 6.5l2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2',
    // E-commerce
    'M2.25 3h1.5l1.5 12.75h13.5L20.25 8.25H5.25M9 20.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM17.25 20.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z',
  ];

  readonly linkedinUrl = 'https://www.linkedin.com/in/jonathan-clausen/';

  readonly expandedCase = signal<number | null>(null);

  toggleCase(index: number): void {
    this.expandedCase.update((current) => (current === index ? null : index));
  }

  private readonly web3formsAccessKey = '53830c23-a22d-4f03-bbba-36b9f4aeb766';

  readonly formStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async onSubmit(
    event: Event,
    nameInput: HTMLInputElement,
    emailInput: HTMLInputElement,
    messageInput: HTMLTextAreaElement
  ): Promise<void> {
    event.preventDefault();
    this.formStatus.set('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.web3formsAccessKey,
          subject: `Henvendelse fra ${nameInput.value || 'concensur.dk'}`,
          from_name: nameInput.value || 'concensur.dk',
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        this.formStatus.set('success');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      } else {
        this.formStatus.set('error');
      }
    } catch {
      this.formStatus.set('error');
    }
  }
}
