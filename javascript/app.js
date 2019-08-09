let answers = ["b", "c", "a"];
let response = [];
let intervalId;
let time = 10;
let right = 0;
let wrong = 0;
intervalId = setInterval(count, 1000);
setTimeout(word, 10000);

function count() {
    if (time > 0) {
        time--;
        document.getElementById("show-number").innerHTML = time;
        console.log(time);

    } else {
        clearInterval(intervalId);
        checkResults();
    };

};

function word() {
    if (time > 0) {
        time--;
    } else {
        checkResults();
    };
    document.getElementById("show-number").innerHTML = time;
};
function checkResults() {
    let answer1 = document.getElementsByName("1");
    let answer2 = document.getElementsByName("2");
    let answer3 = document.getElementsByName("3");
    console.log("Answer 1: ", answer1);
    for (let i = 0; i < 3; i++) {
        if (answer1[i].checked) {
            response.push(answer1[i].value);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (answer2[i].checked) {
            response.push(answer2[i].value);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (answer3[i].checked) {
            response.push(answer3[i].value);
        }
    }
    let ptags = document.getElementsByClassName("questioncolor");

    const questioncontainer = document.getElementById("questions").querySelectorAll("input");
    questioncontainer.disable = true; 
    for (let i = 0; i < response.length; i++) {
        if (response[i] === answers[i]) {
            right++;
            ptags[i].classList.add("greenstyle");
        } else {
            wrong++;
            ptags[i].classList.add("redstyle");
        }
    }
    console.log("Results: ", "Right: ", right, "Wrong: ", wrong);
    let resultscontainer = document.getElementById("results");
    resultscontainer.innerHTML = "<h1> Time Up! </h1> <h2>Right: " + right + "</h2><h2>Wrong: " + wrong + "</h2>";
}
