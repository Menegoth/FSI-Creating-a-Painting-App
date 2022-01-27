let selectedColor = "blue";
const painting = document.querySelector(".painting");
const pixelArray = document.querySelectorAll(".pixel");

//painting things
painting.addEventListener("click", function(e){
    e.target.style.backgroundColor = selectedColor;
});

//double click to clear
painting.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor = "white";
})

//palette
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const purple = document.querySelector("#purple");

//selecting colors
blue.addEventListener("click", function(){
    selectedColor = "blue";
})

red.addEventListener("click", function(){
    selectedColor = "red";
})

yellow.addEventListener("click", function(){
    selectedColor = "yellow";
})

green.addEventListener("click", function(){
    selectedColor = "green";
})

purple.addEventListener("click", function(){
    selectedColor = "purple";
})

//clear button
const clear = document.querySelector(".button");
clear.addEventListener("click", function(){
    for (let i = 0; i < pixelArray.length; i++) {
        pixelArray[i].style.backgroundColor = "white";
    }
})