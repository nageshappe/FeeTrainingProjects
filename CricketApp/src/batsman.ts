import { Player } from "./player";

export class Batsman extends Player {

    private numberOfRunsScored : number;
    private numberofBallsFaced : number;

    constructor(name:string){
        super(name);
        this.numberOfRunsScored = 0;
        this.numberofBallsFaced =0 ;
     }
 
     get numberOfRuns() {
         return this.numberOfRunsScored;
     }

     get numberOfBallsBatted(){
         return this.numberofBallsFaced
     }

     addRuns(run : number){
         this.numberOfRunsScored+=run;
     }

     addBallsFaced()
     {
         this.numberofBallsFaced++;
     }
}