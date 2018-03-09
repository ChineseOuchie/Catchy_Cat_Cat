export {myGameArea};

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = "500px";
        this.canvas.height = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}