"use strict";
//подключаемые модули
import WebSocket from "ws";
import cors from "cors";
import http from "http";
import express from "express";
import { addUserOnField } from "./logic/addUserOnField";
import { moveUser } from "./logic/moveUser";

const app = express(), // объект типа "сервер"
  bodyParser = require("body-parser"); //модуль, который парсит post-запрос
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

//список пользователей
let users = [];

//игровое поле
let field = new Array(50).fill(new Array(50).fill(" ")).map((it) => it.slice());

app.post("/register", function (req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(401);
    res.send({ message: "Нужно ввести имя пользователя!" });
  } else {
    res.send({ id: users.length });
    users.push({ name, id: users.length });
  }
});

wss.on("connection", (ws) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === "placeMe") {
      [field, users] = addUserOnField(field, users, parsedMessage.userId);
      ws.send(JSON.stringify({ field }));
    }

    if (parsedMessage.type === "moveMe") {
      [field, users] = moveUser(
        field,
        users,
        parsedMessage.userId,
        parsedMessage.direction
      );
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ field, users }));
        }
      });
    }
  });
});

//start our server
server.listen(8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
