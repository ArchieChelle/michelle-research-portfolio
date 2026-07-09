import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroLabel: z.string(),
    heroOutcome: z.string(),
    timeline: z.string(),
    client: z.string(),
    methods: z.array(z.string()),
    role: z.string(),
    sample: z.string(),
    team: z.string(),
    challenge: z.array(z.string()),
    approach: z.array(z.string()),
    findings: z.array(z.string()),
    dataAnalysis: z.array(z.string()).optional(),
    impact: z.array(z.string()).optional(),
    nextCta: z.object({
      title: z.string(),
      href: z.string(),
      label: z.string(),
    }),
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
