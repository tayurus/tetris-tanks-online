import { getNotEmptyCellsCount } from "./getNotEmptyCellsCount";

export const placeTankOnField = (field, row, col, tankDirection) => {
  // проверка, что точка принадлежит полю
  if (!(row >= 0 && row < field.length && col >= 0 && col < field[0].length)) {
    throw `Невозможно разместить танк в клетке(${row},${col}): указанная точка имеет недопустимые координаты`;
  }

  // проверка, что точка не находится слишком близко к стене
  if (
    row === 0 ||
    col === 0 ||
    row === field.length - 1 ||
    col === field[0].length - 1
  ) {
    throw `Невозможно разместить танк в клетке(${row},${col}): указанная точка находится слишком близко к стене, часть танка вылезает за поле`;
  }

  // проверка, что в точке и вокруг нее нет других танков
  if (getNotEmptyCellsCount(field, row, col) !== 0) {
    throw `Невозможно разместить танк в клетке(${row},${col}): в указанной точке уже есть другой танк`;
  }

  // если направление "вверх"
  if (tankDirection === "UP") {
    field[row - 1][col] = "*";
    field[row][col - 1] = "*";
    field[row][col] = "*";
    field[row][col + 1] = "*";
    field[row + 1][col - 1] = "*";
    field[row + 1][col + 1] = "*";
  }

  // если направление "вправо"
  else if (tankDirection === "RIGHT") {
    field[row - 1][col - 1] = "*";
    field[row - 1][col] = "*";
    field[row][col] = "*";
    field[row][col + 1] = "*";
    field[row + 1][col - 1] = "*";
    field[row + 1][col] = "*";
  }

  // если направление "вниз"
  else if (tankDirection === "BOTTOM") {
    field[row - 1][col - 1] = "*";
    field[row - 1][col + 1] = "*";
    field[row][col - 1] = "*";
    field[row][col] = "*";
    field[row][col + 1] = "*";
    field[row + 1][col] = "*";
  }

  // если направление влево
  else if (tankDirection === "LEFT") {
    field[row - 1][col] = "*";
    field[row - 1][col + 1] = "*";
    field[row][col - 1] = "*";
    field[row][col] = "*";
    field[row + 1][col] = "*";
    field[row + 1][col + 1] = "*";
  }

  // console.log("field after = ", field);

  return field;
};
