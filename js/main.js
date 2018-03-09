// // import * as cat from './cat.js';
// import * as basket from './basket.js';
// // import * as bomb from './bomb.js';
// // import * as health from './health.js';
// // import * as music from './music.js';
// import * as playButton from './playButton.js';
// // import * as restartButton from './restartButton.js';
// // import * as scoreboard from './scoreboard.js';
// import * as timer from './timer.js';
import * as canvas from './canvas.js';
import * as component from './component.js';


// document.getElementById("start_button").addEventListener("click", playButton.start);
// document.getElementById('start_button').addEventListener('click', timer);
// const game = document.getElementById("game");
// const context = game.getContext("2d");
// context.font = '20px personalFont';
// basket.basket();

let myGamePiece;

function startGame() {
    canvas.myGameArea.start();
    myGamePiece = new component.component(30, 30, "red", 10, 120);
}



startGame();    