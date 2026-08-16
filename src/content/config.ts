import { defineCollection, z } from 'astro:content';

// Define o esquema para os posts do Terminal de Mídia
const terminalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    lang: z.enum(['pt-br', 'en']).default('pt-br'),
    category: z.enum(['book', 'cinema', 'anime', 'ttrpg', 'gaming']),
    rating: z.string().default('5'),
    summary: z.string(),
    externalLink: z.string().url().optional(),
    coverImage: z.string().optional(),
  }),
});

// Exporta as coleções para o Astro reconhecer
export const collections = {
  'terminal': terminalCollection,
};