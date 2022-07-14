var start_button = document.getElementById("start");
var mainRoom = document.getElementById("mainRoom");
start_button.addEventListener("click", function() {
    start_button.style.display = "none";
    mainRoom.style.display = "block";
});
//game1
var computer = document.getElementById("computer");
var game1 = document.getElementById("game1");
var x = document.getElementById("x");
computer.addEventListener("click", function() {
    game1.style.display = "block";
});

x.addEventListener("click", function() {
    game1.style.display = "none";
});

//to start the game button
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});

//Memory Game
var memorygame = false;
let cardColor = [
    "#990000",
    "#00FFAB",
    "blue",
    "black",
    "#84577C",
    "tomato",
    "#990000",
    "#00FFAB",
    "blue",
    "black",
    "#84577C",
    "tomato",
];

// console.log(color_Shuffle(card));
// console.log(color_Shuffle(card));

function color_Shuffle(shuffleArray) {
    let shuffle_array = [];
    let used_index = [];
    var i = 0;
    while (i < shuffleArray.length) {
        let random_num = Math.floor(Math.random() * shuffleArray.length);
        if (!used_index.includes(random_num)) {
            shuffle_array.push(shuffleArray[random_num]);
            used_index.push(random_num);
            i++;
            for (let index = 0; index < shuffle_array.length; index++) {
                document.getElementsByClassName("cards")[index].style.background =
                    shuffle_array[index];
            }
        }
    }
    return shuffle_array;
}

var card1 = "";
var card2 = "";
var firstId = "";
var secondId = "";
var count = 0;

function ckick_color(obj) {
    if (card1 == "") {
        firstId = obj.id;
        card1 = obj.style.background;
    } else {
        secondId = obj.id;
        card2 = obj.style.background;
    }
    if (card1 == card2 && firstId != secondId) {
        document.getElementById(firstId).style.display = "none";
        document.getElementById(secondId).style.display = "none";
        count++;
    }
    if (card1.length != 0 && card2.length != 0) {
        card1 = "";
        card2 = "";
        firstId = "";
        secondId = "";
    }
    if (count == 6) {
        document.getElementById("checkCard").innerHTML = "You Solved It!";
        memorygame = true;
        verifyOverall();
    }
}

//game2 start

// game2
var mathPuzzleSolved = false;
var calculator = document.getElementById("calculator");
var game2 = document.getElementById("game2");
var x = document.getElementById("cross");

calculator.addEventListener("click", function() {
    game2.style.display = "grid";
});

x.addEventListener("click", function() {
    game2.style.display = "none";
});
var position1;
var position2;
var position3;
var position4;
var position5;
var position6;
var position7;
var choice;
var plus2 = true;
var plus4 = true;
var sumtotal;
var choicecorrect;

function incorrectsms() {
    document.getElementById("message").innerHTML =
        "Sorry your choice is incorrect!";
}

function fullsms() {
    document.getElementById("message").innerHTML =
        "Sorry,there are no more position to fill!";
}

function winsms() {
    document.getElementById("message").innerHTML = "OMG,YOU DID IT!";
}

function wrongsms() {
    document.getElementById("message").innerHTML = "Oh no,Try again!";
}

function reset() {
    position1 = void 0;
    position2 = void 0;
    position3 = void 0;
    position4 = void 0;
    position5 = void 0;
    position7 = void 0;
    document.getElementById("num1").innerHTML = "Number";
    document.getElementById("num2").innerHTML = "Sign";
    document.getElementById("num3").innerHTML = "Number";
    document.getElementById("num4").innerHTML = "Sign";
    document.getElementById("num5").innerHTML = "Number";
    document.getElementById("num7").innerHTML = "Number";
}

function checknumber(x) {
    for (let i = 0; i < 10; i++) {
        if (x == i) {
            var y = true;
            return y;
            i = 10;
        } else {
            var y = false;
        }
    }
    return y;
}

function checksign(x) {
    if (x == "+" || x == "-") {
        var y = true;
    } else {
        var y = false;
    }
    return y;
}

function assignposition1() {
    choicecorrect = checknumber(choice);
    if (choicecorrect == true) {
        position1 = choice;
        document.getElementById("num1").innerHTML = position1;
    } else {
        incorrectsms();
    }
}

function assignposition2() {
    choicecorrect = checksign(choice);
    if (choicecorrect == true) {
        position2 = choice;
        document.getElementById("num2").innerHTML = choice;
        if (choice == "-") {
            plus2 = false;
        }
    } else {
        incorrectsms();
    }
}

function assignposition3() {
    choicecorrect = checknumber(choice);
    if (choicecorrect == true) {
        position3 = choice;
        document.getElementById("num3").innerHTML = choice;
    } else {
        incorrectsms();
    }
}

function assignposition4() {
    choicecorrect = checksign(choice);
    if (choicecorrect == true) {
        position4 = choice;
        document.getElementById("num4").innerHTML = choice;
        if (choice == "-") {
            plus4 = false;
        }
    } else {
        incorrectsms();
    }
}

function assignposition5() {
    choicecorrect = checknumber(choice);
    if (choicecorrect == true) {
        position5 = choice;
        document.getElementById("num5").innerHTML = choice;
    } else {
        incorrectsms();
    }
}

function assignposition7() {
    choicecorrect = checknumber(choice);
    if (choicecorrect == true) {
        position7 = choice;
        document.getElementById("num7").innerHTML = choice;
        calculatesum();
    } else {
        incorrectsms();
    }
}

function oneclick() {
    choice = 1;
    emptyposition();
}

function twoclick() {
    choice = 2;
    emptyposition();
}

function threeclick() {
    choice = 3;
    emptyposition();
}

function fourclick() {
    choice = 4;
    emptyposition();
}

function fiveclick() {
    choice = 5;
    emptyposition();
}

function sixclick() {
    choice = 6;
    emptyposition();
}

function sevenclick() {
    choice = 7;
    emptyposition();
}

function eightclick() {
    choice = 8;
    emptyposition();
}

function nineclick() {
    choice = 9;
    emptyposition();
}

function zeroclick() {
    choice = 0;
    emptyposition();
}

function plusclick() {
    choice = "+";
    emptyposition();
}

function minusclick() {
    choice = "-";
    emptyposition();
}

function calculatesum() {
    if (plus2 == true && plus4 == true)
        sumtotal = position1 + position3 + position5;
    else if (plus2 == true && plus4 == false)
        sumtotal = position1 + position3 - position5;
    else if (plus2 == false && plus4 == true)
        sumtotal = position1 - position3 + position5;
    else if (plus2 == false && plus4 == false) {
        sumtotal = position1 - position3 - position5;
    }
    end();
}

function end() {
    if (sumtotal == position7) {
        winsms();
        mathPuzzleSolved = true;
        verifyOverall();
    } else {
        wrongsms();
        reset();
    }
}

function emptyposition() {
    if (position1 == undefined) {
        assignposition1();
    } else if (position2 == undefined) assignposition2();
    else if (position3 == undefined) assignposition3();
    else if (position4 == undefined) assignposition4();
    else if (position5 == undefined) assignposition5();
    else if (position7 == undefined) assignposition7();
    else fullsms();
}

// //var q1 = document.forms["quiz"]["q1"].value;
// //document.forms[0].id;
// //let id = document.forms[0].id;
document.getElementById("sumone").addEventListener("click", oneclick, false);
document.getElementById("sumtwo").addEventListener("click", twoclick, false);
document
    .getElementById("sumthree")
    .addEventListener("click", threeclick, false);
document.getElementById("sumfour").addEventListener("click", fourclick, false);
document.getElementById("sumfive").addEventListener("click", fiveclick, false);
document.getElementById("sumsix").addEventListener("click", sixclick, false);
document
    .getElementById("sumseven")
    .addEventListener("click", sevenclick, false);
document
    .getElementById("sumeight")
    .addEventListener("click", eightclick, false);
document.getElementById("sumnine").addEventListener("click", nineclick, false);
document.getElementById("sumzero").addEventListener("click", zeroclick, false);
document.getElementById("sumplus").addEventListener("click", plusclick, false);
document
    .getElementById("summinus")
    .addEventListener("click", minusclick, false);

//flexbos game3

var flexQuiz = false;
var box = document.getElementById("box");
var flexboxPuzzleModal = document.getElementById("flexboxPuzzleModal");
box.addEventListener("click", function() {
    flexboxPuzzleModal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target == flexboxPuzzleModal) {
        flexboxPuzzleModal.style.display = "none";
    }
};

var close = document.getElementById("close-flexboxpuzzle");
close.addEventListener("click", function() {
    flexboxPuzzleModal.style.display = "none";
});

//define variable for game3 flexbox
// let modalContent = document.getElementsByClassName("modal-content");
let i = 0;
let displayFlex = document.getElementById("flexDisplay");
let changeFlexDir = document.getElementById("flexDirectn");
let fJustCont = document.getElementById("flexJustCont");
let fAlign = document.getElementById("flexAlignItems");
let cubes = document.getElementsByClassName("cubes");
let noti = document.getElementById("noti");
const containerClass = document.getElementsByClassName("flexPuzzle-container");
const flexDirectionsArray = ["row", "row-reverse", "column", "column-reverse"];
const flexJustyContentArray = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-evenly",
];

const flexAlignArray = [
    "stretch",
    "center",
    "flex-start",
    "fles-end",
    "baseline",
];

//button eventlistener

displayFlex.addEventListener("click", function() {
    if (containerClass[0].style.display == "block") {
        containerClass[0].style.display = "flex";
        displayFlex.innerHTML = "Flex";

        //add space on cubes when flex is on
        for (i = 0; i < 5; i++) {
            cubes[i].style.padding = "125px";
        }
    } else {
        containerClass[0].style.display = "block";
        displayFlex.innerHTML = "Flex Display ";

        //bring back original padding size on each cube
        for (i = 0; i < 5; i++) {
            cubes[i].style.padding = "15px";
        }
    }
    checkPuzzle();
});

let itemDirlength = flexDirectionsArray.length;
changeFlexDir.addEventListener("click", function() {
    // console.log(this.textContent);

    if (i <= itemDirlength) {
        this.textContent = flexDirectionsArray[i];
        containerClass[0].style.flexDirection = flexDirectionsArray[i];
        i++;
        if (
            document.querySelector(".flexPuzzle-container").style.flexDirection ===
            "column-reverse"
        ) {
            document.querySelector(".flexPuzzle-container").style.top = "1100px";
            document.querySelector(
                "#flexboxPuzzleModal .modal-content"
            ).style.height = "1500px";
        }
        if (
            document.querySelector(".flexPuzzle-container").style.flexDirection ===
            "column"
        ) {
            document.querySelector(
                "#flexboxPuzzleModal .modal-content"
            ).style.height = "1500px";
        }
    }
    if (i > itemDirlength) {
        document.querySelector(".flexPuzzle-container").style.top = "300px";
        document.querySelector("#flexboxPuzzleModal .modal-content").style.height =
            "745px";
        containerClass[0].style.flexDirection = "row";
        this.textContent = "Change Flex";
        i = 0;
    }
    checkPuzzle();
});

let justifyItems = flexJustyContentArray.length;
fJustCont.addEventListener("click", function() {
    if (i <= justifyItems) {
        this.textContent = flexJustyContentArray[i];
        // modalContent.classList.add("containerWidth");
        containerClass[0].style.justifyContent = flexJustyContentArray[i];
        i++;
    }
    if (i > justifyItems) {
        i = 0;
        this.textContent = "ChangeFlexDirection";
        containerClass[0].style.justifyContent = "flex-start";
    }
    checkPuzzle();
});

let alignItems = flexAlignArray.length;
let midItem = document.getElementsByClassName("cubes");
fAlign.addEventListener("click", function() {
    if (i <= alignItems) {
        this.textContent = flexAlignArray[i];
        containerClass[0].style.alignItems = flexAlignArray[i];
        i++;
    }

    if (i > alignItems) {
        i = 0;
        this.textContent = "Change Flex Direction";
        containerClass[0].style.alignItems = "flex-start";
        // midItem[2].classList.remove("itemHeight");
        midItem[2].style.alignItem = "center";
    }
    checkPuzzle();
});

function checkPuzzle() {
    if (displayFlex.innerHTML === "Flex") {
        document.querySelectorAll(".top")[0].style.background = "#7b1346";
        document.querySelectorAll(".bottom")[0].style.background = "#7b1346";
        document.querySelectorAll(".front")[0].style.background = "#7b1346";
        document.querySelectorAll(".back")[0].style.background = "#7b1346";
        document.querySelectorAll(".left")[0].style.background = "#7b1346";
        document.querySelectorAll(".right")[0].style.background = "#7b1346";
        checkDirection();
    } else {
        document.querySelectorAll(".top")[0].style.background = "#371b58";
        document.querySelectorAll(".bottom")[0].style.background = "#371b58";
        document.querySelectorAll(".front")[0].style.background = "#371b58";
        document.querySelectorAll(".back")[0].style.background = "#371b58";
        document.querySelectorAll(".left")[0].style.background = "#371b58";
        document.querySelectorAll(".right")[0].style.background = "#371b58";
    }
}

function checkDirection() {
    if (displayFlex.innerHTML === "Flex" && changeFlexDir.innerHTML === "row") {
        document.querySelectorAll(".top")[4].style.background = "#7b1346";
        document.querySelectorAll(".bottom")[4].style.background = "#7b1346";
        document.querySelectorAll(".front")[4].style.background = "#7b1346";
        document.querySelectorAll(".back")[4].style.background = "#7b1346";
        document.querySelectorAll(".left")[4].style.background = "#7b1346";
        document.querySelectorAll(".right")[4].style.background = "#7b1346";

        checkJustifyContent();
    } else {
        document.querySelectorAll(".top")[4].style.background = "#371b58";
        document.querySelectorAll(".bottom")[4].style.background = "#371b58";
        document.querySelectorAll(".front")[4].style.background = "#371b58";
        document.querySelectorAll(".back")[4].style.background = "#371b58";
        document.querySelectorAll(".left")[4].style.background = "#371b58";
        document.querySelectorAll(".right")[4].style.background = "#371b58";
    }
}

function checkJustifyContent() {
    if (
        displayFlex.innerHTML === "Flex" &&
        changeFlexDir.innerHTML === "row" &&
        fJustCont.innerHTML === "center"
    ) {
        document.querySelectorAll(".top")[1].style.background = "#7b1346";
        document.querySelectorAll(".bottom")[1].style.background = "#7b1346";
        document.querySelectorAll(".front")[1].style.background = "#7b1346";
        document.querySelectorAll(".back")[1].style.background = "#7b1346";
        document.querySelectorAll(".left")[1].style.background = "#7b1346";
        document.querySelectorAll(".right")[1].style.background = "#7b1346";
        document.querySelectorAll(".top")[3].style.background = "#7b1346";
        document.querySelectorAll(".bottom")[3].style.background = "#7b1346";
        document.querySelectorAll(".front")[3].style.background = "#7b1346";
        document.querySelectorAll(".back")[3].style.background = "#7b1346";
        document.querySelectorAll(".left")[3].style.background = "#7b1346";
        document.querySelectorAll(".right")[3].style.background = "#7b1346";
        checkAllButtons();
    } else {
        document.querySelectorAll(".top")[1].style.background = "#371b58";
        document.querySelectorAll(".bottom")[1].style.background = "#371b58";
        document.querySelectorAll(".front")[1].style.background = "#371b58";
        document.querySelectorAll(".back")[1].style.background = "#371b58";
        document.querySelectorAll(".left")[1].style.background = "#371b58";
        document.querySelectorAll(".right")[1].style.background = "#371b58";
        document.querySelectorAll(".top")[3].style.background = "#371b58";
        document.querySelectorAll(".bottom")[3].style.background = "#371b58";
        document.querySelectorAll(".front")[3].style.background = "#371b58";
        document.querySelectorAll(".back")[3].style.background = "#371b58";
        document.querySelectorAll(".left")[3].style.background = "#371b58";
        document.querySelectorAll(".right")[3].style.background = "#371b58";
    }
}

function checkAllButtons() {
    if (
        displayFlex.innerHTML === "Flex" &&
        changeFlexDir.innerHTML === "row" &&
        fJustCont.innerHTML === "center" &&
        fAlign.innerHTML === "center"
    ) {
        document.querySelectorAll(".top")[2].style.background = "#7b1346";
        document.querySelectorAll(".bottom")[2].style.background = "#7b1346";
        document.querySelectorAll(".front")[2].style.background = "#7b1346";
        document.querySelectorAll(".back")[2].style.background = "#7b1346";
        document.querySelectorAll(".left")[2].style.background = "#7b1346";
        document.querySelectorAll(".right")[2].style.background = "#7b1346";
        noti.innerHTML = "Well done! You've solved it!";
        noti.style.color = "#7b1346";
        flexQuiz = true;
        verifyOverall();
    } else {
        document.querySelectorAll(".top")[2].style.background = "#371b58";
        document.querySelectorAll(".bottom")[2].style.background = "#371b58";
        document.querySelectorAll(".front")[2].style.background = "#371b58";
        document.querySelectorAll(".back")[2].style.background = "#371b58";
        document.querySelectorAll(".left")[2].style.background = "#371b58";
        document.querySelectorAll(".right")[2].style.background = "#371b58";
    }
}

verifyOverall();

function verifyOverall() {
    if (memorygame == true && mathPuzzleSolved == true && flexQuiz == true) {
        setTimeout(() => {
            alert("You May Escaped Now!");
            document.getElementById("door").style.opacity = "0";
        }, 3000);
    }
}

// var haveEscaped;

// function escapeNow() {
//   haveEscaped = setTimeout(function() {
//     //  replace door with opened version
//     document.getElementById("door").style.opacity = "0";
//     document.getElementById("open-door").style.opacity = "1";
//     // window.alert("You may now escape!");
//     document.getElementById("escaped").style.visibility = "visible";
//   }, 750);
// }