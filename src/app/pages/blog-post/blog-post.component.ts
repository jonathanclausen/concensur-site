import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.t;
  readonly lang = this.languageService.currentLang;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' }
  );

  readonly post = computed(() => {
    const posts = BLOG_POSTS[this.lang()];
    return posts.find((p) => p.slug === this.slug()) ?? null;
  });
}
