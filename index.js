function getComputerChoice () {
    let numChoice = Math.random();
    if (numChoice >= 0 && numChoice < 1/3) {
        return 'Rock';
    } else if (numChoice >= 1/3 && numChoice < 2/3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let choice;
    const choices = ['rock', 'paper', 'scissors'];
    while (!choices.includes(choice)) {
       choice = prompt('Enter choice (rock/paper/scissors):'
            , 'rock').toLowerCase();
    };
    console.log(choice);
}

console.log(getComputerChoice());
getHumanChoice();
