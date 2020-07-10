import { EventEmitter } from '@/libs/events'

/**
 * A module to keep information about what state game is now
 * primarily used for first screen
 */
export default class GameMode {
  mode = 'invitation-screen'
  onUpdate = new EventEmitter()

  setMode = (mode) => {
    this.mode = mode
    this.onUpdate.emitSync()
  }
}