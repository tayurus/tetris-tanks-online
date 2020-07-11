import { moveShot } from "../logic/moveShot";

////////////////////////////// DATA
let field1 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users1 = [],
  shots1 = [{ userId: 0, row: 1, col: 0, direction: "UP" }],
  shotId1 = 0;

let field2 = [
    [" ", " ", " "],
    [" ", "⚫", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users2 = [],
  shots2 = [{ userId: 0, row: 1, col: 1, direction: "LEFT" }],
  shotId2 = 0;

let field3 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users3 = [],
  shots3 = [{ userId: 0, row: 1, col: 0, direction: "BOTTOM" }],
  shotId3 = 0;

let field4 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users4 = [],
  shots4 = [{ userId: 0, row: 1, col: 0, direction: "RIGHT" }],
  shotId4 = 0;

let field5 = [
    ["*", " ", "*"],
    ["*", "*", "*"],
    [" ", "*", " "],
    [" ", "⚫", " "],
    [" ", " ", " "],
  ],
  users5 = [{ id: 1, row: 1, col: 1, direction: "BOTTOM" }],
  shots5 = [{ userId: 0, row: 3, col: 1, direction: "TOP" }],
  shotId5 = 0;

////////////////////////////// TESTS

it("moveShot: снаряд летит вверх", () => {
  expect(moveShot(field1, users1, shots1, shotId1)).toEqual([
    [
      ["⚫", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    users1,
    [{ userId: 0, row: 0, col: 0, direction: "UP" }],
  ]);
});

it("moveShot: снаряд летит влево", () => {
  expect(moveShot(field2, users2, shots2, shotId2)).toEqual([
    [
      [" ", " ", " "],
      ["⚫", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    users2,
    [{ userId: 0, row: 1, col: 0, direction: "LEFT" }],
  ]);
});

it("moveShot: снаряд летит вниз", () => {
  expect(moveShot(field3, users3, shots3, shotId3)).toEqual([
    [
      [" ", " ", " "],
      [" ", " ", " "],
      ["⚫", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    users3,
    [{ userId: 0, row: 2, col: 0, direction: "BOTTOM" }],
  ]);
});

it("moveShot: снаряд летит вправо", () => {
  expect(moveShot(field4, users4, shots4, shotId4)).toEqual([
    [
      [" ", " ", " "],
      [" ", "⚫", " "],
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    users4,
    [{ userId: 0, row: 1, col: 1, direction: "RIGHT" }],
  ]);
});

// снаряд попадает в игрока сверху
// снаряд попадает в игрока слева
// снаряд попадает в игрока снизу
// снаряд попадает в игрока справа

// снаряд попадает в стену сверху
// снаряд попадает в стену слева
// снаряд попадает в стену снизу
// снаряд попадает в стену справа
