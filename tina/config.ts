import { defineConfig } from 'tinacms';
import { BlogCollection } from './collections/blog';
import { InsightsCollection } from './collections/insights';
import { ProductsCollection } from './collections/products';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.WORKERS_CI_BRANCH || // Cloudflare Workers Builds
  process.env.CF_PAGES_BRANCH || // Cloudflare Pages
  process.env.HEAD || // Netlify
  'main';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [BlogCollection, InsightsCollection, ProductsCollection],
  },
});
