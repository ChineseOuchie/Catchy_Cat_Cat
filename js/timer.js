import * as playButton from "./playButton.js";
const game = document.getElementById("game");
const context = game.getContext("2d");
const x = 10;
const y = 20;
let countdown;

const audio  = new Audio();
audio.src = '../music/game_over.wav';
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
            context.clearRect(0, 0, game.width, game.height/2);
            context.fillText(secondsLeft, x, y);
            //add '0' when < 10
            if(secondsLeft < 10){
                context.clearRect(0, 0, game.width, game.height/2);
                context.fillText(`0 ${secondsLeft}`, x, y);
                // document.getElementById('tijd').innerHTML = '0'+ secondsLeft;
            }
            //game over
            if(secondsLeft === 0){
                context.font = '30px personalFont';
                context.clearRect(0, 0, game.width, game.height);
                context.fillText('Game Over', 70, 50);
                playButton.endMusic();
                audio.play();
                // document.getElementById('tijd').innerHTML = "Game Over";
            }
        }
    }
});