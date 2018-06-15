var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.playerOnStrike = null;
        this.listofBatsman = [];
        this.numberOfOvers = 0;
    }
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        this.playerOnStrike = this.listofBatsman[1];
        arr.forEach(function (runsScored, ballNumber) {
            if (runsScored % 2 === 1) {
                if (_this.playerOnStrike) {
                    _this.playerOnStrike.addRuns(runsScored);
                    _this.changeStrike();
                }
            }
            else {
                if (_this.playerOnStrike)
                    _this.playerOnStrike.addRuns(runsScored);
                //this.changeStrike();
            }
            _this.totalScore += runsScored;
            if (_this.playerOnStrike)
                _this.playerOnStrike.addBallsFaced();
            if ((ballNumber + 1) % 6 === 0) {
                _this.changeStrike();
                _this.numberOfOvers++;
            }
        });
    };
    Scorer.prototype.changeStrike = function () {
        if (this.playerOnStrike === this.listofBatsman[0]) {
            this.playerOnStrike = this.listofBatsman[1];
        }
        else
            this.playerOnStrike = this.listofBatsman[0];
    };
    Scorer.prototype.printScore = function () {
        var _this = this;
        console.log("Total Runs Scored" + this.totalScore + " in " + this.numberOfOvers + " overs");
        //console.log("Total Runs Scored  ${this.totalScore} in ${this.numberOfOvers} overs");
        this.listofBatsman.forEach(function (playerName, runsScored) {
            if (_this.playerOnStrike)
                console.log(playerName.playerName + "scored" + playerName.numberOfRuns + " in" + playerName.numberOfBallsBatted + "Balls");
        });
    };
    Scorer.prototype.addBatsman = function (batsman) {
        this.listofBatsman.push(batsman);
    };
    return Scorer;
}());
export { Scorer };
