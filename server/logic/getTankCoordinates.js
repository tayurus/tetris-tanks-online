// возвращает массив координат точек, из которых состоит танк
export const getTankCoordinates = (centerRow, centerCol, direction) => {
  // если направление "ВВЕРХ"
  if (direction === "UP") {
    return [
      [centerRow - 1, centerCol],
      [centerRow, centerCol - 1],
      [centerRow, centerCol],
      [centerRow, centerCol + 1],
      [centerRow + 1, centerCol - 1],
      [centerRow + 1, centerCol + 1],
    ];
  }
  // если направление "ВЛЕВО"
  else if (direction === "LEFT") {
    return [
      [centerRow - 1, centerCol],
      [centerRow - 1, centerCol + 1],
      [centerRow, centerCol - 1],
      [centerRow, centerCol],
      [centerRow + 1, centerCol],
      [centerRow + 1, centerCol + 1],
    ];
  }
  // если направление "ВНИЗ"
  else if (direction === "BOTTOM") {
    return [
      [centerRow - 1, centerCol - 1],
      [centerRow - 1, centerCol + 1],
      [centerRow, centerCol - 1],
      [centerRow, centerCol],
      [centerRow, centerCol + 1],
      [centerRow + 1, centerCol],
    ];
  }
  // если направление "ВПРАВО"
  else if (direction === "RIGHT") {
    return [
      [centerRow - 1, centerCol - 1],
      [centerRow - 1, centerCol],
      [centerRow, centerCol],
      [centerRow, centerCol + 1],
      [centerRow + 1, centerCol - 1],
      [centerRow + 1, centerCol],
    ];
  }
};

/*
    0    1    2    3    4    5    6    7    8    9
0 [" ", "*", " ", " ", " ", " ", "*", "*", " ", " "],
1 ["*", "*", "*", " ", " ", "*", "*", " ", " ", " "],
2 ["*", " ", "*", " ", " ", " ", "*", "*", " ", " "],
3 [" ", " ", " ", "*", " ", "*", " ", "*", "*", " "],
4 [" ", " ", " ", "*", "*", "*", " ", " ", "*", "*"],
5 [" ", " ", " ", " ", "*", " ", " ", "*", "*", " "],

 */
