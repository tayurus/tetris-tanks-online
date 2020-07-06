// определяет кол-во не пустых клеток в поле field с координатами cellRow, cellCol
const getNotEmptyCellsCount = (field, cellRow, cellCol) => {
  let notEmptyCellsCount = 0;
  // идем по верхней, текущей и нижней строкам относительно исследуемой клетки
  for (let row = cellRow - 1; row <= cellRow + 1; row++) {
    // если индекс текущей строки >= 0 и <= общего кол-ва строк в поле
    if (row >= 0 && row < field.length) {
      // идем по левому, текущему и правому столбцам относительно исследуемой клетки
      for (let col = cellCol - 1; col <= cellCol + 1; col++) {
        // если индекс текущего столбца >= 0 и <= кол-ва элементов в текущей строке и это не текущая клетка
        if (
          col >= 0 &&
          col < field[row].length &&
          !(row === cellRow && col === cellCol)
        ) {
          // увеличивем кол-во "живых" соседей, если данная клетка живая
          notEmptyCellsCount = field[row][col]
            ? notEmptyCellsCount + 1
            : notEmptyCellsCount;
        }
      }
    }
  }

  return notEmptyCellsCount;
};
