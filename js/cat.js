// let earth = new Image();
//         function init() {
//             earth.src = "../Catchy_Cat_Cat/img/pixel_cat_1.png";
//             window.requestAnimationFrame(draw);
//         }

//         function draw() {
//             let canvas = document.getElementById("canvas");
//             let ctx = document.getElementById('canvas').getContext('2d');
//             // ctx.globalCompositeOperation = 'destination-over';
//             ctx.clearRect(0, 0, 300, 300); // clear canvas
//             ctx.save();
//             let i;
//             for (i = 0; i < 300 ; i++) {
                
//                 setTimeout(function timer() {
//                     ctx.drawImage(earth, 0,i);
//                     ctx.restore();
//                 console.log(i);
//                 }, i * 2000);
//                 // window.requestAnimationFrame(draw);
//             }
//         }

//         init();