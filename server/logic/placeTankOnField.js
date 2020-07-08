import { getNotEmptyCellsCount } from "./getNotEmptyCellsCount";
import { toggleUserOnField } from "./toggleUserOnField";

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

  field = toggleUserOnField(field, row, col, tankDirection, "add");

  return field;
};
