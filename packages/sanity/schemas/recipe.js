export const recipe = {
  title: "Recipe",
  name: "recipe",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Rating",
      name: "rating",
      type: "number",
      description: "Apply a rating out of 5 stars",
      options: {
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      title: "Image URL",
      name: "imageUrl",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [{ type: "ingredient" }],
    },
    {
      title: "Steps",
      name: "steps",
      type: "array",
      of: [{ type: "step" }],
    },
  ],
};
