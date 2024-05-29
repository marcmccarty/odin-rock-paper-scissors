const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.id = "rock";
paperButton.id = "paper";
scissorsButton.id = "scissors";

rockButton.addEventListener("click", () => {
    getHumanChoice(rockButton.id);
})

paperButton.addEventListener("click", () => {
    getHumanChoice(paperButton.id);
})

scissorsButton.addEventListener("click", () => {
    getHumanChoice(scissorsButton.id);
})

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

function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
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
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    calculateFinalScores(computerScore, humanScore);
}