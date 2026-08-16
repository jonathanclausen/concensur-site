import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { lang: 'da' } },
  { path: 'blog', component: BlogComponent, data: { lang: 'da' } },
  { path: 'blog/:slug', component: BlogPostComponent, data: { lang: 'da' } },
  { path: 'en', component: HomeComponent, data: { lang: 'en' } },
  { path: 'en/blog', component: BlogComponent, data: { lang: 'en' } },
  { path: 'en/blog/:slug', component: BlogPostComponent, data: { lang: 'en' } },
  { path: '**', redirectTo: '' },
];
