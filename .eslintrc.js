/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: "**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}",
      extends: [
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "prettier/prettier": ["warn"],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "no-var": "off",
      },
    },
  ],
};
