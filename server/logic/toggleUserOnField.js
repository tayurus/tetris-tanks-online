/*
    Стирает (если mode = 'remove') или добавляет (если mode = 'add')
    пользователя с координатами в центре row, col и пушкой направленной
    в направлении direction
 */
export const toggleUserOnField = (field, row, col, direction, mode) => {
  // если нужно добавить пользователя
  const fillSymbol = mode === "add" ? "*" : " ";

  // если направление "вверх"
  if (direction === "UP") {
    field[row - 1][col] = fillSymbol;
    field[row][col - 1] = fillSymbol;
    field[row][col] = fillSymbol;
    field[row][col + 1] = fillSymbol;
    field[row + 1][col - 1] = fillSymbol;
    field[row + 1][col + 1] = fillSymbol;
  }

  // если направление "вправо"
  else if (direction === "RIGHT") {
    field[row - 1][col - 1] = fillSymbol;
    field[row - 1][col] = fillSymbol;
    field[row][col] = fillSymbol;
    field[row][col + 1] = fillSymbol;
    field[row + 1][col - 1] = fillSymbol;
    field[row + 1][col] = fillSymbol;
  }

  // если направление "вниз"
  else if (direction === "BOTTOM") {
    field[row - 1][col - 1] = fillSymbol;
    field[row - 1][col + 1] = fillSymbol;
    field[row][col - 1] = fillSymbol;
    field[row][col] = fillSymbol;
    field[row][col + 1] = fillSymbol;
    field[row + 1][col] = fillSymbol;
  }

  // если направление влево
  else if (direction === "LEFT") {
    field[row - 1][col] = fillSymbol;
    field[row - 1][col + 1] = fillSymbol;
    field[row][col - 1] = fillSymbol;
    field[row][col] = fillSymbol;
    field[row + 1][col] = fillSymbol;
    field[row + 1][col + 1] = fillSymbol;
  }

  return field;
};
