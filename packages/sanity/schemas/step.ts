import { defineType } from "sanity";

export const step = defineType({
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  name: "step",
  title: "Step",
  type: "document",
});
