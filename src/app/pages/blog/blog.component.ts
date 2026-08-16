import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.t;
  readonly posts = computed(() => BLOG_POSTS[this.languageService.currentLang()]);
}
