const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultMessage = document.querySelector("#result-message");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

let currentPlayerScore = 0;
let currentComputerScore = 0;

const randomComputer = function () {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const resetGame = function () {
  playerChoice.textContent = "❔";
  computerChoice.textContent = "❔";
  currentPlayerScore = 0;
  currentComputerScore = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
};

rock.addEventListener("click", function () {
  playerChoice.textContent = "✊";
  let computerMove = randomComputer();
  computerChoice.textContent =
    computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
  if (computerMove === "paper") {
    currentComputerScore++;
    computerScore.textContent = currentComputerScore;
    resultMessage.textContent = "Computer wins this round!";
  } else if (computerMove === "scissors") {
    currentPlayerScore++;
    playerScore.textContent = currentPlayerScore;
    resultMessage.textContent = "Player wins this round!";
  } else {
    resultMessage.textContent = "It's a draw!";
  }
  if (currentPlayerScore === 5) {
    alert("Player Won!!");
    resetGame();
  } else if (currentComputerScore === 5) {
    alert("Computer Won!!");
    resetGame();
  }
});

paper.addEventListener("click", function () {
  playerChoice.textContent = "✋";
  computerMove = randomComputer();
  computerChoice.textContent =
    computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
  if (computerMove === "rock") {
    currentPlayerScore++;
    playerScore.textContent = currentPlayerScore;
    resultMessage.textContent = "Player wins this round!";
  } else if (computerMove === "scissors") {
    currentComputerScore++;
    computerScore.textContent = currentComputerScore;
    resultMessage.textContent = "Computer wins this round!";
  } else {
    resultMessage.textContent = "It's a draw!";
  }
  if (currentPlayerScore === 5) {
    alert("Player Won!!");
    resetGame();
  } else if (currentComputerScore === 5) {
    computerChoice.textContent = "❔";
    alert("Computer Won!!");
    resetGame();
  }
});
scissors.addEventListener("click", function () {
  playerChoice.textContent = "✌️";
  computerMove = randomComputer();
  computerChoice.textContent =
    computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
  if (computerMove === "paper") {
    currentPlayerScore++;
    playerScore.textContent = currentPlayerScore;
    resultMessage.textContent = "Player wins this round!";
  } else if (computerMove === "rock") {
    currentComputerScore++;
    computerScore.textContent = currentComputerScore;
    resultMessage.textContent = "Computer wins this round!";
  } else {
    resultMessage.textContent = "It's a draw!";
  }

  if (currentPlayerScore === 5) {
    alert("Player Won!!");
    resetGame();
  } else if (currentComputerScore === 5) {
    alert("Computer Won!!");
    resetGame();
  }
});
