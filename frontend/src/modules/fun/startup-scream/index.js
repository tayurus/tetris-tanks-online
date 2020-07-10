import sound from './sound.mp3'

export default class StartupScream {
  constructor (gameScreen, audioManager) {
    this.gameScreen = gameScreen
    this.audioManager = audioManager

    this.gameScreen.onBegin.subscribe(() => {
      this.audioManager.play(sound)
    })

    // this.gameScreen.onEnd.subscribe(() => {
    //   this.audio.pause()
    // })
  }
}

