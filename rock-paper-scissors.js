function getComputerChoice() {
    let rng = Math.random();
    if (rng < (1/3)) {
        return "Rock!";
    } else if (rng < 2/3) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}