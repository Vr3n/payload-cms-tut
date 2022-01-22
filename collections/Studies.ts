import { CollectionConfig } from 'payload/types';
import meta from '../fields/Meta';
import slug from '../fields/Slug';

const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug,
    meta,
  ],
};

export default Study;
