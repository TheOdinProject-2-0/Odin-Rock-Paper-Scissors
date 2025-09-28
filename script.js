let userScore = 0;
let compScore = 0;

for (let i = 1; i <= 5; i++) {
    playGame();
    
    console.log(userScore);
    console.log(compScore);
}

if (userScore > compScore) {
    alert(`THE USER WINS THE GAME!`);
} else if (compScore > userScore){
    alert(`THE COMP WINS THE GAME!`);
} else {
    alert(`THE GAME IS DRAW.NOBODY WINS!`);
}

function playGame(){
    function playRound(compChoice, userChoice) {
        if (compChoice === 'rock') {
            if (userChoice === 'rock') {
                console.log("Draw!");
            } else if (userChoice === 'paper'){
                console.log("User wins!");
                userScore++;
            } else {
                console.log("Comp wins!");
                compScore++;
            }
        } else if (compChoice === 'paper'){
            if (userChoice === 'rock') {
                console.log("Comp wins!");
                compScore++;
            } else if (userChoice === 'paper'){
                console.log("Draw!");
            } else {
                console.log("User wins!");
                userScore++;
            }
        } else if (compChoice === 'scissors'){
            if (userChoice === 'rock') {
                console.log("User wins!");
                userScore++;
            } else if (userChoice === 'paper'){
                console.log("Comp wins!");
                compScore++;
            } else {
                console.log("Draw!");
            }
        }
    }

    let compChoice = getComputerChoice();
    let userChoice = getUserChoice();

    playRound(compChoice, userChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    let userChoice = prompt("Choose your item:", "rock, paper, scissors");

    return userChoice.toLowerCase().trim();
}