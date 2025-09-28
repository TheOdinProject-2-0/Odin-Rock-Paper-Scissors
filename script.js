function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userChoice = prompt("Choose your item:", "rock, paper, scissors");

    return userChoice.toLowerCase().trim();
}

console.log(getHumanChoice());