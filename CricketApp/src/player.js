var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    Object.defineProperty(Player.prototype, "playerName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
export { Player };
