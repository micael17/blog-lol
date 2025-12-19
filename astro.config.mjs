// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lolog.lol',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // 공략 페이지는 priority 높게
        if (item.url.includes('/guide/') && !item.url.endsWith('/guide/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // 메인/목록 페이지
        if (item.url.endsWith('/guide/') || item.url.endsWith('/news/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // 홈페이지
        if (item.url === 'https://lolog.lol/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        return item;
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
