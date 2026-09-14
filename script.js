// // Step 1

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


// // step 2
let humanScore = 0;
let computerScore = 0;

// // Step 3
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

// Step 4
const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.querySelector('#score');
const winnerDiv = document.getElementById('winner');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // button.id chính là 'rock', 'paper', hoặc 'scissors' lấy trực tiếp từ HTML
        let computerSelection = getComputerChoice();
        let result = playRound(button.id, computerSelection);

        resultsDiv.textContent = result;
        updateScore(result);
    });
});

function updateScore() {
    // 1. Luôn cập nhật điểm hiện tại ra màn hình trước
    scoreDiv.textContent = `Score - Player: ${humanScore} | Computer: ${computerScore}`;

    // 2. Kiểm tra xem đã có ai đạt 5 điểm chưa
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            winnerDiv.textContent = "🎉 Congratulations! You won the game!";
        } else {
            winnerDiv.textContent = "💻 Game Over! The computer won.";
        }

        // Vô hiệu hóa các nút bấm để kết thúc game
        disableButtons();
    }
}

// Hàm khóa 3 nút bấm
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}








