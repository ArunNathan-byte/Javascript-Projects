function analog(){
    let clock = new Date();
    const second = clock.getSeconds() * 6;
    const minutes = clock.getMinutes() * 6;
    const hours = clock.getHours() * 30 + Math.round(minutes / 12);
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minutes + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hours + "deg)";
}
setInterval(analog,1000);
analog();