import type { Collection } from 'tinacms';

// Mirrors src/content.config.ts -> insightsCollection
export const InsightsCollection: Collection = {
  name: 'insights',
  label: 'Insights',
  path: 'src/content/insights',
  format: 'md',
  ui: {
    router: ({ document }) => {
      const [locale, filename] = document._sys.breadcrumbs;
      return locale === 'fr' ? `/fr/insights/${filename}` : `/insights/${filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      required: true,
    },
    {
      type: 'image',
      name: 'cardImage',
      label: 'Card Image',
      required: true,
    },
    {
      type: 'string',
      name: 'cardImageAlt',
      label: 'Card Image Alt Text',
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
