'use strict';

const assert = require('chai').assert;
const prettyJson = require('./test-utils/prettyJson');
const sinon = require('sinon');

const <%= fileVarName %> = require('../bin/<%= fileName %>.js');

describe('<%= fileName %>', function () {
    require('./test-utils/approvals-config');
});
