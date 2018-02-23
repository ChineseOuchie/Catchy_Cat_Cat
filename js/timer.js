// let timeLeft = 5;
// let x = setInterval(timer,1000);
// function timer() {
//     timeLeft--;
//     console.log(timeLeft);
// }
// if (timeLeft === 0){
//     clearInterval(x);
// }

// const time = new Date(60).getTime();
// let timer = setInterval(function () {
//     let now = new Date().getTime();
//     let countdown = time - now;
//     let second = Math.floor((countdown % (1000 * 60)) / 1000);
//     console.log(second);
// },1000);

const game = document.getElementById("game");
const context = game.getContext("2d");

let countdown;
//click to begin
document.getElementById('start_button').addEventListener('click', function(){
    let seconds = 10;
    clearInterval(countdown);
    const nu = Date.now();
    const over = nu + seconds * 1000;
    showTime(seconds);
    
    countdown = setInterval(
        function(){
        const secondsLeft = Math.round((over - Date.now()) / 1000);
        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        showTime(secondsLeft);
    },1000);
    //display time
    function showTime(secondsLeft){
        //anti cheat
        if(secondsLeft >= 60){
            clearInterval(countdown);
            document.getElementById('tijd').innerHTML = "Don't cheat the time";

        }else{
            context.clearRect(0, 0, game.width, game.height);
            context.fillText(secondsLeft, 10, 10);
            //add '0' when < 10
            if(secondsLeft < 10){
                context.clearRect(0, 0, game.width, game.height);
                context.fillText(`0 ${secondsLeft}`, 10, 10);
                // document.getElementById('tijd').innerHTML = '0'+ secondsLeft;
            }
            //game over
            if(secondsLeft === 0){
                context.clearRect(0, 0, game.width, game.height);
                context.fillText('Game Over', 10, 10);
                // document.getElementById('tijd').innerHTML = "Game Over";
            }
        }
    }
});