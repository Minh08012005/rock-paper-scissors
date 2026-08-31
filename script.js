function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return choices[0];
    }
    else if (randomNumber <= 0.67) {
        return choices[1];
    }
    else {
        return choices[2];
    }
}

console.log(getComputerChoice());