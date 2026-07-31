import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getBlogPost = (relativePath: string) =>
  requestWithMetadata(
    client.queries.blog({ relativePath }),
    { priority: 'primary' }
  );

export const getInsight = (relativePath: string) =>
  requestWithMetadata(
    client.queries.insights({ relativePath }),
    { priority: 'primary' }
  );

export const getProduct = (relativePath: string) =>
  requestWithMetadata(
    client.queries.products({ relativePath }),
    { priority: 'primary' }
  );
