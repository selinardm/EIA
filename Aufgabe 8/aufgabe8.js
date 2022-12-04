var Sounds = [(".A.mp3"), ("./C.mp3"), ("./F.mp3"), ("./G.mp3"),
    ("./hihat.mp3"), ("./kick.mp3"), ("./laugh-1.mp3"), ("./laugh-2.mp3"),
    ("./snare.mp3")];
var beat = [Sounds[4], Sounds[5], Sounds[8]];
var zaehler = 0;
//Funktionen// 
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function playBeat() {
    setInterval(function () {
        playSample(beat[zaehler]);
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
function addClickListenersDrumPad() {
    document.querySelector("#button1").addEventListener("click", function () { playSample(Sounds[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(Sounds[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(Sounds[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(Sounds[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(Sounds[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(Sounds[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(Sounds[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(Sounds[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(Sounds[8]); });
    document.querySelector(".play").addEventListener("click", function () { playBeat(); });
}
//# sourceMappingURL=aufgabe8.js.map