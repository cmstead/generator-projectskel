(function (moduleFactory) {
    let isNode = typeof module !== undefined && typeof module.exports !== undefined

    if (isNode) {
        const signet = require('./signet-types');
        const matchlight = require('matchlight')(signet);

        module.exports = moduleFactory(signet, matchlight.match);
    } else if (typeof signet === 'object') {
        window.<%= projectVarName %> = moduleFactory(signet, matchlight.match);
    } else {
        throw new Error('The module <%= projectName %> requires Signet to run.');
    }

})(function (signet, match) {
    'use strict';


});
