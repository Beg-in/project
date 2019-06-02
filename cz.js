#!/usr/bin/env node

'use strict';

let { bootstrap } = require('commitizen/dist/cli/git-cz');

const PACKAGE = 'package.json';

let cliPath = require.resolve(`commitizen/${PACKAGE}`);
cliPath = cliPath.substring(0, cliPath.length - PACKAGE.length);

bootstrap({
  cliPath,
  config: {
    path: 'cz-conventional-changelog',
  },
});
