import { createConfig } from "@ryanep/eslint-config";

export const eslintConfig = [
  ...createConfig(),
  {
    rules: {
      // TODO: Re-enable when tailwind plugin supports v4.
      "tailwindcss/no-custom-classname": "off",
    },
  },
];

export default eslintConfig;
