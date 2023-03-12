/**
 * An object with ESLint options.
 *
 * WARNING
 * "Failed to load plugin '@typescript-eslint' declared in '..\.eslintrc.js': Cannot find module 'eslint/use-at-your-own-risk'"
 * Solution: IntelliJ didn't pick the current node version from nvm. So it ran with an outdated node version (12 instead of 16) resulting in the error. Use the shell.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: [
    '@typescript-eslint'
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
