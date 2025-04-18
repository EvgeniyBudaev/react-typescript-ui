/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2020: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: ".",
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["warn"],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "import/no-absolute-path": "error",
    "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
    "import/no-deprecated": "warn",
    "import/no-unresolved": "off",
    "import/first": "error",
    "import/extensions": ["warn", "never", { svg: "always" }],
    "import/newline-after-import": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["frontend"],
      },
    },
  },
};
