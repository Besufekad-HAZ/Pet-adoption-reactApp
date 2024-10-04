import { Linter } from "eslint";

const config = new Linter.Config({
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
});

export default config;
