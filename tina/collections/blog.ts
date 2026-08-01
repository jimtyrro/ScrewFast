import type { Collection } from 'tinacms';

// Mirrors src/content.config.ts -> blogCollection
export const BlogCollection: Collection = {
  name: 'blog',
  label: 'Blog',
  path: 'src/content/blog',
  format: 'md',
  ui: {
    router: ({ document }) => {
      const [locale, filename] = document._sys.breadcrumbs;
      return locale === 'fr' ? `/fr/blog/${filename}` : `/blog/${filename}`;
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
      type: 'string',
      name: 'author',
      label: 'Author',
      required: true,
    },
    {
      type: 'string',
      name: 'role',
      label: 'Role',
    },
    {
      type: 'image',
      name: 'authorImage',
      label: 'Author Image',
      required: true,
    },
    {
      type: 'string',
      name: 'authorImageAlt',
      label: 'Author Image Alt Text',
      required: true,
    },
    {
      type: 'datetime',
      name: 'pubDate',
      label: 'Publication Date',
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
      type: 'number',
      name: 'readTime',
      label: 'Read Time (minutes)',
      required: true,
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
