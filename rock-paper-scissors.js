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
    let normalizedHumanChoice;
    
    if (humanChoice != null) {
        normalizedHumanChoice = humanChoice.replaceAll('"','').trim().toLowerCase();
    } else {
        return "cancel";
    }
    
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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let cancelStatus = "keep playing";
    
    function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
        // You hit the Cancel button.
        if (humanChoice == "cancel") {
            console.log("You hit the Cancel button. Thank you for playing.");
            return humanChoice;
        } else {
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

            return "keep playing"
        }
    }

    // Round 1 (Allows user to get out of having to play 5 rounds if they want to quit)
    console.log("\nRound 1 of 5");
    cancelStatus = playRound();

    if (cancelStatus != "cancel") {
        // Rounds 2 -> 5
        for (i = 2; i <= 5; i++) {
            if (cancelStatus != "cancel") {
                console.log("\nRound " + i + " of 5");
                cancelStatus = playRound();
            } else {
                i = 6;
            }
        }
    }

    calculateFinalScores(computerScore, humanScore);
}