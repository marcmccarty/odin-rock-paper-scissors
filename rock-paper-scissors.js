let computerScore = 0;
let humanScore = 0;
let winnerDeclared = false;

const gameContainer = document.createElement("div");
document.body.appendChild(gameContainer);

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.id = "rock";
rockButton.textContent = "Rock";

paperButton.id = "paper";
paperButton.textContent = "Paper";

scissorsButton.id = "scissors";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => {
    playRound(rockButton.id);
})

paperButton.addEventListener("click", () => {
    playRound(paperButton.id);
})

scissorsButton.addEventListener("click", () => {
    playRound(scissorsButton.id);
})

const results = document.createElement("div");
const computerScoreHeading = document.createElement("h2");
const humanScoreHeading = document.createElement("h2");
const winnerHeading = document.createElement("h1");
const replayHeading = document.createElement("h2");

computerScoreHeading.textContent = "CPU: " + computerScore;
humanScoreHeading.textContent = "You: " + humanScore;

results.appendChild(computerScoreHeading);
results.appendChild(humanScoreHeading);
results.appendChild(winnerHeading);
results.appendChild(replayHeading);

gameContainer.appendChild(rockButton);
gameContainer.appendChild(paperButton);
gameContainer.appendChild(scissorsButton);
gameContainer.appendChild(results);


function getComputerChoice() {
    let rng = Math.random();
    if (rng < (1/3)) {
        return "rock";
    } else if (rng < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(rockPaperScissors) {
    return rockPaperScissors;
}

function calculateFinalScores(computerScore = 0, humanScore = 0) {
    console.log("\nFinal Scores");
    console.log("CPU: " + computerScore);
    console.log("You: " + humanScore);

    if (computerScore > humanScore) {
        console.log("\nCPU wins!");
    } else if (humanScore > computerScore) {
        console.log("\nYou win!");
    } else {
        console.log("\nIt's a draw!")
    }
}

function playRound(humanChoice = getHumanChoice(rockPaperScissors), computerChoice = getComputerChoice()) {
    // CPU: "Rock!"
    if (computerChoice == "rock") {
        console.log("CPU: \"Rock!\"");
        if (humanChoice == "paper") {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == "scissors") {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    // CPU: "Paper!"
    if (computerChoice == "paper") {
        console.log("CPU: \"Paper!\"");
        if (humanChoice == "scissors") {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == "rock") {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    // CPU: "Scissors!"
    if (computerChoice == "scissors") {
        console.log("CPU: \"Scissors!\"");
        if (humanChoice == "rock") {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == "paper") {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    computerScoreHeading.textContent = "CPU: " + computerScore;
    humanScoreHeading.textContent = "You: " + humanScore;

    if (computerScore == 5 && !winnerDeclared) {
        winnerHeading.textContent = "CPU Wins!";
        winnerDeclared = true;
    }
    if (humanScore == 5 && !winnerDeclared) {
        winnerHeading.textContent = "You Win!";
        winnerDeclared = true;
    }
    if (winnerDeclared) {
        replayHeading.textContent = "To play again, refresh the page!";
    }
}