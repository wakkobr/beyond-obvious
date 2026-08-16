// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Importe o loader glob

const terminalCollection = defineCollection({
  // Mude de 'content' para o Content Layer com loader
  loader: glob({ pattern: '**\/[^_]*.md', base: './src/content/terminal' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(), // Use z.coerce.date() para garantir que a data seja lida corretamente do markdown/Decap
    lang: z.enum(['pt-br', 'en']).default('pt-br'),
    category: z.enum(['book', 'cinema', 'anime', 'ttrpg', 'gaming']),
    rating: z.string().default('5'),
    summary: z.string(),
    externalLink: z.string().url().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'terminal': terminalCollection,
};