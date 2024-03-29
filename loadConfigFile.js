/*
  @license
	Rollup.js v2.73.0
	Fri, 13 May 2022 15:50:44 GMT - commit 931a19940f58c745e9da9eae5585b551f356b2ed

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

const loadConfigFile = require('./shared/loadConfigFile.js');
require('fs');
require('path');
require('process');
require('url');
require('./shared/rollup.js');
require('perf_hooks');
require('crypto');
require('events');
require('tty');
require('./shared/mergeOptions.js');



module.exports = loadConfigFile.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
