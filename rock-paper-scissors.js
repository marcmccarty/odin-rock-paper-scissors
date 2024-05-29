let computerScore = 0;
let humanScore = 0;
let round = 0;
let winnerDeclared = false;
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const gameContainer = document.createElement("div");
document.body.appendChild(gameContainer);

const buttons = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

const choices = document.createElement("div");
const choicesHeading = document.createElement("h1");
const computerChoiceHeading = document.createElement("h2");
const humanChoiceHeading = document.createElement("h2");

const scores = document.createElement("div");
const scoresHeading = document.createElement("h1");
const computerScoreHeading = document.createElement("h2");
const humanScoreHeading = document.createElement("h2");

const results = document.createElement("div");
const winnerHeading = document.createElement("h1");
const replayHeading = document.createElement("h2");

rockButton.textContent = ROCK;
paperButton.textContent = PAPER;
scissorsButton.textContent = SCISSORS;

rockButton.addEventListener("click", () => {
    if (!winnerDeclared) {
        playRound(ROCK);
    }
})

paperButton.addEventListener("click", () => {
    if (!winnerDeclared) {
        playRound(PAPER);
    }
})

scissorsButton.addEventListener("click", () => {
    if (!winnerDeclared) {
        playRound(SCISSORS);
    }
})

choicesHeading.textContent = "Choices";
computerChoiceHeading.textContent = "CPU: ";
humanChoiceHeading.textContent = "You: ";

scoresHeading.textContent = "Scores";
computerScoreHeading.textContent = "CPU: " + computerScore;
humanScoreHeading.textContent = "You: " + humanScore;

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

choices.appendChild(choicesHeading);
choices.appendChild(computerChoiceHeading);
choices.appendChild(humanChoiceHeading);

scores.appendChild(scoresHeading);
scores.appendChild(computerScoreHeading);
scores.appendChild(humanScoreHeading);

results.appendChild(winnerHeading);
results.appendChild(replayHeading);

gameContainer.appendChild(buttons);
gameContainer.appendChild(choices);
gameContainer.appendChild(scores);
gameContainer.appendChild(results);

function getComputerChoice() {
    let rng = Math.random();
    if (rng < (1/3)) {
        return ROCK;
    } else if (rng < 2/3) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function playRound(humanChoice = rockPaperScissors, computerChoice = getComputerChoice()) {
    if (computerChoice == ROCK) {
        if (humanChoice == PAPER) {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == SCISSORS) {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    if (computerChoice == PAPER) {
        if (humanChoice == SCISSORS) {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == ROCK) {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    if (computerChoice == SCISSORS) {
        if (humanChoice == ROCK) {
            humanScore += 1;
            console.log("You win!");
        } else if (humanChoice == PAPER) {
            computerScore += 1;
            console.log("CPU wins!");
        } else {
            console.log("It's a draw!");
        }
    }

    computerChoiceHeading.textContent = "CPU: " + computerChoice;
    humanChoiceHeading.textContent = "You: " + humanChoice;
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