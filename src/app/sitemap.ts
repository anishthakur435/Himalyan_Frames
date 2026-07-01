import { MetadataRoute } from 'next';
import { FILMS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://himalyanframes.com';

  const staticRoutes = [
    '',
    '/films',
    '/services',
    '/destinations',
    '/pricing',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/films' ? 'weekly' : 'monthly') as "weekly" | "monthly",
    priority: route === '' ? 1.0 : 0.8,
  }));

  const filmRoutes = FILMS.map((film) => ({
    url: `${baseUrl}/films/${film.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...filmRoutes];
}
