import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    heroLabel: z.string().optional(),
    heroOutcome: z.string().optional(),
    timeline: z.string().optional(),
    client: z.string().optional(),
    methods: z.union([z.string(), z.array(z.string())]).optional(),
    // Research classification pills (rendered under the description).
    researchApproach: z
      .enum(['Quantitative', 'Qualitative', 'Mixed Method', 'Applied AI'])
      .optional(),
    methodologyTags: z.array(z.string()).optional(),
    role: z.string().optional(),
    sample: z.string().optional(),
    team: z.string().optional(),
    challenge: z.array(z.string()).optional(),
    approach: z.array(z.string()).optional(),
    findings: z.array(z.string()).optional(),
    dataAnalysis: z.array(z.string()).optional(),
    impact: z.array(z.string()).optional(),
    nextCta: z
      .object({ title: z.string(), href: z.string(), label: z.string() })
      .optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    status: z.string().optional(),
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
