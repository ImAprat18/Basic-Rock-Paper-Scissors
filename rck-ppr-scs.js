// much simpler with arrays, simple index comparison can significantly improve the code.
console.log("Hello World!");

// the following are triggered by each round and/or tied to event listeners
const resultdiv = document.createElement("div");
const restartbtn = document.createElement("button");
const scoreboard = document.createElement("div");
const declaration = document.createElement("div");

// the following are sourced from the original HTML document
const titleDiv = document.querySelector("#titletext");
const btnDiv = document.querySelector("#btndiv");
const btn = document.querySelectorAll(".btn");

// easier to generate a random choice for the computer using a library
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

let human_score = 0;
let comp_score = 0;

restartbtn.style.cssText = "display: block; margin: 0 auto; background-color: purple; color: white; font-size: 25px;";

declaration.textContent = "Click your choice!"
declaration.style.cssText = "text-align: center; padding: 20px; background-color: purple; font-size: 20px; color: yellow;";
document.body.appendChild(declaration);

scoreboard.style.cssText = "text-align: center; padding: 20px; font-size: 20px; background-color: yellow; color: purple;";
scoreboard.textContent = `Computer: ${comp_score} \n User: ${human_score}`;
document.body.appendChild(scoreboard);

// the score calculation function 
function playRound(human_choice, comp_choice) {
    human_choice = human_choice.toLowerCase();
    if (human_choice == "rock" && comp_choice == "paper") {
        declaration.textContent = "You lose! Paper beats Rock!";
        comp_score += 1;
    }
    else if (human_choice == "scissors" && comp_choice == "rock") {
        declaration.textContent = "You lose! Rock beats Scissors!";
        comp_score += 1;
    }
    else if (human_choice == "paper" && comp_choice == "scissors") {
        declaration.textContent = "You lose! Scissors beats Paper!";
        comp_score += 1;
    }
    else if (human_choice == "scissors" && comp_choice == "paper") {
        declaration.textContent = "You win! Scissors beats Paper!";
        human_score += 1;
    }
    else if (human_choice == "rock" && comp_choice == "scissors") {
        declaration.textContent = "You win! Rock beats Scissors!";
        human_score += 1;
    }
    else if (human_choice == "paper" && comp_choice == "rock") {
        declaration.textContent = "You win! Paper beats Rock!";
        human_score += 1;
    }
    else {
        declaration.textContent = "It's a draw!";
    };
    scoreboard.textContent = `Computer: ${comp_score} \n User: ${human_score}`;
    return;
};

// restart button would only appear at the end of 5 rounds
restartbtn.textContent = "Restart";
restartbtn.addEventListener('click', () => {
    window.location.reload();
});

resultdiv.style.cssText = "padding: 20px; justify-contents: center; align-items: center; font-size: 30px; text-align: center";
function finalresults(comp_score, human_score) {
    if (human_score > comp_score) {
        resultdiv.style.backgroundColor = "lightblue";
        resultdiv.style.color = "green";
        resultdiv.textContent = "You WIN!";
    }
    else if (comp_score > human_score) {
        resultdiv.style.backgroundColor = "black";
        resultdiv.style.color = "red";
        resultdiv.textContent = "You LOSE!";        
    }
    else {
        resultdiv.style.backgroundColor = "gray";
        resultdiv.style.color = "yellow";
        resultdiv.textContent = "It's a DRAW!";
    };
    document.body.appendChild(resultdiv);
    document.body.appendChild(restartbtn);
};

titleDiv.style.cssText = "background-color: purple; color: white; text-align: center; font-size: large; font-weight: 600; padding:40px";

titleDiv.addEventListener('mouseover', () => {
    titleDiv.style.cssText = "background-color: lightblue; color: black; text-align: center; font-size: large; font-weight: 600; padding:40px";
    titleDiv.style.transition = "background-color 0.3s";
});
titleDiv.addEventListener('mouseout', () => {
    titleDiv.style.cssText = "background-color: purple; color: white; text-align: center; font-size: large; font-weight: 600; padding:40px";
    titleDiv.style.transition = "background-color 0.3s";
});
titleDiv.addEventListener('click', () => {
    window.location.reload();
});

btnDiv.style.cssText = "background-color: yellow; padding: 20px; display: flex; justify-content: center; align-items: center; gap: 80px;"

let n = 0; // counter for rounds

btn.forEach(button => {
    button.style.cssText = "background-color: cyan; color: black; padding: 10px; font-size: 20px; font-family: papyrus;";
    button.addEventListener('click', (e) => {
        n += 1;
        if (n < 5) {
            const human_choice = e.target.textContent;
            const comp_choice = getComputerChoice();
            playRound(human_choice, comp_choice);
        }
        else {
            const human_choice = e.target.textContent;
            const comp_choice = getComputerChoice();
            playRound(human_choice, comp_choice);
            if (n >= 5) {
                btn.forEach(b => b.disabled = true); // ensures user cannot keep clicking indefinitely
            };
            finalresults(comp_score, human_score);
        };
    });
    button.addEventListener('mouseover', () => {
        button.style.cssText = "background-color: blue; color: white; padding: 10px; font-size: 20px; font-family: papyrus;";
        button.style.transition = "background-color 0.3s";
    });
    button.addEventListener('mouseout', () => {
        button.style.cssText = "background-color: cyan; color: black; padding: 10px; font-size: 20px; font-family: papyrus;";
        button.style.transition = "background-color 0.3s";
    });
});