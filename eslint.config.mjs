import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // informe os plugins do Airbnb
  baseDirectory: new URL(".", import.meta.url).pathname,
});

export default [
  ...compat.extends("airbnb-base"),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": import("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "no-console": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
    },
  },
  // Prettier config
  {
    files: ["*.ts", "*.js"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
