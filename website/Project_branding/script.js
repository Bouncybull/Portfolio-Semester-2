let chapter1 = document.getElementById('POS1');
let chapter2 = document.getElementById('POS2');
let chapter3 = document.getElementById('POS3');
let chapter4 = document.getElementById('POS4');
let chapter5 = document.getElementById('POS5');

let Mario = document.getElementById('Mario');
let Sprite = document.getElementById('Sprite');

chapter1.addEventListener("click", Chapter1);

function Chapter1() {
    Mario.className = 'position1';
    Sprite.src = "./Mario_Right_Sprite.png";
}

chapter2.addEventListener("click", Chapter2);

function Chapter2() {
    Mario.className = "position2";
    Sprite.src = "./Mario_Up_Sprites.png";
}

chapter3.addEventListener("click", Chapter3);

function Chapter3() {
    Mario.className = "position3";
    Sprite.src = "./Mario_Right_Sprite.png";
}

chapter4.addEventListener("click", Chapter4);

function Chapter4() {
    Mario.className = "position4";
    Sprite.src = "./Mario_Right_Sprite.png";
}

chapter5.addEventListener("click", Chapter5);

function Chapter5() {
    Mario.className = "position5";
}


