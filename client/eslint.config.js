import astroPlugin from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  ...astroPlugin.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // optional custom rules here
    },
  },
];