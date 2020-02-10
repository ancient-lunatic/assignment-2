class RockPappeSecissorGame
{   
    userPoint:number;
    computerPoint:number;
    constructor(private readonly rule:string[][])
    {
        this.rule = [['Tie','Loose','Win'],['Win','Tie','Loose'],['Loose','Win','Tie']];
        this.userPoint = 0;
        this.computerPoint=0;

    }

    play(id:string)
    {
     
        let userChoice:number= parseInt(id)
        let computerChoice = Math.floor(Math.random()*3);
        this.computerMove(computerChoice)
        let result = (document.getElementById('output')as HTMLDivElement)
        
        if(this.rule[userChoice][computerChoice]==='Tie')
        {
            result.innerText = "It's a Tie.. Well Played.." 
            this.userPoint++;
            this.computerPoint++;

        }
        else if(this.rule[userChoice][computerChoice]==='Win')
        {
            result.innerText = "Well Played.. You Won.." 
            this.userPoint++;
        }
        else
        {
            result.innerText = "Computer Won..."
            this.computerPoint++;
        }
        this.GenerateResult();
    }

    computerMove(computerChoice:number)
    {
        if(computerChoice===0)
        document.getElementById("computerMove").innerText = "Computer choose Rock"
        else if(computerChoice===1)
        document.getElementById("computerMove").innerText = "Computer choose Paper"
        else
        document.getElementById("computerMove").innerText = "Computer choose scissor"
        
    }

    GenerateResult()
    {
        (document.getElementById("userPoint")as HTMLSpanElement).innerText = (this.userPoint).toString();
        (document.getElementById("computerPoint")  as HTMLSpanElement).innerText = this.computerPoint.toString();
    }

    rematch()
    {
        this.userPoint = 0;
        this.computerPoint=0;
        document.getElementById("output").innerHTML= "lets take a chance..."
        this.GenerateResult();  
    }

}

