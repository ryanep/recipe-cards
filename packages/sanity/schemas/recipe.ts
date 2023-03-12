import { defineType } from "sanity";

export const recipe = defineType({
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      description: "Apply a rating out of 5 stars",
      name: "rating",
      options: {
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
      },
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
      name: "imageUrl",
      options: {
        hotspot: true,
      },
      title: "Image URL",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ingredients",
      of: [{ type: "ingredient" }],
      title: "Ingredients",
      type: "array",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "steps",
      of: [{ type: "step" }],
      title: "Steps",
      type: "array",
      validation: (Rule) => Rule.required(),
    },
  ],
  name: "recipe",
  title: "Recipe",
  type: "document",
});
