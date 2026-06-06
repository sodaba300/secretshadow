import './style.css'
import '@fontsource/orbitron/400.css'
import '@fontsource/orbitron/700.css'
import { initScaling } from './utils/scaling.js'
import { initGame } from './pages/game.js'

const app = document.querySelector('#app')
app.innerHTML = '<div id="game-container"></div>'

initScaling()
initGame(document.querySelector('#game-container'))
