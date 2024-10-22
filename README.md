# Memory Game

A simple memory card-matching game built with **React.js**. The game allows users to flip and match cards in a grid. Players can set the grid size and reset the game at any time.

## Features
- Selectable grid size (from 2x2 to 10x10).
- Randomly shuffled cards for every game.
- Flipped cards return if unmatched.
- Displays a win message when all pairs are matched.
- Option to reset and start a new game.

## Technologies Used
- **React.js**: Core framework for building the interactive UI.
- **Tailwind CSS**: For styling the user interface.

## Installation

To run this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/memory-game.git
    ```

2. Navigate into the project directory:

    ```bash
    cd memory-game
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000`.

## Game Rules

1. Select the grid size between 2x2 and 10x10.
2. Click on any two cards to flip them over.
3. If the cards match, they stay flipped. If not, they will flip back after a short delay.
4. Continue flipping cards until all pairs are matched.
5. You can reset the game at any time by clicking the "Reset" button.

## Code Structure

- **`Memory.js`**: Contains the core game logic, including card flipping, matching, and resetting.
- **State variables**:
  - `gridsize`: Controls the size of the grid.
  - `cards`: Stores the shuffled cards.
  - `flippedcards`: Stores the currently flipped cards.
  - `solved`: Keeps track of solved pairs.
  - `won`: Determines if the game is won.
- **CSS**: Styled using Tailwind CSS for simplicity and responsiveness.

## Future Improvements

- Add difficulty levels by introducing time limits.
- Include sound effects and animations for card flips and matches.
- Track the number of attempts and allow scoring.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

