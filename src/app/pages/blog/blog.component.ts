import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { setPageLang } from '../../services/set-page-lang';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  private readonly _lang = setPageLang();
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  readonly t = this.languageService.t;
  readonly posts = computed(() => BLOG_POSTS[this.languageService.currentLang()]);
  readonly postLinkPrefix = computed(() =>
    this.languageService.currentLang() === 'en' ? '/en/blog' : '/blog'
  );

  private readonly seoEffect = effect(() => {
    this.seoService.setPageMeta({
      title: this.t().seo.blogTitle,
      description: this.t().seo.blogDescription,
      path: 'blog',
      lang: this.languageService.currentLang(),
    });
  });
}
