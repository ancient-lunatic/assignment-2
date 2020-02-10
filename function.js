var RockPappeSecissorGameRules = /** @class */ (function () {
    function RockPappeSecissorGameRules(rule) {
        this.rule = rule;
        this.rule = [['Tie', 'Loose', 'Win'], ['Win', 'Tie', 'Loose'], ['Loose', 'Win', 'Tie']];
        this.userPoint = 0;
        this.computerPoint = 0;
    }
    RockPappeSecissorGameRules.prototype.play = function (id) {
        var userChoice = parseInt(id);
        var computerChoice = Math.floor(Math.random() * 3);
        var result = document.getElementById('output');
        if (this.rule[userChoice][computerChoice] === 'Tie') {
            result.innerText = "It's a Tie.. Well Played..";
            this.userPoint++;
            this.computerPoint++;
        }
        else if (this.rule[userChoice][computerChoice] === 'Win') {
            result.innerText = "Well Played.. You Won..";
            this.userPoint++;
        }
        else {
            result.innerText = "Computer Won...";
            this.computerPoint++;
        }
        this.GenerateResult();
    };
    RockPappeSecissorGameRules.prototype.GenerateResult = function () {
        document.getElementById("userPoint").innerText = (this.userPoint).toString();
        document.getElementById("computerPoint").innerText = this.computerPoint.toString();
    };
    RockPappeSecissorGameRules.prototype.rematch = function () {
        this.userPoint = 0;
        this.computerPoint = 0;
        document.getElementById("output").innerHTML = "lets take a chance...";
        this.GenerateResult();
    };
    return RockPappeSecissorGameRules;
}());
