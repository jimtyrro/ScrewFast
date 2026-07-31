import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';
import type {
  BlogQuery,
  InsightsQuery,
  ProductsQuery,
} from '../../../tina/__generated__/types';
import BlogBody from '@components/islands/BlogBody.astro';
import InsightBody from '@components/islands/InsightBody.astro';
import ProductBody from '@components/islands/ProductBody.astro';
import { getBlogPost, getInsight, getProduct } from './data';

// `locale` + `slug` params combine into the collection's relativePath,
// e.g. locale=en, slug=post-1 -> "en/post-1.md" (matches the en/ and fr/
// subfolders under src/content/{blog,insights,products}).
export const islands: IslandRegistry = {
  blog: {
    fetch: (_request, params) =>
      getBlogPost(`${params.get('locale') ?? 'en'}/${params.get('slug') ?? ''}.md`),
    component: BlogBody,
    wrapper: { tag: 'div' },
    propsFromData: (data, _params) => ({
      data: (data as QueryResult<BlogQuery>).data?.blog,
    }),
  },
  insights: {
    fetch: (_request, params) =>
      getInsight(`${params.get('locale') ?? 'en'}/${params.get('slug') ?? ''}.md`),
    component: InsightBody,
    wrapper: { tag: 'div' },
    propsFromData: (data, _params) => ({
      data: (data as QueryResult<InsightsQuery>).data?.insights,
    }),
  },
  products: {
    fetch: (_request, params) =>
      getProduct(`${params.get('locale') ?? 'en'}/${params.get('slug') ?? ''}.md`),
    component: ProductBody,
    wrapper: { tag: 'div' },
    propsFromData: (data, _params) => ({
      data: (data as QueryResult<ProductsQuery>).data?.products,
    }),
  },
};
