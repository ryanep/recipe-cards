import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  api: {
    dataset: "production",
    projectId: "21t4zq9k",
  },
  dataset: "production",
  name: "default",
  plugins: [deskTool()],
  projectId: "21t4zq9k",
  schema: {
    types: schemaTypes,
  },
  title: "Recipes",
});
