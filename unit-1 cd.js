var images = [];
images[0] = "1.png";
images[1] = "2.png";
images[2] = "3.png";
images[3] = "4.png";
images[4] = "5.png";

var i = 0;
var len = images.length - 1;
const go = document.getElementById("pre").disabled = true;
const go1 = document.getElementById("next");
const go2 = document.getElementById("quiz").disabled = true;

function goNext() {
    document.slider.src = images[i];
    if (i == len) {
        go1.disabled = true;
        document.getElementById("quiz").disabled = false;
    } else if (i > 0) {
        document.getElementById("pre").disabled = false;
        i++;

    } else {
        i++;
    }
}

function goPre() {
    document.slider.src = images[i];
    if (i <= 0) {

        go.disabled = true;
        go1.disabled = false;
    } else if (i == 0) {
        document.getElementById("pre").disabled = false;
    } else {
        i = i - 1;
    }
}

function goQuiz() {
    window.location.href = "cd bit-1.html";
}


window.onload = goPre;
window.onload = goNext;