import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_POSTS } from './data/blog-posts';

const slugParams = async () => BLOG_POSTS.da.map((post) => ({ slug: post.slug }));

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'blog', renderMode: RenderMode.Prerender },
  { path: 'blog/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugParams },
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: 'en/blog', renderMode: RenderMode.Prerender },
  { path: 'en/blog/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugParams },
  { path: '**', renderMode: RenderMode.Server },
];
