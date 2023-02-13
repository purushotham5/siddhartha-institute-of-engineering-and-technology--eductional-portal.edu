// corrected question variables
let no1 = document.getElementById("correct1");
let no2 = document.getElementById("correct2");
let no3 = document.getElementById("correct3");
let no4 = document.getElementById("correct4");
let no5 = document.getElementById("correct5");
let no6 = document.getElementById("correct6");
let no7 = document.getElementById("correct7");
let no8 = document.getElementById("correct8");
let no9 = document.getElementById("correct9");
let no10 = document.getElementById("correct10");
let no11 = document.getElementById("correct11");
let no12 = document.getElementById("correct12");
let no13 = document.getElementById("correct13");
let no14 = document.getElementById("correct14");
let no15 = document.getElementById("correct15");
let no16 = document.getElementById("correct16");
let no17 = document.getElementById("correct17");
let no18 = document.getElementById("correct18");
let no19 = document.getElementById("correct19");
let no20 = document.getElementById("correct20");

let marks = document.getElementById("score");

// let w1 = document.getElementById("wrong");
// let w2 = document.getElementById("wrong1");
// let w3 = document.getElementById("wrong3");
// let w4 = document.getElementById("wrong4");
// let w5 = document.getElementById("wrong5");
// let w6 = document.getElementById("wrong6");
// let w7 = document.getElementById("wrong7");
// let w8 = document.getElementById("wrong8");
// let w9 = document.getElementById("wrong9");
// let w10 = document.getElementById("wrong10");

// let change1 = document.getElementById("qs-1");
// let change2 = document.getElementById("qs-2");
// let change3 = document.getElementById("qs-3");
// let change4 = document.getElementById("qs-4");
// let change5 = document.getElementById("qs-5");
// let change6 = document.getElementById("qs-6");
// let change7 = document.getElementById("qs-7");
// let change8 = document.getElementById("qs-8");
// let change9 = document.getElementById("qs-9");
// let change10 = document.getElementById("qs-10");

let totalScore = document.getElementById("mark-results");
let totalScores = document.getElementById("marks-results");
let totalQus = document.getElementById("num-ans");

let com = document.getElementById("compliments");

let goback = document.getElementById("back-to");
let gonext = document.getElementById("next-to");

let showresult1 = document.getElementById("over1");
let showresult2 = document.getElementById("over2");
let showresult3 = document.getElementById("over3");
let showresult4 = document.getElementById("over4");
let showresult5 = document.getElementById("over5");
let showresult6 = document.getElementById("over6");
let showresult7 = document.getElementById("over7");
let showresult8 = document.getElementById("over8");
let showresult9 = document.getElementById("over9");
let showresult10 = document.getElementById("over10");
let showresult11 = document.getElementById("over11");
let showresult12 = document.getElementById("over12");
let showresult13 = document.getElementById("over13");
let showresult14 = document.getElementById("over14");
let showresult15 = document.getElementById("over15");
let showresult16 = document.getElementById("over16");
let showresult17 = document.getElementById("over17");
let showresult18 = document.getElementById("over18");
let showresult19 = document.getElementById("over19");
let showresult20 = document.getElementById("over20");

let showerror1 = document.getElementById("overr1");
let showerror2 = document.getElementById("overr2");
let showerror3 = document.getElementById("overr3");
let showerror4 = document.getElementById("overr4");
let showerror5 = document.getElementById("overr5");
let showerror6 = document.getElementById("overr6");
let showerror7 = document.getElementById("overr7");
let showerror8 = document.getElementById("overr8");
let showerror9 = document.getElementById("overr9");
let showerror10 = document.getElementById("overr10");
let showerror11 = document.getElementById("overr11");
let showerror12 = document.getElementById("overr12");
let showerror13 = document.getElementById("overr13");
let showerror14 = document.getElementById("overr14");
let showerror15 = document.getElementById("overr15");
let showerror16 = document.getElementById("overr16");
let showerror17 = document.getElementById("overr17");
let showerror18 = document.getElementById("overr18");
let showerror19 = document.getElementById("overr19");
let showerror20 = document.getElementById("overr20");


// let notAttempt1 = document.getElementById("overrr1");
// let notAttempt2 = document.getElementById("overrr2");
// let notAttempt3 = document.getElementById("overrr3");
// let notAttempt4 = document.getElementById("overrr4");
// let notAttempt5 = document.getElementById("overrr5");
// let notAttempt6 = document.getElementById("overrr6");
// let notAttempt7 = document.getElementById("overrr7");
// let notAttempt8 = document.getElementById("overrr8");
// let notAttempt9 = document.getElementById("overrr9");
// let notAttempt10 = document.getElementById("overrr10");

let stop = document.getElementById("sub-quiz");
stop.addEventListener("click", results);


let score = 0;

function results() {
    let qusWrite = 0;

    if (no1.checked) {
        score++;
        qusWrite++;
    }
    if (no2.checked) {
        score++;
        qusWrite++;

    }
    if (no3.checked) {
        score++;
        qusWrite++;

    }
    if (no4.checked) {
        score++;
        qusWrite++;

    }
    if (no5.checked) {
        qusWrite++;

        score++;
    }
    if (no6.checked) {
        qusWrite++;

        score++;
    }
    if (no7.checked) {
        score++;
        qusWrite++;

    }
    if (no8.checked) {
        score++;
        qusWrite++;

    }
    if (no9.checked) {
        score++;
        qusWrite++;

    }
    if (no10.checked) {
        qusWrite++;

        score++;
    }
    if (no11.checked) {
        qusWrite++;

        score++;
    }
    if (no12.checked) {
        score++;
        qusWrite++;

    }
    if (no13.checked) {
        qusWrite++;

        score++;
    }
    if (no14.checked) {
        qusWrite++;

        score++;
    }
    if (no15.checked) {
        qusWrite++;

        score++;
    }
    if (no16.checked) {
        qusWrite++;

        score++;
    }
    if (no17.checked) {
        score++;
        qusWrite++;

    }
    if (no18.checked) {
        qusWrite++;

        score++;
    }
    if (no19.checked) {
        qusWrite++;

        score++;
    }
    if (no20.checked) {
        qusWrite++;

        score++;
    }

    totalScore.innerHTML = "Score = " + qusWrite + "/20";
    totalScores.innerHTML = "Score = " + qusWrite + "/20";
    totalQus.innerHTML = "Qus Corrected = " + qusWrite;


    if (score == 40) {
        com.innerHTML = "Wow! Congrates";
        com.style.color = "black";
        com.style.background = "green";
        com.style.boxShadow = "1px 1px 2px 2px black";
    } else if (score >= 35) {
        com.innerHTML = "Wow! Nice Try Keep It Up Like This";
        com.style.color = "none";
        com.style.background = "rgb(225, 225, 225, 0.9)";
    } else if (score >= 15 && score < 35) {
        com.innerHTML =
            "Good Performance! Try to keep push your self for good marks";
        com.style.color = "none";
        com.style.background = "rgb(225, 225, 225, 0.9)";
    } else if (score >= 5 && score < 15) {
        com.innerHTML = "Just Pass try to lean something more Good Luck";
        com.style.color = "none";
        com.style.background = "rgb(225, 225, 225, 0.9)";
    } else if (score < 5) {
        com.innerHTML = "Fail! Please concentrate";
        com.style.color = "black";
        com.style.background = "red";
        com.style.boxShadow = "1px 1px 2px 2px black";
    }

    stop.disabled = true;


    alert("Click View Score to view your score");
}



let viewscoredisable = document.getElementById("ViewScore");
viewscoredisable.addEventListener("click", viewScore);

function viewScore() {
    let a;
    if (a == true) {
        document.getElementById("topp").style.top = "-1000px";
    } else {
        document.getElementById("topp").style.top = "000px";
    }
    if (no1.checked) {
        showresult1.style.display = "block";
    } else {
        showerror1.style.display = "block";

    }
    if (no2.checked) {
        showresult2.style.display = "block";
    } else {
        showerror2.style.display = "block";
    }
    if (no3.checked) {
        showresult3.style.display = "block";
    } else {
        showerror3.style.display = "block";
    }
    if (no4.checked) {
        showresult4.style.display = "block";
    } else {
        showerror4.style.display = "block";
    }
    if (no5.checked) {
        showresult5.style.display = "block";
    } else {
        showerror5.style.display = "block";
    }
    if (no6.checked) {
        showresult6.style.display = "block";
    } else {
        showerror6.style.display = "block";
    }
    if (no7.checked) {
        showresult7.style.display = "block";
    } else {
        showerror7.style.display = "block";
    }
    if (no8.checked) {
        showresult8.style.display = "block";
    } else {
        showerror8.style.display = "block";
    }
    if (no9.checked) {
        showresult9.style.display = "block";
    } else {
        showerror9.style.display = "block";
    }
    if (no10.checked) {
        showresult10.style.display = "block";
    } else {
        showerror10.style.display = "block";
    }
    if (no11.checked) {
        showresult11.style.display = "block";
    } else {
        showerror11.style.display = "block";

    }
    if (no12.checked) {
        showresult12.style.display = "block";
    } else {
        showerror12.style.display = "block";
    }
    if (no13.checked) {
        showresult13.style.display = "block";
    } else {
        showerror13.style.display = "block";
    }
    if (no14.checked) {
        showresult14.style.display = "block";
    } else {
        showerror14.style.display = "block";
    }
    if (no15.checked) {
        showresult15.style.display = "block";
    } else {
        showerror15.style.display = "block";
    }
    if (no16.checked) {
        showresult16.style.display = "block";
    } else {
        showerror16.style.display = "block";
    }
    if (no17.checked) {
        showresult17.style.display = "block";
    } else {
        showerror17.style.display = "block";
    }
    if (no18.checked) {
        showresult18.style.display = "block";
    } else {
        showerror18.style.display = "block";
    }
    if (no19.checked) {
        showresult19.style.display = "block";
    } else {
        showerror19.style.display = "block";
    }
    if (no20.checked) {
        showresult20.style.display = "block";
    } else {
        showerror20.style.display = "block";
    }
    viewscoredisable.disabled = true;

}


function closeScore() {
    let b;
    if (b == true) {
        document.getElementById("topp").style.top = "0";
    } else {
        document.getElementById("topp").style.top = "-1000px";
    }
    // window.location.href = "cd bit-1.html";
}


window.onloadstart = results;
window.onloadstart = closeScore;
