'use strict';

const container = require('../container');

const prettyJson = require('./test-utils/prettyJson');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('<%= fileName %>', function () {
    require('./test-utils/approvals-config');

    let <%= fileVarName %>;

    beforeEach(function () {
        <%= fileVarName %> = container.build('<%= fileVarName %>');
    });

    it('should have a failing test -- delete this test!', function () {
        assert.isTrue(false);
    });
});
