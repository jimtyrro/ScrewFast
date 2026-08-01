import type { Collection } from 'tinacms';

// Mirrors src/content.config.ts -> productsCollection
export const ProductsCollection: Collection = {
  name: 'products',
  label: 'Products',
  path: 'src/content/products',
  format: 'md',
  ui: {
    router: ({ document }) => {
      const [locale, filename] = document._sys.breadcrumbs;
      return locale === 'fr' ? `/fr/products/${filename}` : `/products/${filename}`;
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
      type: 'object',
      name: 'main',
      label: 'Main',
      fields: [
        { type: 'number', name: 'id', label: 'ID', required: true },
        { type: 'string', name: 'content', label: 'Content', required: true },
        { type: 'image', name: 'imgCard', label: 'Card Image', required: true },
        { type: 'image', name: 'imgMain', label: 'Main Image', required: true },
        { type: 'string', name: 'imgAlt', label: 'Image Alt Text', required: true },
      ],
    },
    {
      type: 'object',
      name: 'tabs',
      label: 'Tabs',
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: 'string', name: 'id', label: 'ID', required: true },
        { type: 'string', name: 'dataTab', label: 'Data Tab', required: true },
        { type: 'string', name: 'title', label: 'Title', required: true },
      ],
    },
    {
      type: 'object',
      name: 'longDescription',
      label: 'Long Description',
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'subTitle', label: 'Subtitle', required: true },
        { type: 'string', name: 'btnTitle', label: 'Button Title', required: true },
        { type: 'string', name: 'btnURL', label: 'Button URL', required: true },
      ],
    },
    {
      type: 'object',
      name: 'descriptionList',
      label: 'Description List',
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'subTitle', label: 'Subtitle', required: true },
      ],
    },
    {
      type: 'object',
      name: 'specificationsLeft',
      label: 'Specifications (Left)',
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'subTitle', label: 'Subtitle', required: true },
      ],
    },
    {
      type: 'object',
      name: 'specificationsRight',
      label: 'Specifications (Right)',
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'subTitle', label: 'Subtitle', required: true },
      ],
    },
    {
      type: 'object',
      name: 'tableData',
      label: 'Table Data',
      list: true,
      fields: [
        { type: 'string', name: 'feature', label: 'Column Headers', list: true, required: true },
        {
          type: 'object',
          name: 'description',
          label: 'Rows',
          list: true,
          fields: [
            { type: 'string', name: 'cells', label: 'Cells', list: true, required: true },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'blueprints',
      label: 'Blueprints',
      fields: [
        { type: 'image', name: 'first', label: 'First' },
        { type: 'image', name: 'second', label: 'Second' },
      ],
    },
  ],
};
