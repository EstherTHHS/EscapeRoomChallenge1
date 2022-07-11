var start_button = document.getElementById("start");
var mainRoom = document.getElementById("mainRoom");
start_button.addEventListener("click", function() {
    start_button.style.display = "none";
    mainRoom.style.display = "block";
});

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