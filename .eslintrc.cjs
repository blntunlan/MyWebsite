module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: undefined },
  env: { browser: true, es2022: true, node: true },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
