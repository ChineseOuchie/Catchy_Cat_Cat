// let timeLeft = 5;
// let x = setInterval(timer,1000);
// function timer() {
//     timeLeft--;
//     console.log(timeLeft);
// }
// if (timeLeft === 0){
//     clearInterval(x);
// }

const time = new Date(60).getTime();
let timer = setInterval(function () {
    let now = new Date().getTime();
    let countdown = time - now;
    let second = Math.floor((countdown % (1000 * 60)) / 1000);
    console.log(second);
},1000);

