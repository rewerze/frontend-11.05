var random;
var p;
var keydown;
var osszes = 0;
var pressedGood = 0;
var on = false;
var timer;
var timeleft;
var reactionTimer;
var reactionAvg = 0;

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "Enter":
            Start();
            break;
        case "Backspace":
            Stop();
            break;
            case "ArrowUp":
                if (on) {
                    document.getElementById("arrow-up").style = "background-color: lightgrey";
                    Hit("Up");
                    osszes++;
                }
                break;
            case "ArrowLeft":
                if (on) {
                    document.getElementById("arrow-left").style = "background-color: lightgrey";
                    Hit("Left");
                    osszes++;
                }
                break;
            case "ArrowDown":
                if (on) {
                    document.getElementById("arrow-down").style = "background-color: lightgrey";
                    Hit("Down");
                    osszes++;
                }
                break;
            case "ArrowRight":
                if (on) {
                    document.getElementById("arrow-right").style = "background-color: lightgrey";
                    Hit("Right");
                    osszes++;
                }
                break;
    }
});


function Start() {
    osszes = 0;
    pressedGood = 0;
    reactionAvg = 0;
    on = true;
    timeleft = 0;
    timer = clearInterval(timer);

    Timer();
    RandomNumber();
}

function RandomNumber() {
    random = Math.floor(Math.random() * 4);
    p = ["Up", "Left", "Down", "Right"];
    randkey = p[random];

    document.getElementById("display").style = "color: black;"
    document.getElementById("display").innerHTML = randkey;

    document.getElementById('arrow-up').style = "background-color: white";
    document.getElementById('arrow-left').style = "background-color: white";
    document.getElementById('arrow-down').style = "background-color: white";
    document.getElementById('arrow-right').style = "background-color: white";
}


function Stop() {
    document.getElementById("timer").innerHTML = (20 - timeleft) + "mp alatt";
    timeleft = 0;
    timer = clearInterval(timer);
    keydown = "";
    document.getElementById("display").innerHTML = osszes + " katt | "
    + "pontoság: " + pressedGood + " / " + (osszes - pressedGood)
    + " | " + "reakció idő: ";
    on = false;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function Timer() {
    timeleft = 20;
    timer = setInterval(function(){
    if(timeleft == 0){
        clearInterval(timer);
        Stop(); 
    }
    document.getElementById("timer").innerHTML = timeleft + "mp van hátra";
    timeleft -= 1;
    }, 1000);
}

function Hit(arrow) {
    if (randkey == arrow) {
        document.getElementById("display").style = "color: green";
        delay(250).then(() => RandomNumber());
        pressedGood++;
    }
    else {
        document.getElementById("display").style = "color: red";
        delay(250).then(() => RandomNumber());
    }
}

// function ReactionTime() {
//     reactionTimer = setInterval(function() {
        
//     });
// }