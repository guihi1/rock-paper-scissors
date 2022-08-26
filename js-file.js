let yourWins = 0;
let compWins = 0;
const roundResult = document.createElement("h3");
const finalResult = document.createElement("h3");
const results = document.querySelector(".results");
results.appendChild(roundResult);
results.appendChild(finalResult);


function getComputerChoice(){
    let randomNum = Math.random();
    if (randomNum <= 0.33){
        return "rock";
    } else if (randomNum <= 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        compWins++;
        displayResults();
        roundResult.textContent = "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        yourWins++;
        displayResults();
        roundResult.textContent = "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        compWins++;
        displayResults();
        roundResult.textContent = "You lose! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        yourWins++;
        displayResults();
        roundResult.textContent = "You win! Paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        compWins++;
        displayResults();
        roundResult.textContent = "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        yourWins++;
        displayResults();
        roundResult.textContent = "You win! Scissors beat paper";
}
}

function displayResults(){
    if(yourWins === 5){
        finalResult.textContent = `Victory! Final result: ${yourWins} : ${compWins}`;
        document.querySelectorAll(".game").forEach(el => el.setAttribute('disabled', true));
        playAgain();
    } else if(compWins === 5){
        finalResult.textContent = `Defeat! Final result ${yourWins} : ${compWins}`;
        document.querySelectorAll(".game").forEach(el => el.setAttribute('disabled', true));
        playAgain();
    } else {
        finalResult.textContent = `Your wins: ${yourWins}\t\tOpponent's wins: ${compWins}`;
    } 
}

function playAgain(){
    const play = document.createElement("button");
    play.classList.add("play");
    play.textContent = "Play Again";
    results.appendChild(play);
    play.addEventListener("click", () => {;
    yourWins = 0;
    compWins = 0;
    document.querySelectorAll(".game").forEach(el => el.setAttribute('disabled', false));
    roundResult.textContent = "";
    finalResult.textContent = "";
    results.removeChild(play);
})
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
});