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
        // return true;
    }
}

//flexbos game3
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

//define variable for game3 flexbox

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
            ).style.height = "1300px";
        }
        if (
            document.querySelector(".flexPuzzle-container").style.flexDirection ===
            "column"
        ) {
            document.querySelector(
                "#flexboxPuzzleModal .modal-content"
            ).style.height = "1300px";
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
        midItem[2].classList.remove("itemHeight");
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
    } else {
        document.querySelectorAll(".top")[2].style.background = "#371b58";
        document.querySelectorAll(".bottom")[2].style.background = "#371b58";
        document.querySelectorAll(".front")[2].style.background = "#371b58";
        document.querySelectorAll(".back")[2].style.background = "#371b58";
        document.querySelectorAll(".left")[2].style.background = "#371b58";
        document.querySelectorAll(".right")[2].style.background = "#371b58";
    }
}