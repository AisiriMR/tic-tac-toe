"use strict";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boardEl = document.getElementById("board");
const cells = Array.from(document.querySelectorAll(".cell"));
const statusEl = document.getElementById("status");
const newRoundBtn = document.getElementById("newRoundBtn");
const resetBtn = document.getElementById("resetBtn");
const scoreXEl = document.getElementById("scoreXValue");
const scoreOEl = document.getElementById("scoreOValue");
const scoreDrawEl = document.getElementById("scoreDrawValue");
const scoreXCard = document.getElementById("scoreX");
const scoreOCard = document.getElementById("scoreO");

let board = Array(9).fill(null);
let currentPlayer = "X";
let gameOver = false;
let scores = { X: 0, O: 0, draws: 0 };

function init() {
  cells.forEach((cell) => {
    cell.dataset.baseLabel = cell.getAttribute("aria-label");
    cell.addEventListener("click", onCellClick);
  });
  newRoundBtn.addEventListener("click", startNewRound);
  resetBtn.addEventListener("click", resetScores);
  updateActivePlayerHighlight();
  updateScoreboard();
}

function onCellClick(event) {
  const index = Number(event.currentTarget.dataset.index);

  if (gameOver || board[index] !== null) {
    return;
  }

  placeMark(index);

  const winResult = getWinningLine(board);
  if (winResult) {
    endGame(`win`, winResult);
    return;
  }

  if (board.every((mark) => mark !== null)) {
    endGame("draw");
    return;
  }

  switchPlayer();
}

function placeMark(index) {
  board[index] = currentPlayer;
  const cell = cells[index];
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  cell.disabled = true;
  cell.setAttribute("aria-label", `${cell.dataset.baseLabel}, ${currentPlayer}`);
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
  updateActivePlayerHighlight();
}

function getWinningLine(currentBoard) {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[a] === currentBoard[c]
    ) {
      return line;
    }
  }
  return null;
}

function endGame(result, winningLine) {
  gameOver = true;
  cells.forEach((cell) => (cell.disabled = true));

  if (result === "win") {
    scores[currentPlayer] += 1;
    statusEl.textContent = `Player ${currentPlayer} wins!`;
    winningLine.forEach((index) => cells[index].classList.add("win"));
  } else {
    scores.draws += 1;
    statusEl.textContent = "It's a draw!";
  }

  updateScoreboard();
  updateActivePlayerHighlight();
}

function startNewRound() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  gameOver = false;

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.classList.remove("x", "o", "win");
    cell.setAttribute("aria-label", cell.dataset.baseLabel);
  });

  statusEl.textContent = "Player X's turn";
  updateActivePlayerHighlight();
}

function resetScores() {
  scores = { X: 0, O: 0, draws: 0 };
  updateScoreboard();
  startNewRound();
}

function updateScoreboard() {
  scoreXEl.textContent = scores.X;
  scoreOEl.textContent = scores.O;
  scoreDrawEl.textContent = scores.draws;
}

function updateActivePlayerHighlight() {
  scoreXCard.classList.toggle("active", !gameOver && currentPlayer === "X");
  scoreOCard.classList.toggle("active", !gameOver && currentPlayer === "O");
}

init();
