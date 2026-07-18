# Tic Tac Toe

A clean, modern, single-page Tic Tac Toe game built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies.

![Tic Tac Toe](https://img.shields.io/badge/vanilla-JS-yellow) ![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

**Live demo:** https://aisirimr.github.io/tic-tac-toe/

## Features

- 3x3 interactive board with click-to-play
- Win detection across all 8 winning lines (rows, columns, diagonals)
- Draw detection when the board fills with no winner
- Winning cells are highlighted on the board
- Scoreboard that tracks wins for Player X, wins for Player O, and draws
- "New Round" button to clear the board and keep the score
- "Reset Scores" button to zero out the scoreboard and start fresh
- Responsive, dark, modern UI that works on desktop and mobile
- Accessible markup (ARIA labels, live status region, keyboard-focusable cells)

## Project Structure

```
.
├── index.html      # Page markup and structure
├── styles.css      # Visual styling and layout
├── script.js       # Game logic, state, and DOM updates
└── README.md       # This file
```

## How to Run

No build tools or installs required. Pick any one of the following:

### Option 1: Open directly in a browser

Double-click `index.html`, or open it from your browser with `File > Open`.

### Option 2: Serve it locally (recommended for the best experience)

Using Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

Using Node.js (`npx serve`):

```bash
npx serve .
```

Using the VS Code "Live Server" extension: right-click `index.html` and choose **Open with Live Server**.

## How to Play

1. Player X always goes first — click any empty cell to place a mark.
2. Players alternate turns (X, then O, then X, ...).
3. The first player to line up three marks horizontally, vertically, or diagonally wins the round, and the winning line is highlighted.
4. If all 9 cells fill up with no winner, the round ends in a draw.
5. Click **New Round** to play again with the score kept.
6. Click **Reset Scores** to clear the scoreboard back to zero.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: tic tac toe game"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## License

Free to use and modify for personal or educational purposes.
