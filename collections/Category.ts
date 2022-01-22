import { CollectionConfig } from 'payload/types';
import slug from '../fields/Slug';

const Study: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    slug,
  ],
};

export default Study;
