'use strict';

(function (moduleFactory) {
    const isNode = typeof module !== 'undefined' && typeof module.exports !== undefined;

    if(isNode) {
        module.exports = moduleFactory();
    } else {
        window.<%= fileVarName %> = moduleFactory();
    }

})(function () {
    // source code here
});
