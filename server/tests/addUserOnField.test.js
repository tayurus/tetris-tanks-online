import { addUserOnField } from "./../logic/addUserOnField";

let field1,
  field2,
  field3,
  field4,
  field5,
  users1,
  users2,
  users3,
  users4,
  users5;

beforeEach(() => {
  field1 = [
    [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
    ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "*", "*", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "*", "*", " ", " ", " ", " "],
    [" ", " ", " ", "*", "*", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " ", " ", "*", "*", "*", " "],
    [" ", " ", " ", " ", " ", " ", " ", "*", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  users1 = [
    { id: 0, name: "tester1", row: 1, col: 1, direction: "UP" },
    { id: 1, name: "tester2", row: 4, col: 4, direction: "RIGHT" },
    { id: 2, name: "tester3", row: 8, col: 7, direction: "BOTTOM" },
    { id: 3, name: "tester4" },
  ];

  field2 = [
    [" ", "*", " ", " ", " ", "*", "*", "*", "*", " "],
    ["*", "*", "*", " ", "*", "*", " ", " ", "*", "*"],
    ["*", " ", "*", " ", " ", "*", "*", "*", "*", " "],
  ];

  users2 = [
    { id: 0, name: "tester1", row: 1, col: 1, direction: "UP" },
    { id: 1, name: "tester2", row: 1, col: 5, direction: "LEFT" },
    { id: 2, name: "tester3", row: 1, col: 8, direction: "RIGHT" },
    { id: 3, name: "tester4" },
  ];

  field3 = [
    [" ", "*", " ", " ", " ", " ", " ", "*", "*", " "],
    ["*", "*", "*", " ", " ", " ", " ", " ", "*", "*"],
    ["*", " ", "*", " ", " ", " ", " ", "*", "*", " "],
  ];

  users3 = [
    { id: 0, name: "tester1", row: 1, col: 1, direction: "UP" },
    { id: 1, name: "tester2", row: 1, col: 8, direction: "RIGHT" },
    { id: 2, name: "tester3" },
  ];

  field4 = [
    [" ", "*", " ", " ", " ", " ", " ", "*", "*", " "],
    ["*", "*", "*", " ", "x", " ", " ", " ", "*", "*"],
    ["*", " ", "*", " ", " ", " ", " ", "*", "*", " "],
    [" ", "*", " ", " ", " ", " ", " ", "*", "*", " "],
    ["*", "*", "*", " ", " ", " ", " ", " ", "*", "*"],
    ["*", " ", "*", " ", " ", " ", " ", "*", "*", " "],
  ];

  users4 = [
    { id: 0, name: "tester1", row: 1, col: 1, direction: "UP" },
    { id: 1, name: "tester2", row: 1, col: 8, direction: "RIGHT" },
    { id: 2, name: "tester3", row: 4, col: 1, direction: "UP" },
    { id: 3, name: "tester4", row: 4, col: 8, direction: "UP" },
    { id: 4, name: "tester5" },
  ];

  field5 = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  users5 = [{ id: 0, name: "tester1" }];
});

it("addUserOnField: Базовый случай", () => {
  expect(addUserOnField(field1, users1, 3)).toEqual([
    [
      [" ", "*", " ", " ", "*", " ", " ", " ", " ", " "],
      ["*", "*", "*", "*", "*", "*", " ", " ", " ", " "],
      ["*", " ", "*", "*", " ", "*", " ", " ", " ", " "],
      [" ", " ", " ", "*", "*", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "*", "*", " ", " ", " ", " "],
      [" ", " ", " ", "*", "*", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", "*", " ", "*", " "],
      [" ", " ", " ", " ", " ", " ", "*", "*", "*", " "],
      [" ", " ", " ", " ", " ", " ", " ", "*", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      ...users1.filter((it) => it.id !== 3),
      {
        id: 3,
        name: "tester4",
        row: 1,
        col: 4,
        direction: "UP",
        coordinates: [
          [0, 4],
          [1, 3],
          [1, 4],
          [1, 5],
          [2, 3],
          [2, 5],
        ],
      },
    ],
  ]);
});

it("addUserOnField: Невозможно разместить", () => {
  expect(() => addUserOnField(field2, users2, 3)).toThrow(
    "Нет свободного места для размещения танка"
  );
});

it("addUserOnField: Разместить можно только в одном месте", () => {
  expect(addUserOnField(field3, users3, 2)).toEqual([
    [
      [" ", "*", " ", " ", "*", " ", " ", "*", "*", " "],
      ["*", "*", "*", "*", "*", "*", " ", " ", "*", "*"],
      ["*", " ", "*", "*", " ", "*", " ", "*", "*", " "],
    ],
    [
      ...users3.filter((it) => it.id !== 2),
      {
        id: 2,
        name: "tester3",
        row: 1,
        col: 4,
        direction: "UP",
        coordinates: [
          [0, 4],
          [1, 3],
          [1, 4],
          [1, 5],
          [2, 3],
          [2, 5],
        ],
      },
    ],
  ]);
});

it("addUserOnField: Разместить можно только в одном месте 2", () => {
  expect(addUserOnField(field4, users4, 4)).toEqual([
    [
      [" ", "*", " ", " ", " ", " ", " ", "*", "*", " "],
      ["*", "*", "*", " ", "x", " ", " ", " ", "*", "*"],
      ["*", " ", "*", " ", "*", " ", " ", "*", "*", " "],
      [" ", "*", " ", "*", "*", "*", " ", "*", "*", " "],
      ["*", "*", "*", "*", " ", "*", " ", " ", "*", "*"],
      ["*", " ", "*", " ", " ", " ", " ", "*", "*", " "],
    ],
    [
      ...users4.filter((it) => it.id !== 4),
      {
        id: 4,
        name: "tester5",
        row: 3,
        col: 4,
        direction: "UP",
        coordinates: [
          [2, 4],
          [3, 3],
          [3, 4],
          [3, 5],
          [4, 3],
          [4, 5],
        ],
      },
    ],
  ]);
});

it("addUserOnField: Базовый случай 2", () => {
  expect(addUserOnField(field5, users5, 0)).toEqual([
    [
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        id: 0,
        name: "tester1",
        row: 1,
        col: 1,
        direction: "UP",
        coordinates: [
          [0, 1],
          [1, 0],
          [1, 1],
          [1, 2],
          [2, 0],
          [2, 2],
        ],
      },
    ],
  ]);
});
