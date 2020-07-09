import { EventEmitter } from '@/libs/events'

/**
 * For more dpi screens canvas has to be kind of
 * "scaled in". Stick to 2 since it looks fine
 */
const RESOLUTION_FACTOR = 2

/**
 * Main module that creates a canvas and sets up rendering loop.
 * TODO: add interface overlay here in future
 *
 * has a canvas prop
 */
export default class RenderingCore {
  rect = null
  context = null
  onRender = new EventEmitter()

  constructor (root) {
    if (!root) {
      return console.log(`Root node is not provided, nothing is going to happen`)
    }

    root.innerHTML = ''

    // Make root take all the screen
    root.style.width = '100vw'
    root.style.height = '100vh'

    // Create a canvas
    this.rect = root.getBoundingClientRect()
    const canvas = document.createElement('canvas')

    // Setup a canvas
    canvas.width = this.rect.width * RESOLUTION_FACTOR
    canvas.height = this.rect.height * RESOLUTION_FACTOR

    canvas.style.width = this.rect.width
    canvas.style.height = this.rect.height

    root.appendChild(canvas)

    this.context = canvas.getContext('2d')
    this.context.scale(RESOLUTION_FACTOR, RESOLUTION_FACTOR)

    // Get context and setup rendering loop
    requestAnimationFrame(this.render)
  }

  /**
   * Main rendering method (looped by animation frame)
   */
  render = () => {
    this.context.clearRect(0, 0, this.rect.width * RESOLUTION_FACTOR, this.rect.height * RESOLUTION_FACTOR)

    this.context.translate(this.rect.width / 2, this.rect.height / 2)
    this.onRender.emitSync(this.context)
    this.context.translate(-this.rect.width / 2, -this.rect.height / 2)

    requestAnimationFrame(this.render)
  }
}