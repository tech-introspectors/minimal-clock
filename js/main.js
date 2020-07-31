// js for side navigation //

const x = document.querySelector("#side-navbar");

openNav = () =>{
    x.style.transform = "translateX(0%)"
    x.style.transitionDuration = "1s";
}
closeNav = () =>{
    x.style.transform = "translate(-100%)";
    x.style.transitionDuration = "1s";
}



// js for clock //

const deg = 6
const hr  = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    
})

// js for dark-light theme //

toggleClass = () =>{
    const body = document.querySelector('body');
    body.classList.toggle('light');
}