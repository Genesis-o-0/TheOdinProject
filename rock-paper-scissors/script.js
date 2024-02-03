// Declaring variable and selecting elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let compScore = document.getElementById("com-score");
let userScore = document.getElementById("user-score");
let result = document.getElementById("result");
const playerChoices = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalResult = document.getElementById("modal-result");
const playAgainBtn = document.getElementById("play-again");
let playerChoice;
let play = true;
// Get Computer Choice function
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  const Choices = ["rock", "paper", "scissors"];
  return Choices[randomNumber];
};
// Get user Choice function
const getPlayerChoice = playerChoices.forEach(function (choice) {
  choice.addEventListener("click", getPlayerChoiceAndPlay);
});
function getPlayerChoiceAndPlay(e) {
  if (play) {
    playerChoice = e.target.id;
    // player round for each user choice
    playRound();
  } else {
    playerChoices.forEach(function (choice) {
      choice.removeEventListener("click", getPlayerChoiceAndPlay);
    });
  }
}
// check for winner
function checkForWinner() {
  if (
    parseInt(userScore.innerText) === 5 &&
    parseInt(userScore.innerText) > parseInt(compScore.innerText)
  ) {
    result.innerText = "Congratulations, You Win 🏆";
    modalResult.innerText = "Congratulations, You Win 🏆";
    play = false;
    modal.style.display = "flex";
    playAgain();
  } else if (
    parseInt(compScore.innerText) === 5 &&
    parseInt(compScore.innerText) > parseInt(userScore.innerText)
  ) {
    result.innerText = "Game Over, Comp Wins 😭";
    modalResult.innerText = "Game Over, Comp Wins 😭";
    play = false;
    modal.style.display = "flex";
    playAgain();
  }
}

// Player selection Declaration
let playerSelection;
// Computer selection Declaration
let computerSelection;

// Function for one Round
function playRound() {
  // Getting player selection
  playerSelection = playerChoice;
  // Getting Computer selections
  computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    result.innerText = "It's a tie";
  } else if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      result.innerText = "Paper beats Rock";
      userScore.innerText = parseInt(userScore.innerText) + 1;
    } else {
      result.innerText = "Rock beats Scissors";
      compScore.innerText = parseInt(compScore.innerText) + 1;
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      result.innerText = "Scissors beats Paper";
      userScore.innerText = parseInt(userScore.innerText) + 1;
    } else {
      result.innerText = "Paper beats Rock";
      compScore.innerText = parseInt(compScore.innerText) + 1;
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "paper") {
      result.innerText = "Scissors beats Paper";
      compScore.innerText = parseInt(compScore.innerText) + 1;
    } else {
      result.innerText = "Rock beats Scissors";
      userScore.innerText = parseInt(userScore.innerText) + 1;
    }
  }
  checkForWinner();
}

function playAgain() {
  playAgainBtn.addEventListener("click", reset);
}
function reset() {
  modal.style.display = "none";
  result.innerText = "First to score 5 points wins the game";
  compScore.innerText = "0";
  userScore.innerText = "0";
  play = true;
}
