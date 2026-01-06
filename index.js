
function getComputerChoice () {
    let numChoice = Math.random();
    if (numChoice >= 0 && numChoice < 1/3) {
        return 'rock';
    } else if (numChoice >= 1/3 && numChoice < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice;
    const choices = ['rock', 'paper', 'scissors'];
    while (!choices.includes(choice)) {
       choice = prompt('Enter choice (rock/paper/scissors):'
            , 'scissors').toLowerCase();
    };
    console.log(choice);
    return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const MOVES = {
        "rock": 0,
        "scissors": 2,
        "paper": 1
    };

    function playRound(humanChoice, computerChoice) {
        let result = ((MOVES[humanChoice] - MOVES[computerChoice]) % 3 + 3) % 3;
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
        if (result === 1) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            computerScore--;
        } else if (result === 2) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            humanScore--;
            computerScore++;
        } else {
            console.log(`It's a tie! Both threw ${computerChoice}!`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
}

playGame();


