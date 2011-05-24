#!/usr/local/bin/node

require.paths.push(__dirname);
require.paths.push(__dirname + '/support/async');
require.paths.push(__dirname + '/lib');

var testrunner = require(__dirname + '/support/nodeunit').reporters.default;
process.chdir(__dirname);
testrunner.run(['test']);
