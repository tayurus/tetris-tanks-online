import { toggleUserOnField } from "./toggleUserOnField";
import { placeTankOnField } from "./placeTankOnField";
import { getTankCoordinates } from "./getTankCoordinates";

/* двигает пользователя с id = userId из массива users в направлении direction*/
export const moveUser = (field, users, userId, direction) => {
  // находим нужного пользователя
  const userToMove = users.filter((it) => it.id === userId)[0];

  // определяем новые координаты/направление, куда его нужно переместить
  let newRow = userToMove.row,
    newCol = userToMove.col,
    newDirection = direction; // в любом случае поворачиваем пользователя туда, куда нужно
  // если текущее направление пользователя совпадает с тем, в котором он хочет двигаться
  if (direction === userToMove.direction) {
    // нужно передвинуть пользователя
    if (newDirection === "UP") {
      newRow = newRow - 1;
    } else if (newDirection === "RIGHT") {
      newCol = newCol + 1;
    } else if (newDirection === "BOTTOM") {
      newRow = newRow + 1;
    } else if (newDirection === "LEFT") {
      newCol = newCol - 1;
    }
  }

  // удаляем данного пользователя с поля
  field = toggleUserOnField(
    field,
    userToMove.row,
    userToMove.col,
    userToMove.direction,
    "remove"
  );

  try {
    // пробуем переместить
    field = placeTankOnField(field, newRow, newCol, newDirection);
    // если получилось, возвращаем обновленное поле и массив пользователей
    userToMove.row = newRow;
    userToMove.col = newCol;
    userToMove.direction = newDirection;

    // обновляем coordinates у только что походившего игрока
    userToMove.coordinates = getTankCoordinates(newRow, newCol, newDirection);

    // заменяем старого пользователя на нового
    users = users.map((it) => (it.id === userToMove.id ? userToMove : it));
    return [field, users];
  } catch (err) {
    // если не получилось - возвращаем пользователя обратно на поле
    field = toggleUserOnField(
      field,
      userToMove.row,
      userToMove.col,
      userToMove.direction,
      "add"
    );

    return [field, users];
  }
};
