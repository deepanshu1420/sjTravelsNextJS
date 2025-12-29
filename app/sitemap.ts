// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: 'https://sjtravelsnext.vercel.app/',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://sjtravelsnext.vercel.app/about-us',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sjtravelsnext.vercel.app/homestays',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sjtravelsnext.vercel.app/temples',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sjtravelsnext.vercel.app/vehicles',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
