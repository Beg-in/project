'use strict';

const TEST_FILES = ['test.js', '*.test.js', '**/test.js', '**/*.test.js'];
/**
 * ## Eslint
 * #### npm script
 * ```json
 * {
 *   "scripts": {
 *     "lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty ./"
 *   }
 * }
 * ```
 * @module base
 * @example
 * module.exports = require('begin-linting');
 */
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:ava/recommended',
  ],
  plugins: [
    'ava',
  ],
  parserOptions: { sourceType: 'script' },
  rules: {
    strict: ['error', 'global'],
    'no-bitwise': ['error', { allow: ['~'] }],
    'func-names': ['warn', 'as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
    'prefer-const': 0,
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'no-plusplus': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'global-require': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true }
    }],
    'ava/no-ignored-test-files': ['error', {
      files: TEST_FILES.map(file => `../${file}`).concat(TEST_FILES),
    }],
  },
  settings: {
    'import/core-modules': ['ava'],
  },
  overrides: [
    {
      files: TEST_FILES,
      env: {
        es6: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
      },
      rules: {
        strict: ['error', 'never'],
      },
    },
  ],
};

