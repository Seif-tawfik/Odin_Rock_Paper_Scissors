

function getComputerChoice(){
    list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random() * 3) ];
}

function getHumanChoice(){
    return prompt("enter rock, paper, or scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("tie");
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            console.log("you lose! paper beats rock");
        }
        else {
            humanScore++;
            console.log("you win! rock beats scissors");
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore++;
            console.log("you lose! scissors beats paper");
        }
        else {
            humanScore++;
            console.log("you win! paper beats rock");
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
            console.log("you lose! rock beats scissors");
        }
        else {
            humanScore++;
            console.log("you win! scissors beats paper");
        }
    }


}

function playGame (){
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`you chose ${humanChoice} and the computer chose ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`your score is ${humanScore} and the computer score is ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log("you win the game!");
    }
    else if (humanScore < computerScore){
        console.log("you lose the game!");
    }
    else {
        console.log("the game is a tie!");
    }
}
playGame(); 