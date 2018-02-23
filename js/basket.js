// import * as main from './main.js';
// const context = main.context;
// const canvas = main.canvas;
// function writeMessage(canvas, message) {
//     context.context.clearRect(0, 0, canvas.width, canvas.height);
//     context.context.font = '18pt Calibri';
//     context.context.fillStyle = 'black';
//     context.context.fillText(message, 10, 25);
// }
// function getMousePos(canvas, evt) {
//     const rect = canvas.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }
//
// function mousePos(evt) {
//     const mousePos = getMousePos(canvas, evt);
//     const message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     writeMessage(canvas, message);
// }
//
// export {mousePos}