// HakD Event Countdown
var endDate = new Date("Feb 25, 2022 16:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var remain = endDate - now;

    var d = Math.floor(remain / (1000 * 60 * 60 * 24));
    var h = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remain % (1000 * 60)) / 1000);

    document.getElementById("daysNum").innerHTML = ("0" + d).slice(-2);  
    document.getElementById("hoursNum").innerHTML = ("0" + h).slice(-2);
    document.getElementById("minsNum").innerHTML = ("0" + m).slice(-2);
    document.getElementById("secsNum").innerHTML = ("0" + s).slice(-2);
    if (remain < 0) {
        clearInterval(x);
        document.getElementById("countContainer").innerHTML = "WELCOME TO HAKD!";
    }
}, 1000);