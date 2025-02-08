const board = document.getElementById("board");
const winnerText = document.getElementById("winner");
let cells = [];
let currentPlayer = "X";
let gameOver = false;

function createBoard() {
    board.innerHTML = "";
    cells = [];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleClick);
        board.appendChild(cell);
        cells.push(cell);
    }
}

function handleClick(event) {
    if (gameOver) return;
    const cell = event.target;
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");
            winnerText.textContent = `Winner: ${cells[a].textContent}`;
            gameOver = true;
            return;
        }
    }
    if (cells.every(cell => cell.textContent !== "")) {
        winnerText.textContent = "It's a draw!";
        gameOver = true;
    }
}

function resetGame() {
    gameOver = false;
    winnerText.textContent = "Tic-Tac-Toe";
    createBoard();
}

createBoard();