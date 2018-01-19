'use strict';

(function (moduleFactory) {
    const isNode = typeof module !== 'undefined' && typeof module.exports !== undefined;

    if(isNode) {
        const signet = require('./signet-types');

        module.exports = moduleFactory(signet);
    } else {
        window.<%= fileVarName %> = moduleFactory(signet);
    }

})(function (signet) {
    // source code here
});
