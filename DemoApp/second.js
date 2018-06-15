"use strict";
exports.__esModule = true;
var Second = /** @class */ (function () {
    function Second(name) {
        this.name = name;
    }
    Object.defineProperty(Second.prototype, "printName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Second;
}());
exports.Second = Second;
