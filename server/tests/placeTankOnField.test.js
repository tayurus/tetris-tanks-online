import { placeTankOnField } from "./../logic/placeTankOnField";

let emptyField;

let fieldWithTank;

beforeEach(() => {
  emptyField = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  fieldWithTank = [
    [" ", "*", " ", " ", " "],
    ["*", "*", "*", " ", " "],
    ["*", " ", "*", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];
});

it("placeTankOnField: Верхний левый угол", () => {
  expect(placeTankOnField(emptyField, 1, 1, "UP")).toEqual([
    [" ", "*", " ", " ", " "],
    ["*", "*", "*", " ", " "],
    ["*", " ", "*", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ]);
});

it("placeTankOnField: По центру", () => {
  expect(placeTankOnField(emptyField, 2, 2, "UP")).toEqual([
    [" ", " ", " ", " ", " "],
    [" ", " ", "*", " ", " "],
    [" ", "*", "*", "*", " "],
    [" ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " "],
  ]);
});

it("placeTankOnField: По центру, ствол влево", () => {
  expect(placeTankOnField(emptyField, 2, 2, "LEFT")).toEqual([
    [" ", " ", " ", " ", " "],
    [" ", " ", "*", "*", " "],
    [" ", "*", "*", " ", " "],
    [" ", " ", "*", "*", " "],
    [" ", " ", " ", " ", " "],
  ]);
});

it("placeTankOnField: По центру, ствол вправо", () => {
  expect(placeTankOnField(emptyField, 2, 2, "RIGHT")).toEqual([
    [" ", " ", " ", " ", " "],
    [" ", "*", "*", " ", " "],
    [" ", " ", "*", "*", " "],
    [" ", "*", "*", " ", " "],
    [" ", " ", " ", " ", " "],
  ]);
});

it("placeTankOnField: По центру, ствол вниз", () => {
  expect(placeTankOnField(emptyField, 2, 2, "BOTTOM")).toEqual([
    [" ", " ", " ", " ", " "],
    [" ", "*", " ", "*", " "],
    [" ", "*", "*", "*", " "],
    [" ", " ", "*", " ", " "],
    [" ", " ", " ", " ", " "],
  ]);
});

it("placeTankOnField: Попытка разместить танк поверх другого танка", () => {
  expect(() => placeTankOnField(fieldWithTank, 1, 1)).toThrow(
    `Невозможно разместить танк в клетке(${1},${1}): в указанной точке уже есть другой танк`
  );
});

it("placeTankOnField: Попытка разместить танк в несуществующих координатах", () => {
  expect(() => placeTankOnField(fieldWithTank, -1, -1)).toThrow(
    `Невозможно разместить танк в клетке(${-1},${-1}): указанная точка имеет недопустимые координаты`
  );
});

it("placeTankOnField: Попытка разместить танк слишком близко к стене так, что его часть вылезет за поле", () => {
  expect(() => placeTankOnField(fieldWithTank, 0, 0)).toThrow(
    `Невозможно разместить танк в клетке(${0},${0}): указанная точка находится слишком близко к стене, часть танка вылезает за поле`
  );
});

it("placeTankOnField: Попытка разместить танк слишком близко к стене так, что его часть вылезет за поле", () => {
  expect(() => placeTankOnField(fieldWithTank, 4, 4)).toThrow(
    `Невозможно разместить танк в клетке(${4},${4}): указанная точка находится слишком близко к стене, часть танка вылезает за поле`
  );
});

it("placeTankOnField: Попытка разместить танк слишком близко к стене так, что его часть вылезет за поле", () => {
  expect(() => placeTankOnField(fieldWithTank, 0, 4)).toThrow(
    `Невозможно разместить танк в клетке(${0},${4}): указанная точка находится слишком близко к стене, часть танка вылезает за поле`
  );
});
