/* Thinking it through:
 * What are the functional active components we need?
 * 
 * A way to keep score
 * the user's choice
 * a random computer choice
 * a way to update the webpage to show this */

let userScore = 0;
let computerScore = 0;

/* caching the DOM */

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

const scoreBoard_div = document.querySelector(".scoreboard");
const results_div = document.querySelector(".results");

// Above sets up the ability to have functionality!

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0: return("Rock");
        case 1: return("Paper"); 
        case 2: return("Scissors");
    }
}

function win(userChoice, computerChoice) {
    //console.log("You won! User: " + userChoice + " Computer: " + computerChoice);
    const userChoice_div = document.getElementById(userChoice);
    let winString = ("You won! User: " + userChoice + ", Computer: " + computerChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    // results_div.innerHTML = (userChoice + " beats " + computerChoice + "!"); (this was me trying to make it work on my own)
    results_div.innerHTML = winString;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 750);
}

function lose(userChoice, computerChoice) {
    //console.log("You lost! User: " + userChoice + " Computer: " + computerChoice);
    const userChoice_div = document.getElementById(userChoice);
    let loseString = ("You lost! User: " + userChoice + ", Computer: " + computerChoice);
    computerScore++;
    compScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    results_div.innerHTML = loseString;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 750);
}

function draw(userChoice, computerChoice){
    //console.log("You tied! User: " + userChoice + " Computer: " + computerChoice);
    const userChoice_div = document.getElementById(userChoice);
    let drawString = ("It was a tie. Try again");
    results_div.innerHTML = drawString;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 750);
}

function game(userChoice) {
   let computerChoice = getComputerChoice();
    //console.log("User: " + userChoice + ", Computer: " + computerChoice);
    
    switch (userChoice + computerChoice) {
        case "PaperRock": // winning case!
        case "RockScissors": // winning case!
        case "ScissorsPaper": // winning case!
            win(userChoice, computerChoice);
            break;
        case "RockPaper": // loosing case
        case "PaperScissors": // loosing case
        case "ScissorsRock": // loosing case
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;   
    }
}

main();

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    });
    paper_div.addEventListener('click', function() {
        game("Paper");
    });
    scissors_div.addEventListener('click', function() {
        game("Scissors");
    });
}



















