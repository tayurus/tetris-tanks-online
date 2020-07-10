/**
 * Tha Game Screen itself.
 *
 * Manages connection, game state, renders it and handles key events
 */
export default class GameScreen {
  constructor (renderingCore, gameMode) {
    this.renderingCore = renderingCore
    this.gameMode = gameMode

    this.renderingCore.onRender.subscribe(this.render)
    this.gameMode.onUpdate.subscribe(this.handleModeUpdate)
  }

  handleModeUpdate = () => {
    if (this.gameMode.mode === 'game-screen') {
      /* If the mode was changed to game screen, we have to start the game */
      this.beginGame()
    } else {
      /* Drop the connection if connection is open */
      this.endGame()
    }
  }

  socket = null
  gameState = 'nope'
  userId = null
  field = null
  beginGame = async () => {
    if (this.gameState === 'nope') {
      /* Establish a websocket connection */
      this.gameState = 'connecting'
      this.socket = new WebSocket("ws://localhost:8999")
      this.socket.onmessage = this.handleWebsocketMessage

      /* Await the connection */
      await new Promise((resolve, reject) => {
        this.socket.onopen = resolve
        this.socket.onerror = reject
      })

      /* Register */
      this.gameState = 'registering'
      const response = await fetch("http://localhost:8999/register", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ name: "htr" }),
      });

      const data = await response.json();
      this.userId = data.id;

      /* Send first message */
      this.socket.send(JSON.stringify({ type: "placeMe", userId: this.userId }));

      /* All good now */
      this.gameState = 'idle'

      /* TODO refactor this to a separate module */
      document.onkeydown = (e) => {
        if ([37, 38, 39, 40].includes(e.which)) {
          const direction = { '37': 'LEFT', '38': 'UP', '39': 'RIGHT', '40': 'BOTTOM' }[e.which]

          this.socket.send(JSON.stringify({ type: "moveMe", direction, userId: this.userId }))
        }
      };
    }
  }

  endGame = () => {
    if (this.gameState === 'idle') {
      /* Drop the connection */
      /* Update the game state */
    }
  }

  handleWebsocketMessage = (e) => {
    this.field = JSON.parse(e.data).field
  }

  render = (context) => {
    if (this.gameMode.mode === 'game-screen') {
      const { width, height } = this.renderingCore.rect

      /* Fill the background with blue */
      context.beginPath()
      context.rect(-width/2, -height/2, width, height)
      context.fillStyle = '#069'
      context.fill()

      /* Render loading state */
      if (['connecting'].includes(this.gameState)) {
        context.font = "400 18px 'Source Code Pro'";
        context.fillStyle = 'white'
        context.textAlign = 'center'
        context.fillText("Загрузка...", 0, 0);
      }

      if (this.gameState === 'idle') {
        if (this.field !== null) {
          const CELL_SIZE = Math.min(100, Math.floor((this.renderingCore.rect.height * .8) / 20))
          const CELL_PADDING = 1

          context.save()
          context.translate(-5*(CELL_SIZE + CELL_PADDING), -10*(CELL_SIZE + CELL_PADDING))

          this.field.forEach((row, y) => {
            row.forEach((item, x) => {
              if (item === '*') {
                context.beginPath()
                context.fillStyle = '#ff5722'
                context.rect(x * (CELL_SIZE + CELL_PADDING), y * (CELL_SIZE + CELL_PADDING), CELL_SIZE, CELL_SIZE)
                context.fill()
              }
            })
          })

          context.restore()
        }
      }
    }
  }
}

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     alert("Соединение закрыто чисто");
//   } else {
//     alert("Обрыв соединения"); // например, "убит" процесс сервера
//   }
//   alert("Код: " + event.code + " причина: " + event.reason);
// };
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
// socket.onerror = function (error) {
//   alert("Ошибка " + error.message);
// };
