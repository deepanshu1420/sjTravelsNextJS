// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: 'https://travelstt.vercel.app',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://travelstt.vercel.app/about-us',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://travelstt.vercel.app/homestays',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://travelstt.vercel.app/temples',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://travelstt.vercel.app/vehicles',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
