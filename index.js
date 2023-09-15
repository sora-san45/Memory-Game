const gridContainer = document.querySelector(".grid-container");
let img1 = "";
let count = 0;
let img2 = "";
const match = document.getElementById("match")
const noMatch = document.getElementById("no-match")
const btn = document.querySelector("button")

let itemList = ["images/chocolate.png", "images/chocolate.png", "images/cupcake.png", "images/cupcake.png",
    "images/donut.png", "images/donut.png", "images/french-fries.png", "images/french-fries.png",
    "images/grapes.png", "images/grapes.png", "images/onigiri.png", "images/onigiri.png",
    "images/peach.png", "images/peach.png", "images/strawberry.png", "images/strawberry.png"]
shuffle()

gridContainer.addEventListener("click", function (e) {
    let img = e.target.querySelector("img");
    img.style.visibility = "visible";
    ++count;

    if (count === 1) {
        img1 = img;
    } else if (count === 2) {
        img2 = img;
        if (img1.src !== img2.src) {
            noMatchOn()
            setTimeout(function () {
                img1.style.visibility = "hidden";
                img2.style.visibility = "hidden";
                count = 0;
                img1 = "";
                img2 = "";
            }, 900);
        }
        else {
            matchOn()
            count = 0;
            img1 = "";
            img2 = "";
        }
    }
});
function matchOn() {
    match.play()
}
function noMatchOn() {
    noMatch.play()
}
btn.addEventListener("click", function(){
    clear()
    shuffle()
})

function clear(){
    gridContainer.innerHTML=""
}
function shuffle() {
    itemList.sort(() => Math.random() - 0.5);
    for (let i = 0; i < itemList.length; i++) {
        gridContainer.innerHTML += `<div class="box">
    <img src=${itemList[i]}>
    </div>`
    }
}