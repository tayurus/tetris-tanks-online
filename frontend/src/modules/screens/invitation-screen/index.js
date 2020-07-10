/**
 * This is a plugin that renders invitation screen
 */
export default class InvitationScreen {
  constructor (renderingCore, gameMode, advancedEvents) {
    this.renderingCore = renderingCore
    this.gameMode = gameMode
    this.advancedEvents = advancedEvents

    this.renderingCore.onRender.subscribe(this.render)

    /* Create a "tank" that rides in the background */
    this.tanks = (new Array(10).fill(0)).map(() => ({
      position: {
        x: Math.random() * this.renderingCore.rect.width,
        y: Math.random() * this.renderingCore.rect.height,
      },
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 10,
    }))

    setInterval(() => {
      this.tanks.forEach((tank) => {
        // console.log(tank.position)
        tank.position.x += Math.cos(tank.angle) * tank.speed
        tank.position.y += Math.sin(tank.angle) * tank.speed

        /* If tank is outside the screen put it back */
        if (Math.abs(tank.position.x) > this.renderingCore.rect.width) {
          tank.position.x = -tank.position.x
        }
        if (Math.abs(tank.position.y) > this.renderingCore.rect.height) {
          tank.position.y = -tank.position.y
        }
      })
    }, 10)

    this.advancedEvents.onClick.subscribe(() => {
      if (this.gameMode.mode === 'invitation-screen') {
        this.gameMode.setMode('game-screen')
      }
    })
  }

  render = (context) => {
    if (this.gameMode.mode === 'invitation-screen') {
      const { width, height } = this.renderingCore.rect

      // Fill the background with blue
      context.beginPath()
      context.rect(-width/2, -height/2, width, height)
      context.fillStyle = '#069'
      context.fill()

      /**
       * Draw that beautiful moving tanks in the background
       */
      this.tanks.forEach((tank) => {
        context.save()
        context.translate(tank.position.x, tank.position.y)
        context.scale(5, 5)
        context.rotate(tank.angle)
        drawTank(context)
        context.restore()
      })

      // Put some text in center
      context.font = "900 52px 'Source Code Pro'";
      context.fillStyle = 'white'
      context.textAlign = 'center'
      context.fillText("Танки епта", 0, -100);

      context.font = "400 16px 'Source Code Pro'";
      context.fillStyle = 'white'
      context.textAlign = 'center'
      context.fillText("Че смотришь погнали нахуй", 0, -50);

      // Draw a button
      const buttonWidth = 140
      const buttonHeight = 40

      context.beginPath()
      context.rect(-buttonWidth/2, -buttonHeight/2, buttonWidth, buttonHeight)
      context.fillStyle = '#ff5722'
      context.fill()

      context.font = "bold 12px 'Source Code Pro'";
      context.fillStyle = 'white'
      context.textAlign = 'center'
      context.fillText("Го", 0, 4);
    }
  }
}

/**
 * Some rendering helpers
 */
const drawTank = (context) => {
  context.beginPath()
  context.rect(0, 0, 10, 10)
  context.fillStyle = '#ff5722'
  context.fill()

  context.beginPath()
  context.rect(11, 0, 10, 10)
  context.fill()

  context.beginPath()
  context.rect(11, 11, 10, 10)
  context.fill()

  context.beginPath()
  context.rect(11, 22, 10, 10)
  context.fill()

  context.beginPath()
  context.rect(0, 22, 10, 10)
  context.fill()

  context.beginPath()
  context.rect(22, 11, 10, 10)
  context.fill()
}