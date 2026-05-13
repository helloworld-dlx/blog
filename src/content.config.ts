import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(true),
    section: z.enum(['lab', 'agent', 'mind', 'project']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };