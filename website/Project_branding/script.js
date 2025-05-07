let chapter1 = document.getElementById('POS1');
let chapter2 = document.getElementById('POS2');
let chapter3 = document.getElementById('POS3');
let chapter4 = document.getElementById('POS4');
let chapter5 = document.getElementById('POS5');

let chapternum = 0;

let Mario = document.getElementById('Mario');
let Sprite = document.getElementById('Sprite');

Mario.addEventListener("animationend", () => OpenChapter(chapternum));

function OpenChapter(chapter) {
    Sprite.src = "./Mario_Down_Sprites.png";
    console.log("boop");
    switch(chapter) {
        case 1:
            let div1 = document.getElementById("Chapter1");
            div1.style.visibility = "visible";
            break;
        case 2:
            let div2 = document.getElementById("Chapter2");
            div2.style.visibility = "visible";
            break;
        case 3:
            let div3 = document.getElementById("Chapter3");
            div3.style.visibility = "visible";
            break;
        case 4:
            let div4 = document.getElementById("Chapter4");
            div4.style.visibility = "visible";
            break;
        case 5:
            let div5 = document.getElementById("Chapter5");
            div5.style.visibility = "visible";
            break;
    }
    
}

chapter1.addEventListener("click", Chapter1);

function Chapter1() {
    Mario.className = 'position1';
    Sprite.src = "./Mario_Right_Sprite.png";
    chapternum = 1;
}

chapter2.addEventListener("click", Chapter2);

function Chapter2() {
    Mario.className = "position2";
    Sprite.src = "./Mario_Up_Sprites.png";
    chapternum = 2;
}

chapter3.addEventListener("click", Chapter3);

function Chapter3() {
    Mario.className = "position3";
    Sprite.src = "./Mario_Right_Sprite.png";
    chapternum = 3
}

chapter4.addEventListener("click", Chapter4);

function Chapter4() {
    Mario.className = "position4";
    Sprite.src = "./Mario_Right_Sprite.png";
    chapternum = 4;
}

chapter5.addEventListener("click", Chapter5);

function Chapter5() {
    Mario.className = "position5";
    chapternum = 5
}


