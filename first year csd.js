let images = [];
let time = 3000;
let i = 0;
images[0] = "dept-img/cse.jpg";
images[1] = "dept-img/ece.jpg";
images[2] = "dept-img/eee.webp";
images[3] = "dept-img/mech.png";
images[4] = "dept-img/civil.png";


function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}
window.onload = changeImg;