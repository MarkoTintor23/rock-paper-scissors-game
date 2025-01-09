const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultMessage = document.querySelector("#result-message");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const winPopup = document.querySelector("#win-popup");
const container = document.querySelector(".game-container");
const winnerMessage = document.querySelector("#winner-message");
const resetBtn = document.querySelector("#reset-button");

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
  container.classList.remove("hidden");
  winPopup.classList.add("hidden");
};

const removeClassHidden = function () {
  container.classList.add("hidden");
  winPopup.classList.remove("hidden");
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
    removeClassHidden();
    winnerMessage.textContent = `Player won with score: ${currentPlayerScore} vs Computer score: ${currentComputerScore}`;
  } else if (currentComputerScore === 5) {
    removeClassHidden();
    winnerMessage.textContent = `Computer won with score: ${currentComputerScore} vs Player score: ${currentPlayerScore}`;
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
    removeClassHidden();
    winnerMessage.textContent = `Player won with score: ${currentPlayerScore} vs Computer score: ${currentComputerScore}`;
  } else if (currentComputerScore === 5) {
    computerChoice.textContent = "❔";
    removeClassHidden();
    winnerMessage.textContent = `Computer won with score: ${currentComputerScore} vs Player score: ${currentPlayerScore}`;
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
    removeClassHidden();
    winnerMessage.textContent = `Player won with score: ${currentPlayerScore} vs Computer score: ${currentComputerScore}`;
  } else if (currentComputerScore === 5) {
    removeClassHidden();
    winnerMessage.textContent = `Computer won with score: ${currentComputerScore} vs Player score: ${currentPlayerScore}`;
  }
});

resetBtn.addEventListener("click", resetGame);
