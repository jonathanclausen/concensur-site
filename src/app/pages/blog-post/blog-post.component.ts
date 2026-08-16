import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { setPageLang } from '../../services/set-page-lang';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  private readonly _lang = setPageLang();
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  readonly t = this.languageService.t;
  readonly lang = this.languageService.currentLang;
  readonly blogLink = computed(() => (this.lang() === 'en' ? '/en/blog' : '/blog'));

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' }
  );

  readonly post = computed(() => {
    const posts = BLOG_POSTS[this.lang()];
    return posts.find((p) => p.slug === this.slug()) ?? null;
  });

  private readonly seoEffect = effect(() => {
    const post = this.post();
    if (post) {
      this.seoService.setPageMeta({
        title: `${post.title} | Concensur`,
        description: post.excerpt,
        path: `blog/${post.slug}`,
        lang: this.lang(),
      });
    }
  });
}
