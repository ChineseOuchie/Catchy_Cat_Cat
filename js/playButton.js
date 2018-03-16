export {start, endMusic};
const audio  = new Audio();
audio.src = '../music/arcade_song.wav';

function start() {
    document.getElementById("start_screen").style.display = "none";
    document.getElementById("game").style.display = "block";
    startMusic();
}
function startMusic() {
    audio.play();
}
function endMusic() {
    audio.pause();
}