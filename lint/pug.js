'use strict';

/**
 * ## pug-lint
 * #### npm script
 * ```json
 * {
 *   "scripts": {
 *     "lint:pug": "pug-lint --reporter node_modules/puglint-stylish src/"
 *   }
 * }
 * ```
 * @module pug
 * @example
 * module.exports = require('begin-linting/pug');
 */
module.exports = {
  extends: 'clock',
  requireSpecificAttributes: [
    { form: 'novalidate' },
    { 'a[target=_blank]': 'noopener' },
  ],
  validateAttributeQuoteMarks: '"',
  validateAttributeSeparator: {
    separator: ', ',
    multiLineSeparator: ',\n  ',
  },
  disallowIdLiterals: null,
  requireClassLiteralsBeforeIdLiterals: null,
  requireIdLiteralsBeforeAttributes: true,
};
