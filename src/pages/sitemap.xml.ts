import type { APIRoute } from 'astro';
import { shootings } from '../data/shootings';

const site = 'https://nb-autofokus.de';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/impressum/', priority: '0.3', changefreq: 'yearly' },
  { url: '/datenschutz/', priority: '0.3', changefreq: 'yearly' },
];

const galleryPages = shootings.map((s) => ({
  url: `/galerie/${s.slug}/`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allPages = [...staticPages, ...galleryPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(({ url, priority, changefreq }) => `  <url>
    <loc>${site}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () =>
  new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
