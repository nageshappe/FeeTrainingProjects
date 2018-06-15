
import * as $ from 'jquery';
import { Batsman } from './batsman';
export class Scorer
{
    playerOnStrike :  Batsman | null;  

    totalScore : number;

    listofBatsman : Array<Batsman>;

    numberOfOvers : number;

    constructor()
    {
         this.totalScore =0;
        this.playerOnStrike = null;
         this.listofBatsman = [ ];
         this.numberOfOvers = 0;

    }

    calculateScore(arr:Array<number>)
    {
        this.playerOnStrike = this.listofBatsman[1];

        arr.forEach((runsScored, ballNumber) =>
         {
        if(runsScored % 2 === 1){
            if(this.playerOnStrike)
            {
               this.playerOnStrike.addRuns(runsScored);
               this.changeStrike();
            }
        }else{
            if(this.playerOnStrike)
            this.playerOnStrike.addRuns(runsScored);
            //this.changeStrike();
        }
        this.totalScore+= runsScored;
        if(this.playerOnStrike)
         this.playerOnStrike.addBallsFaced();

        if((ballNumber +1 ) % 6 ===0){
            this.changeStrike();
            this.numberOfOvers++;
        }
    });
    }

    changeStrike()
    {
        if(this.playerOnStrike === this.listofBatsman [0])
             {this.playerOnStrike = this.listofBatsman [1];}

        else
            this.playerOnStrike = this. listofBatsman [0];

    }

    printScore()
    {
        
        console.log("Total Runs Scored"+ this.totalScore+ " in "+this.numberOfOvers +" overs");
        //console.log("Total Runs Scored  ${this.totalScore} in ${this.numberOfOvers} overs");
        this.listofBatsman.forEach((playerName,runsScored)=>{ 
        if(this.playerOnStrike)
            console.log(playerName.playerName +"scored"+ playerName.numberOfRuns +" in" +playerName.numberOfBallsBatted +"Balls");
        });
    }
    
    addBatsman(batsman : Batsman)
    {
        this.listofBatsman.push(batsman);
    }
}