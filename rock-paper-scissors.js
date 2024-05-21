function getComputerChoice() {
    let rng = Math.random();
    if (rng < (1/3)) {
        return "CPU: \"Rock!\"";
    } else if (rng < 2/3) {
        return "CPU: \"Paper!\"";
    } else {
        return "CPU: \"Scissors!\"";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose \"Rock\", \"Paper\", or \"Scissors\" by typing your selection below:");
    let normalizedHumanChoice = humanChoice.replaceAll('"','').trim().toLowerCase();
    if (normalizedHumanChoice == "rock") {
        return "You: \"Rock!\"";
    } else if (normalizedHumanChoice == "paper") {
        return "You: \"Paper!\"";
    } else if (normalizedHumanChoice == "scissors") {
        return "You: \"Scissors!\"";
    } else {
        console.log("Your response was: " + humanChoice);
        console.log("Please type either \"Rock\", \"Paper\", or \"Scissors\" next time.");
    }
}