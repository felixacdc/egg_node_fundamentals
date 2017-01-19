var globalFoo;

exports.setFoo = function(val) {
    globalFoo = val;
};

exports.returnFoo = function(val) {
    return globalFoo;
};
