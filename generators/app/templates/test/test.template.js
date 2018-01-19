'use strict';

const assert = require('chai').assert;
const prettyJson = require('./test-utils/prettyJson');
const sinon = require('sinon');

const <%= projectVarName %> = require('../index.js');

describe('<%= projectName %>', function () {
    require('./test-utils/approvals-config');
});
