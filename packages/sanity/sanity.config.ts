import { defineConfig } from "sanity";
import { tags } from "sanity-plugin-tags";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  dataset: "production",
  name: "default",
  plugins: [deskTool(), tags({})],
  projectId: "21t4zq9k",
  schema: {
    types: schemaTypes,
  },
  title: "Recipes",
});
