let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    
    let hRoration = 30 * hh + mm / 2;
    let mRoration = 6 * mm;
    let sRoration = 6 * ss;

   
    hr.style.transform = `rotate(${hRoration}deg)`;
    min.style.transform = `rotate(${mRoration}deg)`;
    sec.style.transform = `rotate(${sRoration}deg)`;
}


setInterval(displayTime, 1000);