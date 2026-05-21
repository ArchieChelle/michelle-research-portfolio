import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    industry: z.string().optional(),
    methods: z.union([z.string(), z.array(z.string())]).optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    status: z.string(),
    heroImage: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    status: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const process = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: z.string(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  writing,
  process,
};
