import RenderingCore from '@/modules/rendering-core'
import GameMode from '@/modules/game-mode'

import InvitationScreen from '@/modules/invitation-screen'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')

  const renderingCore = new RenderingCore(root)
  const gameMode = new GameMode()

  const invitationScreen = new InvitationScreen(renderingCore, gameMode)
})



// let userId = -1;
// var socket = new WebSocket("ws://localhost:8999");
// socket.onopen = function () {
//   alert("Соединение установлено.");
// };
//
// socket.onclose = function (event) {
//   if (event.wasClean) {
//     alert("Соединение закрыто чисто");
//   } else {
//     alert("Обрыв соединения"); // например, "убит" процесс сервера
//   }
//   alert("Код: " + event.code + " причина: " + event.reason);
// };
//
// socket.onmessage = function (event) {
//   let data = JSON.parse(event.data);
//   console.log("Получены данные ", data);
//   document.getElementById("field").innerHTML = data.field
//     .map(
//       (row) =>
//         `<tr>${row
//           .map((cell) => `<td>${cell === " " ? "-" : cell}</td>`)
//           .join("")}</tr>`
//     )
//     .join("");
// };
//
// socket.onerror = function (error) {
//   alert("Ошибка " + error.message);
// };
//
// const register = async () => {
//   const response = await fetch("http://localhost:8999/register", {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify({ name: "htr" }),
//   });
//
//   const data = await response.json();
//   userId = data.id;
//
//   socket.send(JSON.stringify({ type: "placeMe", userId }));
// };
//
// document.onkeydown = function (e) {
//   switch (e.which) {
//     case 37: // left
//       socket.send(
//         JSON.stringify({ type: "moveMe", direction: "LEFT", userId })
//       );
//       break;
//
//     case 38: // up
//       socket.send(
//         JSON.stringify({ type: "moveMe", direction: "UP", userId })
//       );
//       break;
//
//     case 39: // right
//       socket.send(
//         JSON.stringify({ type: "moveMe", direction: "RIGHT", userId })
//       );
//       break;
//
//     case 40: // down
//       socket.send(
//         JSON.stringify({ type: "moveMe", direction: "BOTTOM", userId })
//       );
//       break;
//
//     default:
//       return; // exit this handler for other keys
//   }
//   e.preventDefault(); // prevent the default action (scroll / move caret)
// };