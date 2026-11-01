import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { BLOG_POSTS } from '../data/blog';
import { POST_META } from '../data/posts-meta';

export function GET(context: APIContext) {
  return rss({
    title: 'Concensur blog',
    description: 'Artikler om automatisering, .NET-udvikling og webshop-optimering fra Jonathan Clausen.',
    site: context.site!,
    customData: '<language>da-dk</language>',
    items: BLOG_POSTS.da
      .map((post) => ({
        title: post.title,
        link: `/blog/${post.slug}/`,
        pubDate: new Date(POST_META[post.slug].published),
        description: POST_META[post.slug].description.da,
        categories: post.category.split(',').map((c) => c.trim()),
      }))
      .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
  });
}
