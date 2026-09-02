// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const terminal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/terminal' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['ttrpg', 'gaming', 'boardgames', 'tech', 'stream', 'cinema', 'books']),
    publishDate: z.coerce.date(),
    rating: z.string().optional().nullable(),
    externalLink: z.string().optional(),
  }),
});

export const collections = { terminal };