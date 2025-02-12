class Game {
  constructor() {
    this.rock = document.querySelector("#rock");
    this.paper = document.querySelector("#paper");
    this.scissors = document.querySelector("#scissors");
    this.resultMessage = document.querySelector("#result-message");
    this.playerChoice = document.querySelector("#player-choice");
    this.computerChoice = document.querySelector("#computer-choice");
    this.playerScore = document.querySelector("#player-score");
    this.computerScore = document.querySelector("#computer-score");
    this.winPopup = document.querySelector("#win-popup");
    this.container = document.querySelector(".game-container");
    this.winnerMessage = document.querySelector("#winner-message");
    this.resetBtn = document.querySelector("#reset-button");
    this.currentPlayerScore = 0;
    this.currentComputerScore = 0;

    this.addEventListeners();
  }

  addEventListeners() {
    this.rock.addEventListener("click", this.rockHandler.bind(this));
    this.paper.addEventListener("click", this.paperHandler.bind(this));
    this.scissors.addEventListener("click", this.scissorsHandler.bind(this));
    this.resetBtn.addEventListener("click", this.resetGame.bind(this));
  }

  rockHandler() {
    this.playerChoice.textContent = "✊";
    let computerMove = this.randomComputer();
    this.computerChoice.textContent =
      computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
    if (computerMove === "paper") {
      this.currentComputerScore++;
      this.computerScore.textContent = this.currentComputerScore;
      this.resultMessage.textContent = "Computer wins this round!";
    } else if (computerMove === "scissors") {
      this.currentPlayerScore++;
      this.playerScore.textContent = this.currentPlayerScore;
      this.resultMessage.textContent = "Player wins this round!";
    } else {
      this.resultMessage.textContent = "It's a draw!";
    }
    if (this.currentPlayerScore === 5) {
      this.removeClassHidden();
      this.winnerMessage.textContent = `Player won with score: ${this.currentPlayerScore} vs Computer score: ${this.currentComputerScore}`;
    } else if (this.currentComputerScore === 5) {
      this.removeClassHidden();
      this.winnerMessage.textContent = `Computer won with score: ${this.currentComputerScore} vs Player score: ${this.currentPlayerScore}`;
    }
  }
  paperHandler() {
    this.playerChoice.textContent = "✋";
    let computerMove = this.randomComputer();
    this.computerChoice.textContent =
      computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
    if (computerMove === "rock") {
      this.currentPlayerScore++;
      this.playerScore.textContent = this.currentPlayerScore;
      this.resultMessage.textContent = "Player wins this round!";
    } else if (computerMove === "scissors") {
      this.currentComputerScore++;
      this.computerScore.textContent = this.currentComputerScore;
      this.resultMessage.textContent = "Computer wins this round!";
    } else {
      this.resultMessage.textContent = "It's a draw!";
    }
    if (this.currentPlayerScore === 5) {
      this.removeClassHidden();
      this.winnerMessage.textContent = `Player won with score: ${this.currentPlayerScore} vs Computer score: ${this.currentComputerScore}`;
    } else if (this.currentComputerScore === 5) {
      this.computerChoice.textContent = "❔";
      this.removeClassHidden();
      this.winnerMessage.textContent = `Computer won with score: ${this.currentComputerScore} vs Player score: ${this.currentPlayerScore}`;
    }
  }
  scissorsHandler() {
    this.playerChoice.textContent = "✌️";
    let computerMove = this.randomComputer();
    this.computerChoice.textContent =
      computerMove === "rock" ? "✊" : computerMove === "paper" ? "✋" : "✌️";
    if (computerMove === "paper") {
      this.currentPlayerScore++;
      this.playerScore.textContent = this.currentPlayerScore;
      this.resultMessage.textContent = "Player wins this round!";
    } else if (computerMove === "rock") {
      this.currentComputerScore++;
      this.computerScore.textContent = this.currentComputerScore;
      this.resultMessage.textContent = "Computer wins this round!";
    } else {
      this.resultMessage.textContent = "It's a draw!";
    }

    if (this.currentPlayerScore === 5) {
      this.removeClassHidden();
      this.winnerMessage.textContent = `Player won with score: ${this.currentPlayerScore} vs Computer score: ${this.currentComputerScore}`;
    } else if (this.currentComputerScore === 5) {
      this.removeClassHidden();
      this.winnerMessage.textContent = `Computer won with score: ${this.currentComputerScore} vs Player score: ${this.currentPlayerScore}`;
    }
  }

  randomComputer() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  resetGame() {
    this.playerChoice.textContent = "❔";
    this.computerChoice.textContent = "❔";
    this.resultMessage.textContent = "Make your move!";
    this.currentComputerScore = 0;
    this.currentPlayerScore = 0;
    this.playerScore.textContent = 0;
    this.computerScore.textContent = 0;
    this.container.classList.remove("hidden");
    this.winPopup.classList.add("hidden");
  }
  removeClassHidden() {
    this.container.classList.add("hidden");
    this.winPopup.classList.remove("hidden");
  }
}

const gameNew = new Game();
