// import * as cat from './cat.js';
import * as basket from './basket.js';
// import * as bomb from './bomb.js';
// import * as health from './health.js';
// import * as music from './music.js';
import * as playButton from './playButton.js';
// import * as restartButton from './restartButton.js';
// import * as scoreboard from './scoreboard.js';
import * as timer from './timer.js';

document.getElementById("start_button").addEventListener("click", playButton.start);
document.getElementById('start_button').addEventListener('click', timer);
const game = document.getElementById("game");
const context = game.getContext("2d");
export {game, context};
// context.fillText(a, 10, 10);

// document.getElementById('start_button').addEventListener('click', basket.mousePos);
// game.addEventListener('mousemove', basket.mousePos(evt));