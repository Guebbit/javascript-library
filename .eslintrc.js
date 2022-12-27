/**
 * An object with ESLint options.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    //typescript ! necessari secondo me
    '@typescript-eslint/no-non-null-assertion': 'off',
    // ok tabs, fixare un giorno
    'prettier/prettier': [0, {
      "useTabs": false
    }]
  }
};
