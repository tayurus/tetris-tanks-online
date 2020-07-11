import { getTankIdByPointCoordinates } from "../logic/getTankIdByPointCoordinates";

// танка с переданными координатами нет
const data1 = {
  users: [
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
  row: 0,
  col: 0,
};

// нет users
const data2 = { users: [], row: 0, col: 0 };

// танк есть
const data3 = {
  users: [
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
  row: 3,
  col: 5,
};

it("getTankIdByPointCoordinates: танка с переданными координатами нет", () => {
  expect(getTankIdByPointCoordinates(...Object.values(data1))).toEqual(-1);
});

it("getTankIdByPointCoordinates: нет users", () => {
  expect(getTankIdByPointCoordinates(...Object.values(data2))).toEqual(-1);
});

it("getTankIdByPointCoordinates: танк есть", () => {
  expect(getTankIdByPointCoordinates(...Object.values(data3))).toEqual(4);
});
