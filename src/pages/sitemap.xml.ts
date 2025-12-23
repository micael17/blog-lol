import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://lolog.lol';

export const GET: APIRoute = async () => {
  const guides = await getCollection('guide');

  const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

  // 홈페이지
  urls.push({
    loc: `${SITE_URL}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  });

  // 가이드 목록 페이지
  urls.push({
    loc: `${SITE_URL}/guide/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  });

  // 뉴스 목록 페이지
  urls.push({
    loc: `${SITE_URL}/news/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  });

  // 각 가이드 페이지
  for (const guide of guides) {
    const lastmod = guide.data.updatedDate || guide.data.pubDate;
    urls.push({
      loc: `${SITE_URL}/guide/${guide.id}/`,
      lastmod: lastmod instanceof Date ? lastmod.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.9'
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
