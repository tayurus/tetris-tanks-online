import { getNotEmptyCellsCount } from "./../logic/getNotEmptyCellsCount";

// prettier-ignore
const field = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, true, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

it("getAliveNeighborsCount: no alive neighbors", () => {
  expect(getNotEmptyCellsCount(field, 0, 0)).toEqual(0);
});

it("getAliveNeighborsCount: 1 neighbor", () => {
  expect(getNotEmptyCellsCount(field, 3, 3)).toEqual(1);
});

it("getAliveNeighborsCount: 3 neighbors", () => {
  expect(getNotEmptyCellsCount(field, 6, 6)).toEqual(3);
});
