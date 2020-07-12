import { moveShot } from "../logic/moveShot";
import { getTankCoordinates } from "../logic/getTankCoordinates";

////////////////////////////// DATA
let field1 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users1 = [],
  shots1 = [{ userId: 0, row: 1, col: 0, direction: "UP", id: 0 }],
  shotId1 = 0;

let field2 = [
    [" ", " ", " "],
    [" ", "⚫", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users2 = [],
  shots2 = [{ userId: 0, row: 1, col: 1, direction: "LEFT", id: 0 }],
  shotId2 = 0;

let field3 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users3 = [],
  shots3 = [{ userId: 0, row: 1, col: 0, direction: "BOTTOM", id: 0 }],
  shotId3 = 0;

let field4 = [
    [" ", " ", " "],
    ["⚫", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  users4 = [],
  shots4 = [{ userId: 0, row: 1, col: 0, direction: "RIGHT", id: 0 }],
  shotId4 = 0;

let field5 = [
    ["*", " ", "*", " "],
    ["*", "*", "*", " "],
    [" ", "*", " ", " "],
    [" ", "⚫", " ", " "],
    [" ", " ", " ", " "],
  ],
  users5 = [
    {
      id: 1,
      row: 1,
      col: 1,
      direction: "BOTTOM",
      coordinates: getTankCoordinates(1, 1, "BOTTOM"),
    },
  ],
  shots5 = [{ userId: 0, row: 3, col: 1, direction: "UP", id: 0 }],
  shotId5 = 0;

let field6 = [
    [" ", " ", "*", " "],
    ["⚫", "*", "*", "*"],
    [" ", "*", " ", "*"],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users6 = [
    {
      id: 1,
      row: 1,
      col: 2,
      direction: "UP",
      coordinates: getTankCoordinates(1, 2, "UP"),
    },
  ],
  shots6 = [{ userId: 0, row: 1, col: 0, direction: "RIGHT", id: 0 }],
  shotId6 = 0;

let field7 = [
    [" ", "*", " ", " "],
    ["*", "*", "*", "⚫"],
    ["*", " ", "*", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users7 = [
    {
      id: 1,
      row: 1,
      col: 1,
      direction: "UP",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ],
  shots7 = [{ userId: 0, row: 1, col: 3, direction: "LEFT", id: 0 }],
  shotId7 = 0;

let field8 = [
    [" ", "*", " ", " "],
    ["*", "*", "*", " "],
    ["*", " ", "*", " "],
    ["⚫", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users8 = [
    {
      id: 1,
      row: 1,
      col: 1,
      direction: "UP",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ],
  shots8 = [{ userId: 0, row: 3, col: 0, direction: "UP", id: 0 }],
  shotId8 = 0;

let field9 = [
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    ["⚫", " ", " ", " "],
  ],
  users9 = [],
  shots9 = [{ userId: 0, row: 4, col: 0, direction: "BOTTOM", id: 0 }],
  shotId9 = 0;

let field10 = [
    ["⚫", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users10 = [],
  shots10 = [{ userId: 0, row: 0, col: 0, direction: "LEFT", id: 0 }],
  shotId10 = 0;

let field11 = [
    ["⚫", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users11 = [],
  shots11 = [{ userId: 0, row: 0, col: 0, direction: "UP", id: 0 }],
  shotId11 = 0;

let field12 = [
    [" ", " ", " ", "⚫"],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  users12 = [],
  shots12 = [{ userId: 0, row: 0, col: 3, direction: "RIGHT", id: 0 }],
  shotId12 = 0;

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
    [{ userId: 0, row: 0, col: 0, direction: "UP", id: 0 }],
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
    [{ userId: 0, row: 1, col: 0, direction: "LEFT", id: 0 }],
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
    [{ userId: 0, row: 2, col: 0, direction: "BOTTOM", id: 0 }],
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
    [{ userId: 0, row: 1, col: 1, direction: "RIGHT", id: 0 }],
  ]);
});

it("moveShot: снаряд попадает в игрока сверху", () => {
  expect(moveShot(field5, users5, shots5, shotId5)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в игрока слева", () => {
  expect(moveShot(field6, users6, shots6, shotId6)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в игрока справа", () => {
  expect(moveShot(field7, users7, shots7, shotId7)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в игрока снизу", () => {
  expect(moveShot(field8, users8, shots8, shotId8)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в стену сверху", () => {
  expect(moveShot(field9, users9, shots9, shotId9)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в стену слева", () => {
  expect(moveShot(field10, users10, shots10, shotId10)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в стену снизу", () => {
  expect(moveShot(field11, users11, shots11, shotId11)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});

it("moveShot: снаряд попадает в стену справа", () => {
  expect(moveShot(field12, users12, shots12, shotId12)).toEqual([
    [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ],
    [],
    [],
  ]);
});
