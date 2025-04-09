// much simpler with arrays, simple index comparison can significantly improve the code.
console.log("Hello World!")
function getComputerChoice() {
    let comp_random = Math.random();
    if (comp_random <= 0.33) {
        return "rock";
    } else if (comp_random > 0.33 && comp_random <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    let human_choice = prompt("Enter your choice:");
    console.log(human_choice);
    return human_choice;
};

let human_score = 0;
let comp_score = 0;

function playRound(human_choice, comp_choice) {
    human_choice = human_choice.toLowerCase();
    if (human_choice == "rock" && comp_choice == "paper") {
        console.log("You lose! Paper beats Rock!");
        comp_score += 1;
        return;
    }
    else if (human_choice == "scissors" && comp_choice == "rock") {
        console.log("You lose! Rock beats Scissors!");
        comp_score += 1;
        return;
    }
    else if (human_choice == "paper" && comp_choice == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        comp_score += 1;
        return;
    }
    else if (human_choice == "scissors" && comp_choice == "paper") {
        console.log("You win! Scissors beats Paper!");
        human_score += 1;
        return;
    }
    else if (human_choice == "rock" && comp_choice == "scissors") {
        console.log("You win! Rock beats Scissors!");
        human_score += 1;
        return;
    }
    else if (human_choice == "paper" && comp_choice == "rock") {
        console.log("You win! Paper beats Rock!");
        human_score += 1;
        return;
    }
    else {
        console.log("It's a draw!");
        return;
    };
};

function playGame(n) {
    for (i = 0; i<n; i++) {
        var human_choice = getHumanChoice();
        var comp_choice = getComputerChoice();
        playRound(human_choice, comp_choice);
    };
    if (human_score > comp_score) {
        console.log("You win!");
    } else if (human_score < comp_score) {
        console.log("You lose!");
    } else {
        console.log("It's a draw!");
    };
};

playGame(5);