import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://lolog.lol';

export const GET: APIRoute = async () => {
  const guides = await getCollection('guide');

  const urls: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: string }> = [];

  // 홈페이지
  urls.push({
    loc: `${SITE_URL}/`,
  });

  // 가이드 목록 페이지
  urls.push({
    loc: `${SITE_URL}/guide/`,
  });

  // 뉴스 목록 페이지
  urls.push({
    loc: `${SITE_URL}/news/`,
  });

  // 각 가이드 페이지
  for (const guide of guides) {
    const lastmod = guide.data.updatedDate || guide.data.pubDate;
    urls.push({
      loc: `${SITE_URL}/guide/${guide.id}/`,
      lastmod: lastmod instanceof Date ? lastmod.toISOString() : undefined,
      changefreq: 'daily',
      priority: '0.9'
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${url.loc}</loc>${url.lastmod ? `
        <lastmod>${url.lastmod}</lastmod>` : ''}${url.changefreq ? `
        <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority ? `
        <priority>${url.priority}</priority>` : ''}
    </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
