import { toggleUserOnField } from "../logic/toggleUserOnField";

let field1, field2, field3, field4, emptyField;

beforeEach(() => {
  field1 = [
    [" ", " ", "*", " ", " "],
    [" ", "*", "*", "*", " "],
    [" ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " "],
  ];

  field2 = [
    [" ", "*", "*", " ", " "],
    [" ", " ", "*", "*", " "],
    [" ", "*", "*", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  field3 = [
    [" ", "*", " ", "*", " "],
    [" ", "*", "*", "*", " "],
    [" ", " ", "*", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  field4 = [
    [" ", " ", "*", "*", " "],
    [" ", "*", "*", " ", " "],
    [" ", " ", "*", "*", " "],
    [" ", " ", " ", " ", " "],
  ];

  emptyField = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];
});

// УДАЛЕНИЕ

it("toggleUserOnField: Удаляем танк, который смотрит вверх", () => {
  expect(toggleUserOnField(field1, 1, 2, "UP", "remove")).toEqual(emptyField);
});

it("toggleUserOnField: Удаляем танк, который смотрит вправо", () => {
  expect(toggleUserOnField(field2, 1, 2, "RIGHT", "remove")).toEqual(
    emptyField
  );
});

it("toggleUserOnField: Удаляем танк, который смотрит вниз", () => {
  expect(toggleUserOnField(field3, 1, 2, "BOTTOM", "remove")).toEqual(
    emptyField
  );
});

it("toggleUserOnField: Удаляем танк, который смотрит вправо", () => {
  expect(toggleUserOnField(field4, 1, 2, "LEFT", "remove")).toEqual(emptyField);
});

// ДОБАВЛЕНИЕ

it("toggleUserOnField: Добавляем танк, который смотрит вверх", () => {
  expect(toggleUserOnField(emptyField, 1, 2, "UP", "add")).toEqual(field1);
});

it("toggleUserOnField: Добавляем танк, который смотрит вправо", () => {
  expect(toggleUserOnField(emptyField, 1, 2, "RIGHT", "add")).toEqual(field2);
});

it("toggleUserOnField: Добавляем танк, который смотрит вниз", () => {
  expect(toggleUserOnField(emptyField, 1, 2, "BOTTOM", "add")).toEqual(field3);
});

it("toggleUserOnField: Добавляем танк, который смотрит влево", () => {
  expect(toggleUserOnField(emptyField, 1, 2, "LEFT", "add")).toEqual(field4);
});
