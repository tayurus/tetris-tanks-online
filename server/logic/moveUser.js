/* двигает пользователя с id userId из массива users в направлении direction*/
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

  //удаляем данного пользователя с поля


  // пробуем переместить

  // если получилось, возвращаем обновленное поле и массив пользователей

  // иначе - возвращаем пользователя обратно на поле и тоже возвращаем поле и массив пользователей
  return [field, users];
};
