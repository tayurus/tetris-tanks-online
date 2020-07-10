require("babel-polyfill");

import RenderingCore from '@/modules/core/rendering-core'
import GameMode from '@/modules/core/game-mode'
import AdvancedEvents from '@/modules/core/advanced-events'
import AudioManager from '@/modules/core/audio-manager'

import InvitationScreen from '@/modules/screens/invitation-screen'
import GameScreen from '@/modules/screens/game-screen'

import StartupScream from '@/modules/fun/startup-scream'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')

  const renderingCore = new RenderingCore(root)
  const gameMode = new GameMode()
  const advancedEvents = new AdvancedEvents(renderingCore)
  const audioManager = new AudioManager(advancedEvents)

  const invitationScreen = new InvitationScreen(renderingCore, gameMode, advancedEvents)
  const gameScreen = new GameScreen(renderingCore, gameMode, advancedEvents)

  const startupScream = new StartupScream(gameScreen, audioManager)
})

