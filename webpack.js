'use strict';

/**
 * ### Client-side
 * #### For [Webpack](https://webpack.js.org/)
 * @module client
 * @example
 * module.exports = require('begin-linting/webpack');
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  rules: {
    strict: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
  },
};
