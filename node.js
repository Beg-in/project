'use strict';

let base = require('./');

/**
 * ### Server-side
 * #### For Node
 * @module server
 * @example
 * module.exports = require('begin-linting/node');
 */
let { overrides = [] } = base;
overrides = [{
  files: ['*.js'],
  env: {
    node: true,
  },
  rules: {
    'global-require': 'error',
    'func-names': 0,
  },
}].concat(overrides);
module.exports = Object.assign({ overrides }, base);

