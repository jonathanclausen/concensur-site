import type { ImageMetadata } from 'astro';

const projectImages = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true });
const blogImages = import.meta.glob<{ default: ImageMetadata }>('../assets/blog/*.{png,jpg,jpeg,webp}', { eager: true });

const find = (images: Record<string, { default: ImageMetadata }>, name?: string) => {
  if (!name) return undefined;
  const key = Object.keys(images).find((k) => k.split('/').pop()?.replace(/\.\w+$/, '') === name);
  return key ? images[key].default : undefined;
};

export const projectImage = (name?: string) => find(projectImages, name);
export const blogImage = (slug: string) => find(blogImages, slug);
