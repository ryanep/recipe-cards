// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: 'Recipe',
      name: 'recipe',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Rating',
          name: 'rating',
          type: 'number',
          description: 'Apply a rating out of 5 stars',
          options: {
            list: [
              { title: '1 Star', value: 1 },
              { title: '2 Stars', value: 2 },
              { title: '3 Stars', value: 3 },
              { title: '4 Stars', value: 4 },
              { title: '5 Stars', value: 5 },
            ],
          },
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'tags',
        },
        {
          title: 'Image URL',
          name: 'imageUrl',
          type: 'string',
        },
        {
          title: 'Ingredients',
          name: 'ingredients',
          type: 'array',
          of: [{ type: 'ingredient' }],
        },
        {
          title: 'Steps',
          name: 'steps',
          type: 'array',
          of: [{ type: 'step' }],
        },
      ],
    },
    {
      title: 'Ingredient',
      name: 'ingredient',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Amount',
          name: 'amount',
          type: 'number',
        },
        {
          title: 'Unit',
          name: 'unit',
          type: 'string',
          options: {
            layout: 'radio',
            list: [
              { title: 'Grams', value: 'grams' },
              { title: 'Whole', value: 'whole' },
              { title: 'Millilitres', value: 'millilitres' },
              { title: 'Bunch', value: 'bunch' },
            ],
          },
        },
      ],
    },
    {
      title: 'Step',
      name: 'step',
      type: 'document',
      fields: [
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
      ],
    },
  ]),
});
