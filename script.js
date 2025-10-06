let userScore = 0;
let compScore = 0;

let resultContainer = document.querySelector('.results');
let p = document.createElement('p');
p.setAttribute('style', 'font-size: 26px; color: black; text-align: center;');
let userSpanPoints = document.createElement('span');
let compSpanPoints = document.createElement('span');
userSpanPoints.setAttribute('style', 'font-size: 26px; color: black; text-align: center;');
compSpanPoints.setAttribute('style', 'font-size: 26px; color: black; text-align: center;');

document.querySelectorAll('button')
    .forEach((button) => {
        button.addEventListener('click', (event) => {
            let compChoice = getComputerChoice();
            let userChoice = event.target.textContent;
            playRound(compChoice, userChoice);
        })
    })


function playRound(compChoice, userChoice) {
    if (compChoice === 'rock') {
        if (userChoice === 'rock') {
            showTheWinner('');
        } else if (userChoice === 'paper'){
            showTheWinner('User');
            userScore++;
        } else {
            showTheWinner('Comp');
            compScore++;
        }
    } else if (compChoice === 'paper'){
        if (userChoice === 'rock') {
            showTheWinner('Comp');
            compScore++;
        } else if (userChoice === 'paper'){
            showTheWinner('');
        } else {
            showTheWinner('User');
            userScore++;
        }
    } else if (compChoice === 'scissors'){
        if (userChoice === 'rock') {
            showTheWinner('User');
            userScore++;
        } else if (userChoice === 'paper'){
            showTheWinner('Comp');
            compScore++;
        } else {
            showTheWinner('');
        }
    }

    if (userScore >= 5 || compScore >= 5) {
        if (userScore >= 5) {
            p.textContent = "The User wins the game!";
        } else if (compScore >= 5){
            p.textContent = "The Comp wins the game!";
        }

        userSpanPoints.textContent = `User points: ${userScore}`;
        compSpanPoints.textContent = `Comp points: ${compScore}`;

        resultContainer.append(p, userSpanPoints, compSpanPoints);
    }
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

function showTheWinner(winnerName) {
    let roundContainer = document.querySelector('.round-winner-conatiner');

    roundContainer.textContent = winnerName !== "" ? `The ${winnerName} wins the round!` : 'Draw!';
}