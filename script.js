var random;
var p;
var keydown;
var db = 0;
var pressedGood = 0;
var pressedBad = 0;


function Start() {
    RandomNumber();
    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case "ArrowUp":
                document.getElementById("arrow-up").style = "background-color: lightgrey";
                if (randkey == "up") {
                    document.getElementById("display").style = "color: green";
                    delay(250).then(() => RandomNumber());
                    pressedGood++;
                }
                else {
                    document.getElementById("display").style = "color: red";
                    delay(250).then(() => RandomNumber());
                    pressedBad++;
                }
                db = db + 1
                break;
            case "ArrowLeft":
                document.getElementById('arrow-left').style = "background-color: lightgrey";
                if (randkey == "left") {
                    document.getElementById("display").style = "color: green";
                    delay(250).then(() => RandomNumber());
                    pressedGood++;
                }
                else {
                    document.getElementById("display").style = "color: red";
                    delay(250).then(() => RandomNumber());
                    pressedBad++;
                }
                db = db + 1
                break;
            case "ArrowDown":
                document.getElementById('arrow-down').style = "background-color: lightgrey";
                if (randkey == "down") {
                    document.getElementById("display").style = "color: green";
                    delay(250).then(() => RandomNumber());
                    pressedGood++;
                }
                else {
                    document.getElementById("display").style = "color: red";
                    delay(250).then(() => RandomNumber());
                    pressedBad++;
                }
                db = db + 1
                break;
            case "ArrowRight":
                document.getElementById('arrow-right').style = "background-color: lightgrey";
                if (randkey == "right") {
                    document.getElementById("display").style = "color: green";
                    delay(250).then(() => RandomNumber());
                    pressedGood++;
                }
                else {
                    document.getElementById("display").style = "color: red";
                    delay(250).then(() => RandomNumber());
                    pressedBad++;
                }
                db = db + 1
                break;
        }
    });
}

function RandomNumber() {
    random = Math.floor(Math.random() * 4);
    p = ["up", "left", "down", "right"];
    randkey = p[random];

    document.getElementById("display").style = "color: black;"
    document.getElementById("display").innerHTML = randkey;

    document.getElementById('arrow-up').style = "background-color: white";
    document.getElementById('arrow-left').style = "background-color: white";
    document.getElementById('arrow-down').style = "background-color: white";
    document.getElementById('arrow-right').style = "background-color: white";
}


function Stop() {
    keydown = "";
    document.getElementById("display").innerHTML = db + " katt | "+"pontoság: " + pressedGood + " / " + pressedBad;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }