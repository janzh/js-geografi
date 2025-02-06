module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "purejs",
    "android",
    "capacitor.config.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "react-refresh", "simple-import-sort", "testing-library"],
  rules: {
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // Prefer default exports as a rule of thumb, but you can disregard this rule where needed(not in .jsx/.tsx file).
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "no-console": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-props-no-spreading": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};
