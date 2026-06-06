import './style.css'
import './fonts/orbitron.css'
import { initScaling } from './utils/scaling.js'
import { initGame } from './pages/game.js'

const app = document.querySelector('#app')
app.innerHTML = '<div id="game-container"></div>'

initScaling()
initGame(document.querySelector('#game-container'))
