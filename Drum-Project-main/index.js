// var noOfDrum = document.querySelectorAll(".drum").length;
// for (var i = 0; i < noOfDrum; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//         var press = this.innerHTML;
//         makeSound(press);
//         animation(press);

//     });

// }
// document.addEventListener("keypress", function(event) {
//     makeSound(event.key);
//     animation(event.key);
// });

// function makeSound(key) {

//     switch (key) {
//         case "w":
//             var audio1 = new Audio('sounds/crash.mp3');
//             audio1.play();
//             break;
//         case "a":
//             var audio2 = new Audio('sounds/kick-bass.mp3');
//             audio2.play();
//             break;
//         case "s":
//             var audio3 = new Audio('sounds/snare.mp3');
//             audio3.play();
//             break;
//         case "d":
//             var audio4 = new Audio('sounds/tom-1.mp3');
//             audio4.play();
//             break;
//         case "j":
//             var audio5 = new Audio('sounds/tom-2.mp3');
//             audio5.play();
//             break;
//         case "k":
//             var audio6 = new Audio('sounds/tom-3.mp3');
//             audio6.play();
//             break;
//         case "l":
//             var audio7 = new Audio('sounds/tom-4.mp3');
//             audio7.play();
//             break;
//         default:

//     }

// }

// function animation(currentKey) {
//     var activeButton = document.querySelector("." + currentKey);
//     activeButton.classList.add("pressed");

//     setTimeout(function() {
//         activeButton.classList.remove("pressed");
//     }, 100);
// }

for (var noOfDrum = document.querySelectorAll(".drum").length, i = 0; i < noOfDrum; i++) document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var e = this.innerHTML;
    makeSound(e), animation(e)
});

function makeSound(e) {
    switch (e) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play()
    }
}

function animation(e) {
    var n = document.querySelector("." + e);
    n.classList.add("pressed"), setTimeout(function() { n.classList.remove("pressed") }, 100)
}
document.addEventListener("keypress", function(e) { makeSound(e.key), animation(e.key) });