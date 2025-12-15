import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guide = defineCollection({
	loader: glob({ base: './src/content/guide', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			champion: z.string(),
			role: z.enum(['탑', '정글', '미드', '원딜', '서폿']),
			difficulty: z.enum(['쉬움', '보통', '어려움']),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['패치노트', '이벤트', 'e스포츠', '기타']),
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
		}),
});

export const collections = { guide, news };
