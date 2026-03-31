const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to initialize the game
function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "",""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // Reset the win color by reapplying base classes
        box.className = `box box${index + 1}`;
    });
    btn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

// Check Game is Over or Not 
function checkGameOver() {
    let winner = "";
    winningPositions.forEach((position) => {
        // A simpler way to check if all 3 are the same and not empty
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]]) 
            && (gameGrid[position[1]] === gameGrid[position[2]])) {
            
            // Stop further clicks
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            winner = gameGrid[position[0]]; // Simply grab the winning 'X' or 'O'

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    // If we have a winner
    if (winner !== "") {
        gameInfo.innerText = `Winner is - ${winner}`;
        btn.classList.add("active");
        return true; // Tell the caller the game is over
    }

    // Check for tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillCount++;
        }
    });

    if (fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        btn.classList.add("active");
        return true; // Tell the caller the game is over
    }

    return false; // Game is not over yet
}

// Swapping Turns 
function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// Handle Click Game 
function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        
        // Check if game is over BEFORE swapping turns
        let isGameOver = checkGameOver();
        
        if (!isGameOver) {
            swapTurn();
        }
    }
}

// Add Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

// Add Event Listener to Button
btn.addEventListener("click", initGame);