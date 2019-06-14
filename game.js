const X_WIN = "XXX";
const O_WIN = "OOO";

const steps = [0, 1, 2];

const checkValue = value => {
  if (value === X_WIN) {
    return "X_WIN";
  } else if (value === O_WIN) {
    return "O_WIN";
  }
};

export const getGameStatus = moves => {
  let gameStatus;
  // Check horizontal
  steps.find((step, i) => {
    gameStatus = checkValue(`${moves[step * 3]}${moves[step * 3 + 1]}${moves[step * 3 + 2]}`);
    return gameStatus !== undefined;
  });

  if (gameStatus) return gameStatus;

  // Check vertical
  steps.find(row => {
    gameStatus = checkValue(`${moves[row]}${moves[row + 3]}${moves[row + 6]}`);
    return gameStatus !== undefined;
  });

  if (gameStatus) return gameStatus;

  // Check diagonal
  gameStatus = checkValue(`${moves[0]}${moves[4]}${moves[8]}`);
  if (gameStatus) return gameStatus;

  gameStatus = checkValue(`${moves[2]}${moves[4]}${moves[6]}`);
  if (gameStatus) return gameStatus;

  if (Object.values(moves).length === 9 && !gameStatus) return "DRAW";

  return gameStatus;
};
