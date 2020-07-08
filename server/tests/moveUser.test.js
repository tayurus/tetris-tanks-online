import { moveUser } from "../logic/moveUser";

let users1, users2, users3, users4, field1, field2, field3, field4;

beforeEach(() => {
  users1 = [{ name: "tester", id: 0, row: 1, col: 1, direction: "UP" }];
  users2 = [{ name: "tester", id: 0, row: 1, col: 1, direction: "RIGHT" }];
  users3 = [{ name: "tester", id: 0, row: 1, col: 1, direction: "BOTTOM" }];
  users4 = [{ name: "tester", id: 0, row: 1, col: 2, direction: "BOTTOM" }];

  field1 = [
    [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
    ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  field2 = [
    ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
    ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  field3 = [
    ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
    ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
    [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  field4 = [
    [" ", " ", "*", "*", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", "*", "*", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];
});

it("moveUser: поворот направо", () => {
  expect(moveUser(field1, users1)).toEqual(
    [
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 1, direction: "RIGHT" }]
  );
});

it("moveUser: поворот налево", () => {
  expect(moveUser(field1, users1)).toEqual(
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 1, direction: "LEFT" }]
  );
});

it("moveUser: поворот вниз", () => {
  expect(moveUser(field1, users1)).toEqual(
    [
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 1, direction: "BOTTOM" }]
  );
});

it("moveUser: поворот вверх", () => {
  expect(moveUser(field1, users1)).toEqual(
    [
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 1, direction: "UP" }]
  );
});

it("moveUser: движение вправо", () => {
  expect(moveUser(field2, users2)).toEqual(
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", "*", "*", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 2, direction: "RIGHT" }]
  );
});

it("moveUser: движение вниз", () => {
  expect(moveUser(field3, users3)).toEqual(
    [
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 2, col: 1, direction: "BOTTOM" }]
  );
});

it("moveUser: движение влево", () => {
  expect(moveUser(field4, users4)).toEqual(
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [{ name: "tester", id: 0, row: 1, col: 1, direction: "LEFT" }]
  );
});