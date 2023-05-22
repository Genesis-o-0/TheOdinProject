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
