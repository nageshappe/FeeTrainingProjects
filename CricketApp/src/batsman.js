var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Player } from "./player";
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name) {
        var _this = _super.call(this, name) || this;
        _this.numberOfRunsScored = 0;
        _this.numberofBallsFaced = 0;
        return _this;
    }
    Object.defineProperty(Batsman.prototype, "numberOfRuns", {
        get: function () {
            return this.numberOfRunsScored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "numberOfBallsBatted", {
        get: function () {
            return this.numberofBallsFaced;
        },
        enumerable: true,
        configurable: true
    });
    Batsman.prototype.addRuns = function (run) {
        this.numberOfRunsScored += run;
    };
    Batsman.prototype.addBallsFaced = function () {
        this.numberofBallsFaced++;
    };
    return Batsman;
}(Player));
export { Batsman };
