/*
    Возвращает id танка по координатам одной из его точек (row, col)
    Перебирает массив coordinates в массиве игроков, в поисках совпадения координат row, col
*/
export const getTankIdByPointCoordinates = (users, row, col) => {
  const userIndex = users.findIndex((us) =>
    us["coordinates"].some((coords) => coords[0] === row && coords[1] === col)
  );

  if (userIndex !== -1) {
    return users[userIndex].id;
  }
  return -1;
};
