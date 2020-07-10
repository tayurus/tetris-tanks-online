import { getTankCoordinates } from "../logic/getTankCoordinates";

// танк смотрит вверх
let data1 = { centerRow: 1, centerCol: 1, direction: "UP" };

// танк смотрит влево
let data2 = { centerRow: 1, centerCol: 6, direction: "LEFT" };

// танк смотрит вниз
let data3 = { centerRow: 4, centerCol: 4, direction: "BOTTOM" };

// танк смотрит вправо
let data4 = { centerRow: 4, centerCol: 8, direction: "RIGHT" };

it("getTankCoordinates: танк смотрит вверх", () => {
  expect(getTankCoordinates(...Object.values(data1))).toEqual([
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 2],
  ]);
});

it("getTankCoordinates: танк смотрит влево", () => {
  expect(getTankCoordinates(...Object.values(data2))).toEqual([
    [0, 6],
    [0, 7],
    [1, 5],
    [1, 6],
    [2, 6],
    [2, 7],
  ]);
});

it("getTankCoordinates: танк смотрит вниз", () => {
  expect(getTankCoordinates(...Object.values(data3))).toEqual([
    [3, 3],
    [3, 5],
    [4, 3],
    [4, 4],
    [4, 5],
    [5, 4],
  ]);
});

it("getTankCoordinates: танк смотрит вправо", () => {
  expect(getTankCoordinates(...Object.values(data4))).toEqual([
    [3, 7],
    [3, 8],
    [4, 8],
    [4, 9],
    [5, 7],
    [5, 8],
  ]);
});

/*
    0    1    2    3    4    5    6    7    8    9
0 [" ", "*", " ", " ", " ", " ", "*", "*", " ", " "],
1 ["*", "*", "*", " ", " ", "*", "*", " ", " ", " "],
2 ["*", " ", "*", " ", " ", " ", "*", "*", " ", " "],
3 [" ", " ", " ", "*", " ", "*", " ", "*", "*", " "],
4 [" ", " ", " ", "*", "*", "*", " ", " ", "*", "*"],
5 [" ", " ", " ", " ", "*", " ", " ", "*", "*", " "],

 */
