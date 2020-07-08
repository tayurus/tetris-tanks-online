import { placeTankOnField } from "./placeTankOnField";

export const addUserOnField = (field, users, userId) => {
  /* начинаем идти от верхнего левого угла поля,
     но со смещением влево и вниз на одну клетку, потому что
    танку нужно про-во вокруг себя (То есть, начинаем поиск места для игрока,
    начиная с клетки 1,1, заканчиваем на field.length - 1, field.length -1 (включительно))
      0 1 2 3 4 5
      _ _ _ _ _ _ _ _ _
  0  | *
  1  |***
  2  |* *
  3  |
  4  |
     |
     |
     */

  // идем с клетки c коодинатами 1,1
  // идем от строки = 1 до предпоследней, пока не кончатся строки или пока не разместим танк

  let userWasAdded = false;
  for (let row = 1; row < field.length - 1 && !userWasAdded; row++) {
    // идем от столбца = 1 до предпоследнего
    for (let col = 1; col < field[0].length - 1 && !userWasAdded; col++) {
      // пробуем разместить танк игрока в данной клетке
      try {
        field = placeTankOnField(field, row, col, "UP");
        users = users.map((it) =>
          it.id === userId ? { ...it, col, row, direction: "UP" } : it
        );
        userWasAdded = true;
      } catch (e) {
        // если мы находимся в последней возможной клетке, где можно было разместить танк
        if (row === field.length - 2 && col === field[0].length - 2) {
          // выкидываем ошибку и прерываем поиск
          throw "Нет свободного места для размещения танка";
        }
      }
    }
  }

  return [field, users];
};
