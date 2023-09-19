// Get Computer Choice function
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
// Get user Choice function
const getPlayerChoice = function () {
  return prompt('"rock", "paper", or "scissors"').toLowerCase();
};
// Player selection Declaration
let playerSelection;
// Computer selection Declaration
let computerSelection;

// Function for one Round
function playRound(playerSelection, computerSelection) {
  // Getting player selection
  playerSelection = getPlayerChoice();
  // Getting Computer selections
  computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    return "It's a tie";
  } else if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      return "You Win! Scissors beats Paper";
    } else {
      return "You Lose! Paper beats Rock";
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "paper") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }
}
// Game function (5 Rounds)

// Starting game
game();
