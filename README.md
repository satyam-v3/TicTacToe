<h1 align="center">🎮 Vanilla JS Tic-Tac-Toe</h1>

<p align="center">
  <em>A classic, fully responsive Tic-Tac-Toe game built with HTML, CSS, and Vanilla JavaScript.</em>
</p>

---

## 📖 About The Project

This project is a modern, web-based implementation of the classic game Tic-Tac-Toe. It features a clean, gradient-based UI, responsive grid layout, and robust game logic to handle win states, draw states, and turn management.

The application relies entirely on DOM manipulation and native JavaScript arrays to track the game state, making it a fast and lightweight browser game.

## ✨ Key Features

* **Interactive Gameplay:** Clickable grid cells that dynamically update with "X" or "O" based on the current player's turn.
* **Win/Draw Detection:** The game logic continuously evaluates the grid against 8 possible winning combinations and immediately highlights the winning cells in green. It also detects and announces a draw when the grid is full.
* **Dynamic UI State:** The status banner dynamically updates to inform players whose turn it is, who won, or if the game tied. A "New Game" button only appears when a game concludes.
* **Glassmorphism UI:** Utilizes CSS `rgba` values to create a modern, semi-transparent frosted glass effect over a vibrant gradient background.

## 🛠️ Built With

* **HTML5:** Semantic game board structure.
* **CSS3:** CSS Grid for the perfect 3x3 layout, Flexbox for centering, and custom border properties to draw the classic grid lines.
* **Vanilla JavaScript (ES6+):** Game loop logic, array state management (`gameGrid`), and event listeners.

## 🚀 Getting Started

Since this project requires no build tools, it is incredibly easy to run.

### Installation & Usage

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/tic-tac-toe.git](https://github.com/your-username/tic-tac-toe.git)

2. Navigate into the project directory:
    ```Bash
    cd tic-tac-toe

3. Open the project: <br>

    Double-click the index.html file to view the game in your web browser.

    Alternatively, use a tool like Live Server in VS Code for a better development experience.

## 📁 Project Structure
```text
tic-tac-toe/
├── index.html            # Core game markup and UI skeleton
├── style.css             # Gradient background, glassmorphism, and grid styles
├── script.js             # Game state tracking, win logic, and DOM updates
└── README.md             # Project documentation