import { EventEmitter } from '@/libs/events'

/**
 * This module captures events, transformes them to one format
 * and forward to other modules
 */
export default class AdvancedEvents {
  /* All the possible events */
  onMouseDown = new EventEmitter()
  onMouseUp = new EventEmitter()
  onMouseMove = new EventEmitter()
  onDrag = new EventEmitter()
  onClick = new EventEmitter()
  onZoom = new EventEmitter()
  onKey = new EventEmitter()
  onKeyDown = new EventEmitter()
  onKeyUp = new EventEmitter()

  lastmousepos = null
  mousepressed = false

  constructor (renderingCore) {
    this.renderingCore = renderingCore

    /* On startup */
    this.renderingCore.onInit.subscribe((root) => {
      /* Create an overlay */
      const overlay = document.createElement('div')

      /* Make it hide the canvas */
      overlay.style.width = '100vw'
      overlay.style.height = '100vh'
      overlay.style.position = 'absolute'
      overlay.style.top = '0'
      overlay.style.left = '0'

      root.appendChild(overlay)

      /* Setup events capture on it */
      overlay.addEventListener('mousedown', (e) => {
        if (e.target !== overlay) {
          return
        }

        const { clientX: x, clientY: y } = e

        this.lastmousepos = { x, y }
        this.mousepressed = true

        this.onMouseDown.emitSync({ x, y })
      })

      overlay.addEventListener('mousemove', (e) => {
        if (e.target !== overlay) {
          return
        }

        const { clientX: x, clientY: y } = e

        if (this.mousepressed) {
          const offsetx = x - this.lastmousepos.x, offsety = y - this.lastmousepos.y

          this.onDrag.emitSync({ x: offsetx, y: offsety })
          this.lastmousepos = { x, y }
        }

        this.onMouseMove.emitSync({ x, y })
      })

      overlay.addEventListener('mouseup', (e) => {
        if (e.target !== overlay) {
          return
        }

        const { clientX: x, clientY: y } = e

        if (this.mousepressed) {
          const offsetx = this.lastmousepos.x - x, offsety = this.lastmousepos.y - y

          /* If the absolute diif in coords is less than threshold (30) it's a click */
          if (Math.abs(offsetx) + Math.abs(offsety) < 20) {
            this.onClick.emitSync({ x, y })
          }

          this.mousepressed = false
        }

        this.onMouseUp.emitSync({ x, y })
      })

      overlay.addEventListener('mousewheel', (e) => {
        const { clientX: x, clientY: y } = e

        this.onZoom.emitSync({ x, y, delta: e.deltaY })
        e.preventDefault()
      })

      document.addEventListener('keydown', (e) => {
        this.onKeyDown.emitSync(e.keyCode)
        this.onKey.emitSync(e.keyCode)
      })

      document.addEventListener('keyup', (e) => {
        this.onKeyUp.emitSync(e.keyCode)
      })
    })
  }
}
