function getComputerChoice() {
  let ComputerChoice = Math.round(Math.random() * 2);

  if (ComputerChoice === 0) {
    ComputerChoice = "rock";
  } else if (ComputerChoice === 1) {
    ComputerChoice = "paper";
  } else if (ComputerChoice === 2) {
    ComputerChoice = "scissors";
  }
  return ComputerChoice;
}

// function getHumanChoice() {
//   let HumanChoice = prompt("choose (Rock_Paper_scissors)");
//   HumanChoice = HumanChoice.trim().toLowerCase();
//   return HumanChoice;
// }

let resultHuman = document.querySelector(".resultHuman");
let resultComputer = document.querySelector(".resultComputer");
let resultTie = document.querySelector(".resultTie");

let humanScore = 0;
let computerScore = 0;
let tie = 0;

let rounds = 0 ;
const maxRounds = 5 ;

function playRound(Human, Computer) {
  if(rounds>=maxRounds){return}

  
    if (Human === "rock" && Computer === "paper") {
      
      result.textContent='you lost !'
      computerScore++;
      
    } else if (Human === "paper" && Computer === "scissors") {
      
      result.textContent='you lost !'
      computerScore++;

    } else if (Human === "scissors" && Computer === "rock") {
      
      result.textContent='you lost !'
      computerScore++;
      
    } else if (Human === Computer) {
      
      result.textContent='Tie !'
      tie++;
      
    } else {
      
      result.textContent="  you are the winer !!";
      humanScore++;
      
    }

  rounds++;

 
    resultHuman.textContent = humanScore;
 
    resultComputer.textContent = computerScore;
  
    resultTie.textContent = tie;

  if (rounds === maxRounds) {
  if (humanScore > computerScore) {
    document.querySelector(".winner").textContent = "🎉 you are the Winner!";
  } else if (computerScore > humanScore) {
    document.querySelector(".winner").textContent = "🤖 Computer is the Winner!";
  } else {
    document.querySelector(".winner").textContent = "⚖️ It's a Tie!";
  }
}

}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);
//     if (result === "you lose !"){
//         computerScore++;
//     }
//     else if (result === "you are the winer !!") {
//         humanScore++;

//     }

//      if (humanScore>computerScore){console.log(`you are the winner hhhh your score is :${humanScore}`)}

//     else if (computerScore>humanScore){console.log("you lose !! hhhhh")}

//     else {console.log("it is a tie mmmmm")}
//   }

const result = document.querySelector(".result");

const rockBtn = document.querySelector(".img-box.Rock");
rockBtn.addEventListener(
  "click",
  () => (playRound("rock", getComputerChoice()))
);

const paperBtn = document.querySelector(".img-box.paper");
paperBtn.addEventListener(
  "click",
  () => ( playRound("paper", getComputerChoice()))
);

const scissorsBtn = document.querySelector(".img-box.scissors");
scissorsBtn.addEventListener(
  "click",
  () => ( playRound("scissors", getComputerChoice()))
);
