"use strict";
//подключаемые модули
const cors = require("cors");
var express = require("express"), //собственно, сервер
  app = express(), // объект типа "сервер"
  bodyParser = require("body-parser"); //модуль, который парсит post-запрос
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));

//список пользователей
const users = [];

app.post("/register", function (req, res) {
  console.log("req.body = ", req.body);
  const { name } = req.body;
  if (!name) {
    res.status(401);
    res.send({ message: "Нужно ввести имя пользователя!" });
  } else {
    res.send({ id: users.length });
    users.push({ name, id: users.length });
  }
});

//слушаем порт
app.listen(8000, () => console.log("LISTEN on port 8000"));
