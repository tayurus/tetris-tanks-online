// require("babel-core/register");
require("babel-polyfill");

import RenderingCore from '@/modules/core/rendering-core'
import GameMode from '@/modules/core/game-mode'

import InvitationScreen from '@/modules/screens/invitation-screen'
import GameScreen from '@/modules/screens/game-screen'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')

  const renderingCore = new RenderingCore(root)
  const gameMode = new GameMode()

  const invitationScreen = new InvitationScreen(renderingCore, gameMode)
  const gameScreen = new GameScreen(renderingCore, gameMode)
})

