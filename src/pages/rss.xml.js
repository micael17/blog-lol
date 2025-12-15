import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const guides = await getCollection('guide');
	const news = await getCollection('news');

	const guideItems = guides.map((post) => ({
		title: post.data.title,
		description: post.data.description,
		pubDate: post.data.pubDate,
		link: `/guide/${post.id}/`,
	}));

	const newsItems = news.map((post) => ({
		title: post.data.title,
		description: post.data.description,
		pubDate: post.data.pubDate,
		link: `/news/${post.id}/`,
	}));

	const allItems = [...guideItems, ...newsItems].sort(
		(a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allItems,
	});
}
