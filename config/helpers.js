var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

var ROOTS = path.resolve(__dirname, '..');
var root2 = path.join.bind(path, ROOTS);

exports.root = root;
exports.root2 = root2