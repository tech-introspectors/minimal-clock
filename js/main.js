// js for side navigation //

var x  = document.querySelector('#nav-section');

function openNav(){
    x.style.transform = "translate(0%)";
    x.style.transitionDuration = "1s";
}
function closeNav(){
    x.style.transform = "translate(-100%)";
    x.style.transitionDuration = "1s";
}


// js for clock //

const deg = 6
const hr  = document.querySelector('#hr');
const min1 = document.querySelector('#min');
const sec1 = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min1.style.transform = `rotateZ(${mm}deg)`;
    sec1.style.transform = `rotateZ(${ss}deg)`;
    
})

// js for dark-light theme //

toggleClass = () =>{
    const body = document.querySelector('body');
    body.classList.toggle('light');
}


// js for stop-watch //

var min = 0, sec = 0, ms = 0;
var timer;

var stopwatchElement = document.querySelector('#screen');
var lapsContainer = document.querySelector('#laps');

function start() {
    timer = setInterval(run, 10);
}

function run(){
    stopwatchElement.textContent = (min < 10 ? "0" + min : min) + " : " + (sec < 10 ? "0" + sec : sec) + " : " + (ms < 10 ? "0" + ms : ms);
    ms++;
    if(ms == 100){
        ms = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++;
    }
}

function stop(){
    clearInterval(timer);
    timer = false;
}

function reset(){
    clearInterval(timer);
    timer = false;
    min = 0;
    sec = 0;
    ms = 0;
    stopwatchElement.textContent = (min < 10 ? "0" + min : min) + " : " + (sec < 10 ? "0" + sec : sec) + " : " + (ms < 10 ? "0" + ms : ms);
    

}