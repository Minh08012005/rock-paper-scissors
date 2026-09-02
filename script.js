// Step 2

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
// Step 3
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


// step 4
let humanScore = 0;
let computerScore = 0;

// Step 5
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

// step 6
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}
playGame();