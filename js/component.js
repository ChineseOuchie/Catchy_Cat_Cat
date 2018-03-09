// import { myGameArea } from "./canvas";
export{component};

let myGamePiece;

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        context = myGameArea.context;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};

