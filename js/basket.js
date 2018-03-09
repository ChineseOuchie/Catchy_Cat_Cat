// const game = document.getElementById("game");
// const context = game.getContext("2d");

// let basketX = 140;
// let mand = new Image();
// //draw basket
// function basket() {

//     mand.src = '../img/pixelated_basked.png';
//     mand.onload = function(){
//         //img x y width height
//         context.drawImage(mand, basketX, 120, 20,20);

//     };
// }
// window.addEventListener("keydown", checkKeyPressed, false);

// function checkKeyPressed(e) {
//     if (e.keyCode == "37") {
//         if(basketX === 0 ){
//             basketX = 0
//         }else {
//             basketX = basketX - 20;
//             console.log(basketX);
//             context.clearRect(basketX,100,100,40);
//             context.drawImage(mand, basketX, 120, 20,20);
//         }
//     }
//     if (e.keyCode == "39") {
//         if(basketX >= 280 ){
//             basketX = 280
//         }else {
//             basketX = basketX + 20;
//             console.log(basketX);
//             context.clearRect(basketX,100,-200,50);
//             context.drawImage(mand, basketX, 120, 20,20);
//         }
//     }
// }
// export {basket};
//