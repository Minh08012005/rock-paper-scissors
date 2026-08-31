function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    }
    else if (randomNumber <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(getComputerChoice());