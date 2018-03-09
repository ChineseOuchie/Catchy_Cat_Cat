// // import * as cat from './cat.js';
// import * as basket from './basket.js';
// // import * as bomb from './bomb.js';
// // import * as health from './health.js';
// // import * as music from './music.js';
// import * as playButton from './playButton.js';
// // import * as restartButton from './restartButton.js';
// // import * as scoreboard from './scoreboard.js';
// import * as timer from './timer.js';
// import * as canvas from './canvas.js';
// import * as component from './component.js';

let myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, 'red', 10, 120);
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
}

startGame();    