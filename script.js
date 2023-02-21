// the computer makes the first choice
//      use the random generator for this

function getComputerChoice(){
    let verbalRepresentation = "";
    let theNumber = Math.floor(Math.random()*3);
    if (theNumber === 0) {
        verbalRepresentation = "rock"
    } else if (theNumber === 1){
        verbalRepresentation = "paper";
    } else {
        verbalRepresentation = "scissors";
    }
    return verbalRepresentation;
}

// the user makes the second choice
//      accept his input as a string.toLowerCase()

const playerSelection = "";
const computerSelection = "";
let manScore = 0;
let machineScore = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection=prompt().toLowerCase();
    computerSelection = getComputerChoice();
    console.log("Man: "+playerSelection + " Machine: " + computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {           
            manScore++;
            return "man wins!";
        }
        if (computerSelection === "paper") {           
            machineScore++;
            return "machine wins!";
        } else {           
            return "draw";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            machineScore++;
            return "machine wins!";
        }
        if (computerSelection === "paper") {           
            return "draw";
        } else {           
            manScore++;
            return "man wins!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {           
            return "draw";
        }
        if (computerSelection === "paper") {
            manScore++;    
            return "man wins!";
        } else {            
            machineScore++;
            return "machine wins!";
        }
    }
  }
function game() { 
    return playRound(playerSelection, computerSelection);             
}
for (let i = 0; i < 5; i++) {
    console.log(game());
    console.log("Round "+Number(i+1)+". Total score: Man has "+manScore+" points; Machine has "+machineScore+" points");   
    if (i===4&&manScore>machineScore){
        alert("Game over. The man wins!");       
    } if (i===4&&manScore<machineScore){
        alert("Game over. The machine wins!");       
    } if (i===4&&manScore===machineScore){
        alert("It's a draw :(");        
    }
 }
