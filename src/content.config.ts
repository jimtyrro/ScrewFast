// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/products',
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: z.string(),
        imgMain: z.string(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        })
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          })
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.object({ cells: z.array(z.string()) })),
          })
        )
        .optional(),
      blueprints: z.object({
        first: z.string().optional(),
        second: z.string().optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      role: z.string().optional(),
      authorImage: z.string(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: z.string(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

const insightsCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/insights',
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      // contents: z.array(z.string()),
      cardImage: z.string(),
      cardImageAlt: z.string(),
    }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  products: productsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};
