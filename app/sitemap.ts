import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/resume`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7
    }))
  ];
}