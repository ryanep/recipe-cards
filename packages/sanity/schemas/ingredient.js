export const ingredient = {
  title: "Ingredient",
  name: "ingredient",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Amount",
      name: "amount",
      type: "number",
    },
    {
      title: "Unit",
      name: "unit",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Grams", value: "grams" },
          { title: "Whole", value: "whole" },
          { title: "Millilitres", value: "millilitres" },
          { title: "Bunch", value: "bunch" },
        ],
      },
    },
  ],
};
