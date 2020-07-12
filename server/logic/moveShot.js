import { getTankIdByPointCoordinates } from "./getTankIdByPointCoordinates";
import { toggleUserOnField } from "./toggleUserOnField";
/*
    Двигает снаряд с id = shotId из массива shots на одну клетку по направлению direction,
    которое хранится в самом снаряде, меняя поле field.
    Если попадет в игрока, удаляет его из users и удаляет снаряд
    Если попадет в стену, удаляет данный снаряд из shots
*/
export const moveShot = (field, users, shots, shotId) => {
  // находим снаряд, который нужно переместить
  const shotToMove = shots.filter((it) => shotId === it.id)[0];

  // определяем новые координаты снаряда после перемещения
  const { direction: shotDirection } = shotToMove;
  let newShotRow = shotToMove.row,
    newShotCol = shotToMove.col;

  if (shotDirection === "UP") {
    newShotRow -= 1;
  }

  if (shotDirection === "RIGHT") {
    newShotCol += 1;
  }

  if (shotDirection === "BOTTOM") {
    newShotRow += 1;
  }

  if (shotDirection === "LEFT") {
    newShotCol -= 1;
  }

  // если координаты лежат вне поля - снаряд попал в стену
  if (
    newShotCol < 0 ||
    newShotCol >= field[0].length ||
    newShotRow < 0 ||
    newShotRow >= field.length
  ) {
    // удаляем снаряд из массива снарядов
    shots = shots.filter((it) => it.id !== shotId);
    // и с поля
    field[shotToMove.row][shotToMove.col] = " ";
  }
  // иначе координаты принадлежат полю
  else {
    // если снаряд попал в танк
    if (field[newShotRow][newShotCol] === "*") {
      // определяем id того, в кого попал снаряд
      const killedTankId = getTankIdByPointCoordinates(
        users,
        newShotRow,
        newShotCol
      );

      // получаем информацию об убитом танке
      const killedTank = users.filter((it) => it.id === killedTankId)[0];

      // удаляем игрока и из массива пользователей
      users = users.filter((it) => it.id !== killedTankId);
      // и с поля
      field = toggleUserOnField(
        field,
        killedTank.row,
        killedTank.col,
        killedTank.direction,
        "remove"
      );

      // удаляем сам снаряд и из массива снарядов
      shots = shots.filter((it) => it.id !== shotId);
      // и с поля
      field[shotToMove.row][shotToMove.col] = " ";
    }
    // иначе снаряд не попал в танк
    else {
      // обновляем координаты снаряда в массиве снарядов
      shots = shots.map((it) =>
        it.id === shotId ? { ...it, row: newShotRow, col: newShotCol } : it
      );
      // и на поле
      field[shotToMove.row][shotToMove.col] = " ";
      field[newShotRow][newShotCol] = "⚫";
    }
  }

  // возвращаем обновленные поле, пользователей, снаряды
  return [field, users, shots];
};
