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
//

const playerSelection = "paper";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(playerSelection + " " + computerSelection)
            return "The man wins";
        }
        if (computerSelection === "paper") {
            console.log(playerSelection + " " + computerSelection)
            return "The machine wins";
        } else {
            console.log(playerSelection + " " + computerSelection)
            return "It's a draw";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log(playerSelection + " " + computerSelection)
            return "The machine wins";
        }
        if (computerSelection === "paper") {
            console.log(playerSelection + " " + computerSelection)
            return "It's a draw";
        } else {
            console.log(playerSelection + " " + computerSelection)
            return "The man wins";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log(playerSelection + " " + computerSelection)
            return "It's a draw";
        }
        if (computerSelection === "paper") {
            console.log(playerSelection + " " + computerSelection)
            return "The machine wins";
        } else {
            console.log(playerSelection + " " + computerSelection)
            return "The man wins";
        }
    }
  }
console.log(playRound(playerSelection, computerSelection));


// rock > scissors
// scissors > paper
// paper > rock
