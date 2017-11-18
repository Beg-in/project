'use strict';

/**
 * ### Client-side
 * #### For [Webpack](https://webpack.js.org/)
 * @module client
 * @example
 * module.exports = require('begin-linting/webpack');
 */
module.exports = {
  rules: {
    strict: ['error', 'never'],
    'import/no-extraneous-dependencies': 0,
  },
};
