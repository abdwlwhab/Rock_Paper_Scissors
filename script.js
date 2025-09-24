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

function getHumanChoice() {
  let HumanChoice = prompt("choose (Rock_Paper_scissors)");
  HumanChoice = HumanChoice.trim().toLowerCase();
  return HumanChoice;
}



function playRound(Human, Computer) {
  if (Human === "rock" && Computer === "paper") {
    console.log("you lose !");
    return "you lose !";
  } else if (Human === "paper" && Computer === "scissors") {
    console.log("you lose !");
    return "you lose !";
  } else if (Human === "scissors" && Computer === "rock") {
    console.log("you lose !");
    return "you lose !";
  } else if (Human === Computer) {
    console.log("tie !");
    return "you lose !";
  } else {
    console.log("you are the winer !!");
    return "you are the winer !!"
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "you lose !"){
        computerScore++;
    }
    else if (result === "you are the winer !!") {
        humanScore++;

    }
  }
  if (humanScore>computerScore){
    console.log("you are the winner hhhh")
  }
  else if (computerScore>humanScore)
    console.log("you lose !! hhhhh")
  else {
    console.log("it is a tie mmmmm")
  }
}
playGame();
