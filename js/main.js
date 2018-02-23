// import cat from 'cat';
// import basket from 'basket';
// import bomb from 'bomb';
// import * as health from './health.js';
// import music from 'music';
import * as playButton from './playButton.js';
// import restartButton from 'restartButton';
// import scoreboard from 'scoreboard';
import * as timer from './timer.js';

document.getElementById("start_button").addEventListener("click", playButton.start);
document.getElementById('start_button').addEventListener('click', timer);
const game = document.getElementById("game");
const context = game.getContext("2d");

