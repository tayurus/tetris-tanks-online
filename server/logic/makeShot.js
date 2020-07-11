import { getTankIdByPointCoordinates } from "./getTankIdByPointCoordinates";
import { toggleUserOnField } from "./toggleUserOnField";

/*
    Делает выстрел на поле field
    от лица пользователя userId из массива users
    помещает вылетевший снаряд в массив shots
 */
export const makeShot = (field, users, userId, shots) => {
  /* определяем координату, где появится снаряд
   для этого определим, где находится орудие, в этом нам поможет direction у стреляющего пользователя*/

  // берем стреляющего пользователя
  const shooter = users.filter((it) => it.id === userId)[0];

  const { direction, row: shooterRow, col: shooterCol } = shooter;

  let shotRow = shooterRow,
    shotCol = shooterCol;
  // если его пушка смотрит вверх
  if (direction === "UP") {
    shotRow -= 2;
  }
  // если его пушка смотрит влево
  else if (direction === "LEFT") {
    shotCol -= 2;
  }
  // если его пушка смотрит вниз
  else if (direction === "BOTTOM") {
    shotRow += 2;
  }
  // если его пушка смотрит вправо
  else if (direction === "RIGHT") {
    shotCol += 2;
  }

  /* ВСЕ, мы нашли координаты появления снаряда, проверим, что они корректные */

  // если снаряд внутри поля
  if (
    shotRow >= 0 &&
    shotRow < field.length &&
    shotCol >= 0 &&
    shotCol < field[0].length
  ) {
    // если на месте снаряда находится танк
    if (field[shotRow][shotCol] === "*") {
      // определяем, id игрока этого танка
      const killedUserId = getTankIdByPointCoordinates(users, shotRow, shotCol);

      // TODO: заносим в массив событий событие смерти данного игрока, запоминая, кто его убил

      // получаем игрока, который погиб
      const killedUser = users.filter((it) => it.id === killedUserId)[0];

      console.log("shotRow = ", shotRow);
      console.log("shotCol= ", shotCol);
      console.log("user1 coords = ", users[0].coordinates);
      console.log("user2 coords = ", users[1].coordinates);

      // удаляем с поля погибшего игрока
      field = toggleUserOnField(
        field,
        killedUser.row,
        killedUser.col,
        killedUser.direction,
        "remove"
      );

      // удаляем из массива игроков убитого игрока
      users = users.filter((it) => it.id !== killedUserId);
    }
    // иначе - на месте снаряда игрока нет
    else {
      // заносим в массив снарядов данный снаряд, запомнив id стреляющего, координаты, направление выстрела
      shots = [
        ...shots,
        {
          userId: shooter.id,
          col: shotCol,
          row: shotRow,
          direction: shooter.direction,
        },
      ];

      // ставим на поле field метку снаряда - ⚫
      field[shotRow][shotCol] = "⚫";
    }
  }

  // вернем данные
  return [field, shots, users];
};
