import type { ImageMetadata } from 'astro';

const blogImages = import.meta.glob<{ default: ImageMetadata }>('../assets/blog/*.{png,jpg,jpeg,webp}', { eager: true });

const find = (images: Record<string, { default: ImageMetadata }>, name?: string) => {
  if (!name) return undefined;
  const key = Object.keys(images).find((k) => k.split('/').pop()?.replace(/\.\w+$/, '') === name);
  return key ? images[key].default : undefined;
};

export const blogImage = (slug: string) => find(blogImages, slug);
