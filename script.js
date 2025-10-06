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



function playRound(Human, Computer) {
  if (Human === "rock" && Computer === "paper") {
    console.log("you lose !! hhhhh")
    return "you lose !";
  } else if (Human === "paper" && Computer === "scissors") {
    console.log("you lose !! hhhhh")
    return "you lose !";
  } else if (Human === "scissors" && Computer === "rock") {
    console.log("you lose !! hhhhh")
    return "you lose !";
  } else if (Human === Computer) {
    console.log("tie")
    return "tie";
  } else {
    console.log(`you are the winner hhhh `)
    return "you are the winer !!"
  }
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "you lose !"){
        computerScore++;
    }
    else if (result === "you are the winer !!") {
        humanScore++;

    }
  
     if (humanScore>computerScore){console.log(`you are the winner hhhh your score is :${humanScore}`)}

    else if (computerScore>humanScore){console.log("you lose !! hhhhh")}
    
    else {console.log("it is a tie mmmmm")}
  }
 
const result =document.querySelector('.result')



  const rockBtn = document.querySelector(".img-box.Rock")
  rockBtn.addEventListener('click' , () => result.textContent=playRound('rock',getComputerChoice()))

  const paperBtn = document.querySelector(".img-box.paper")
  paperBtn.addEventListener('click' , () => result.textContent=playRound('paper',getComputerChoice()))


  const scissorsBtn = document.querySelector(".img-box.scissors")
  scissorsBtn.addEventListener('click' , () => result.textContent=playRound('scissors',getComputerChoice()))

