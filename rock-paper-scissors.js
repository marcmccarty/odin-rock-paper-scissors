let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("Please choose \"Rock\", \"Paper\", or \"Scissors\" by typing your selection below:");
    let normalizedHumanChoice = humanChoice.replaceAll('"','').trim().toLowerCase();
    if (normalizedHumanChoice == "rock") {
        console.log("You: \"Rock!\"");
        return normalizedHumanChoice;
    } else if (normalizedHumanChoice == "paper") {
        console.log("You: \"Paper!\"");
        return normalizedHumanChoice;
    } else if (normalizedHumanChoice == "scissors") {
        console.log("You: \"Scissors!\"");
        return normalizedHumanChoice;
    } else {
        console.log("Your response was: " + humanChoice);
        console.log("Please type either \"Rock\", \"Paper\", or \"Scissors\" next time.");
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