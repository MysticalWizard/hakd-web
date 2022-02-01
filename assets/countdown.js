// Set the date we're counting down to
const eventTime = new Date("Feb 25, 2022 17:00:00+08:00").getTime(),
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = eventTime - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in elements with id="cdHour/cdMin/cdSec"
    document.getElementById("days").innerHTML = ("0" + days).slice(-2);  
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    // If the count down is over, write some text 
    if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("countdownContent").style.display = "block";
        clearInterval(x);
    }
}, 1000);

