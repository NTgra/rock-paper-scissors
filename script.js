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

const computerSelection = "";
const buttonRock = document.querySelector('#rock');

let manScore = 0;
let machineScore = 0;
let numberOfRounds = 1;
function playRound(playerSelection, computerSelection) {
    
    if (numberOfRounds===5){
        
        if (manScore>machineScore){
            winner.textContent="Man is the winner!";
        } else if (manScore<machineScore){
            winner.textContent="The machine won!";
        } else if(manScore==machineScore) {
            winner.textContent="Okay, it's a draw";
        }       
    }
    round.textContent = "Round: "+numberOfRounds;
    computerSelection = getComputerChoice();
    
    if (playerSelection === "rock") {
        numberOfRounds++;
        if (computerSelection === "scissors") {           
            manScore++;
            
            compChoice.textContent = "Machine selected scissors";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'man wins!';
        }
        if (computerSelection === "paper") {           
            machineScore++;
            
            compChoice.textContent = "Machine selected paper";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'machine wins!';
    
        } else {  
            compChoice.textContent = "Machine selected rock";
            score.textContent = manScore + " : " + machineScore;
            
            content.textContent = 'draw';         
        }
    } else if (playerSelection === "paper") {
        numberOfRounds++;
        if (computerSelection === "scissors") {
            machineScore++;
            compChoice.textContent = "Machine selected scissors";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'machine wins!';
            
        }
        if (computerSelection === "paper") { 
            compChoice.textContent = "Machine selected paper";
            score.textContent = manScore + " : " + machineScore;   
            content.textContent = 'draw!';     
            
        } else {           
            manScore++;
            compChoice.textContent = "Machine selected rock";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'man wins!';
            
        }
    } else if (playerSelection === "scissors") {
        numberOfRounds++;
        if (computerSelection === "scissors") { 
            compChoice.textContent = "Machine selected scissors";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'draw!';          
            
        }
        if (computerSelection === "paper") {
            manScore++;   
            compChoice.textContent = "Machine selected paper";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'man wins!'; 
            
        } else {            
            machineScore++;
            compChoice.textContent = "Machine selected rock";
            score.textContent = manScore + " : " + machineScore;
            content.textContent = 'machine wins!';
           
        }
    }    
  }
function game() {    
    return playRound();             
}

 const rock = document.querySelector('#rock');
 const paper = document.querySelector('#paper');
 const scissors = document.querySelector('#scissors');

 rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    choice.textContent = 'Player selected rock';

    playRound(playerSelection, computerSelection);
           
});
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    choice.textContent = 'Player selected paper';
    playRound(playerSelection, computerSelection);    
});
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    choice.textContent = 'Player selected scissors';
    playRound(playerSelection, computerSelection);    
});

const container = document.querySelector('#container');

const content = document.createElement('div');
const choice = document.createElement('p');
const compChoice = document.createElement('p');
const score = document.createElement('p');
const round = document.createElement('p');
const winner = document.createElement('div');
content.classList.add('content');
choice.classList.add('choice');

container.appendChild(round);
container.appendChild(choice);
container.appendChild(compChoice);
container.appendChild(content);
container.appendChild(score);
container.appendChild(winner);