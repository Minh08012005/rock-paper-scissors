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

function getHumanChoice() {
    let input = prompt("Do you choose rock, paper or scissors?");
    input = input.toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else {
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return getHumanChoice(); // Prompt again for valid input
    }
}
console.log(getHumanChoice());