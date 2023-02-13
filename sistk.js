let images = [];
let time = 3000;
let i = 0;
images[0] = "cse.jpg";
images[1] = "ece.jpg";
images[2] = "eee.webp";
images[3] = "mech.png";
images[4] = "civil.png";


function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}


function Overley() {
    let a;
    let slow = document.getElementById("gone");
    if (a == true) {
        slow.style.top = "000px";
    } else {
        slow.style.top = "-1000px";
    }
}
window.onload = Overley;
window.onload = changeImg;