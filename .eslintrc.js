module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint-config-airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  rules: {
    'no-console': 'warn',
  },
};
