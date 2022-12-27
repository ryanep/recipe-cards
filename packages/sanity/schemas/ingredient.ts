import { defineType } from "sanity";

export const ingredient = defineType({
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "unit",
      options: {
        layout: "radio",
        list: [
          { title: "Grams", value: "grams" },
          { title: "Whole", value: "whole" },
          { title: "Millilitres", value: "millilitres" },
          { title: "Bunch", value: "bunch" },
          { title: "Tablespoon", value: "tablespoon" },
          { title: "Teaspoon", value: "teaspoon" },
        ],
      },
      title: "Unit",
      type: "string",
    },
  ],
  name: "ingredient",
  title: "Ingredient",
  type: "document",
});
