import { EventEmitter } from '@/libs/events'

/**
 * Tha Game Screen itself.
 *
 * Manages connection, game state, renders it and handles key events
 */
export default class GameScreen {
  /* Hooks for other modules */
  onBegin = new EventEmitter()
  onEnd = new EventEmitter()

  constructor (renderingCore, gameMode, advancedEvents) {
    this.renderingCore = renderingCore
    this.gameMode = gameMode
    this.advancedEvents = advancedEvents

    this.renderingCore.onRender.subscribe(this.render)
    this.gameMode.onUpdate.subscribe(this.handleModeUpdate)
  }

  handleModeUpdate = () => {
    if (this.gameMode.mode === 'game-screen') {
      this.beginGame()
    } else {
      this.endGame()
    }
  }

  /**
   * Game state
   */
  socket = null
  gameState = 'nope'

  userId = null
  users = []

  /**
   * Begin/End game handlers (handling gamemode switch)
   */
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

      /* Subscribe */
      this.advancedEvents.onKeyDown.subscribe(this.handleKeyDown)

      /* Let other modules know it's all good */
      this.onBegin.emitSync()
    }
  }

  endGame = () => {
    if (this.gameState === 'idle') {
      /* Drop the connection */
      /* Update the game state */
      this.gameState = 'nope'
      this.advancedEvents.onKeyDown.unsubscribe(this.handleKeyDown)
      this.onEnd.emitSync()
    }
  }

  /**
   * Handling key presses
   */
  handleKeyDown = (keyCode) => {
    if ([37, 38, 39, 40].includes(keyCode)) {
      const direction = { '37': 'LEFT', '38': 'UP', '39': 'RIGHT', '40': 'BOTTOM' }[keyCode]

      this.socket.send(JSON.stringify({ type: "moveMe", direction, userId: this.userId }))
    }
  }

  /**
   * Handling websocket events
   */
  handleWebsocketMessage = (e) => {
    const { users } = JSON.parse(e.data)

    this.users = users || []
  }

  /**
   * Rendering the game state
   */
  render = (context) => {
    if (this.gameMode.mode === 'game-screen') {
      const { width, height } = this.renderingCore.rect

      /* Fill the background with blue */
      context.beginPath()
      context.rect(-width/2, -height/2, width, height)
      context.fillStyle = '#069'
      context.fill()

      /* Render loading state */
      if (this.gameState === 'connecting') {
        context.font = "400 18px 'Source Code Pro'";
        context.fillStyle = 'white'
        context.textAlign = 'center'
        context.fillText("Загрузка...", 0, 0);
      }

      if (this.gameState === 'idle') {
        if (this.field !== null) {
          const CELL_SIZE = Math.min(100, Math.floor((this.renderingCore.rect.height * .8) / 20))
          const CELL_PADDING = 5

          context.save()
          context.translate(-5*(CELL_SIZE + CELL_PADDING), -10*(CELL_SIZE + CELL_PADDING))

          this.users.forEach(({ name, id, col: x, row: y, direction }) => {
            context.fillStyle = id === this.userId ? '#ffc107' : '#ff5722'

            const mask = [
              ['rb',  'lur',  'lb'],
              ['lub', 'lurb', 'rub'],
              ['ru',  'lrb',  'lu'],
            ]

            const modifier = direction.toLowerCase().slice(0, 1)

            ;[0, 1, 2].forEach((ox) => {
              [0, 1, 2].forEach((oy) => {
                if (mask[oy][ox].indexOf(modifier) > -1) {
                  square(context, x + ox, y + oy, CELL_SIZE, CELL_PADDING)
                }
              })
            })
          })

          context.restore()
        }
      }
    }
  }
}

const square = (context, x, y, size, padding) => {
  context.beginPath()
  context.rect(x * (size + padding), y * (size + padding), size, size)
  context.fill()
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
