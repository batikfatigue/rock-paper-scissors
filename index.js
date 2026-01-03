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

console.log(getComputerChoice());