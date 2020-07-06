"use strict";
//подключаемые модули
import WebSocket from "ws";
import cors from "cors";
import http from "http";
import express from "express";

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
const users = [];

//игровое поле
const field = new Array(20).fill(new Array(10).fill(" "));

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
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
