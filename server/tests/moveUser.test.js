import { moveUser } from "../logic/moveUser";
import { getTankCoordinates } from "../logic/getTankCoordinates";

let users1, users2, users3, users4, field1, field2, field3, field4;

beforeEach(() => {
  users1 = [
    {
      name: "tester",
      id: 0,
      row: 1,
      col: 1,
      direction: "UP",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ];
  users2 = [
    {
      name: "tester",
      id: 0,
      row: 1,
      col: 1,
      direction: "RIGHT",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ];
  users3 = [
    {
      name: "tester",
      id: 0,
      row: 1,
      col: 1,
      direction: "BOTTOM",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ];
  users4 = [
    {
      name: "tester",
      id: 0,
      row: 1,
      col: 2,
      direction: "LEFT",
      coordinates: getTankCoordinates(1, 1, "UP"),
    },
  ];

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
  expect(moveUser(field1, users1, 0, "RIGHT")).toEqual([
    [
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 1,
        direction: "RIGHT",
        coordinates: getTankCoordinates(1, 1, "RIGHT"),
      },
    ],
  ]);
});

it("moveUser: поворот налево", () => {
  expect(moveUser(field1, users1, 0, "LEFT")).toEqual([
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 1,
        direction: "LEFT",
        coordinates: getTankCoordinates(1, 1, "LEFT"),
      },
    ],
  ]);
});

it("moveUser: поворот вниз", () => {
  expect(moveUser(field1, users1, 0, "BOTTOM")).toEqual([
    [
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 1,
        direction: "BOTTOM",
        coordinates: getTankCoordinates(1, 1, "BOTTOM"),
      },
    ],
  ]);
});

it("moveUser: поворот вверх", () => {
  expect(moveUser(field1, users1, 0, "UP")).toEqual([
    [
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 1,
        direction: "UP",
        coordinates: getTankCoordinates(1, 1, "UP"),
      },
    ],
  ]);
});

it("moveUser: движение вправо", () => {
  expect(moveUser(field2, users2, 0, "RIGHT")).toEqual([
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", "*", "*", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 2,
        direction: "RIGHT",
        coordinates: getTankCoordinates(1, 2, "RIGHT"),
      },
    ],
  ]);
});

it("moveUser: движение вниз", () => {
  expect(moveUser(field3, users3, 0, "BOTTOM")).toEqual([
    [
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ["*", " ", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 2,
        col: 1,
        direction: "BOTTOM",
        coordinates: getTankCoordinates(2, 1, "BOTTOM"),
      },
    ],
  ]);
});

it("moveUser: движение влево", () => {
  expect(moveUser(field4, users4, 0, "LEFT")).toEqual([
    [
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      ["*", "*", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "*", "*", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
      {
        name: "tester",
        id: 0,
        row: 1,
        col: 1,
        direction: "LEFT",
        coordinates: getTankCoordinates(1, 1, "LEFT"),
      },
    ],
  ]);
});
