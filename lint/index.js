'use strict';

const TEST_FILES = ['test.js', '*.test.js', '**/test.js', '**/*.test.js'];
/**
 * ## Eslint
 * #### Command
 * ```bash
 * $ yarn b lint
 * ```
 * @module base
 * @example
 * module.exports = require('begin-project/lint');
 */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    commonjs: true,
  },
  extends: [
    'airbnb-base',
    'plugin:ava/recommended',
    'plugin:security/recommended',
  ],
  plugins: [
    'ava',
    'security',
  ],
  parserOptions: { sourceType: 'script' },
  rules: {
    strict: ['error', 'global'],
    'no-bitwise': ['error', { allow: ['~'] }],
    'func-names': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
    'prefer-const': 0,
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'no-plusplus': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
    }],
    'ava/no-ignored-test-files': ['error', {
      files: TEST_FILES.map(file => `../${file}`).concat(TEST_FILES),
    }],
    'ava/assertion-arguments': 'error',
    'ava/max-asserts': ['off', 5],
    'ava/no-async-fn-without-await': 'error',
    'ava/no-cb-test': 'off',
    'ava/no-duplicate-modifiers': 'error',
    'ava/no-identical-title': 'error',
    'ava/no-invalid-end': 'error',
    'ava/no-nested-tests': 'error',
    'ava/no-only-test': 'error',
    'ava/no-skip-assert': 'error',
    'ava/no-skip-test': 'error',
    'ava/no-statement-after-end': 'error',
    'ava/no-todo-implementation': 'error',
    'ava/no-todo-test': 'warn',
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-async-await': 'error',
    'ava/prefer-power-assert': 'off',
    'ava/test-ended': 'error',
    'ava/test-title': ['error', 'if-multiple'],
    'ava/use-t-well': 'error',
    'ava/use-t': 'error',
    'ava/use-test': 'error',
    'ava/use-true-false': 'error',
  },
  settings: {
    'import/core-modules': ['ava'],
  },
};

