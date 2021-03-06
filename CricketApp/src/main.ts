import { Batsman } from "./batsman";
import { Scorer } from "./scorer";

var batsman1 = new Batsman("Dhawan");
var batsman2 = new Batsman("Rohit");

var scorer = new Scorer();

scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);

scorer.calculateScore([1,1,1,1,1,1]);
scorer.printScore();
document.getElementById("display").innerHTML += scorer.totalScore.toString();