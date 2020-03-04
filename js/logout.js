var countdown = 5000;

var timer = setInterval(displayCountdown, 100);

function displayCountdown() {
    var countdownElement = document.getElementById("countdown");

    //Display countdown for the user experience

    countdown -= 100;
    countdownElement.innerHTML = (countdown / 1000.0).toFixed(1);

    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    }

}