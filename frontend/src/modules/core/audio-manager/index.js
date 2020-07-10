/**
 * This module is intended to handle all audio manipulations in one place
 */
export default class AudioManager {
  constructor (advancedEvents) {
    this.advancedEvents = advancedEvents

    const url = new URL(window.location.href)
    this.off = !!url.searchParams.get("audio_off")

    if (!this.off) {
      console.log('Turn audio off by using ?audio_off=true query param')
    }
  }

  /**
   * Fire and forget for now
   */
  play = (url) => {
    const audio = new Audio(url)

    if (!this.off) {
      audio.play()
    }
  }
}