'use strict';

(function (moduleFactory) {
    const isNode = typeof module !== 'undefined' && typeof module.exports !== undefined;

    if(isNode) {
        const signet = require('./signet-types');
        const matchlight = require('matchlight')(signet);

        module.exports = moduleFactory(signet, matchlight.match);
    } else {
        window.<%= fileVarName %> = moduleFactory(signet, matchlight.match);
    }

})(function (signet, match) {
    // source code here
});
