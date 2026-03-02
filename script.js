window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles2();
    
    
    
});

let h2Elem = document.querySelectorAll("section h2") [0];
let ideIdElem = document.querySelectorAll("#ide") [0];
let ideClassElem = document.querySelectorAll(".ide") [0];
let divElem = document.querySelectorAll(".kattintasutan") [0];
let feladatElem = document.querySelectorAll(".feladat") [0];
const listaElem = document.querySelectorAll(".lista") [0];
let kepElem = "<img id='kep' src='kepek/grass.jpeg'>";
let kep = document.querySelector("#kep");

esemenykezeles1();
esemenykezeles3();



function elemekElerese1() {
    console.log(h2Elem.innerHTML);
}

function elemekElerese2() {
    ideIdElem.innerHTML= "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
    ideClassElem.innerHTML= "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
    let tartalom = "<ul>";
    for (let index = 0; index < 5; index++) {
    let szamok = Math.floor(Math.random()*21+10);
    tartalom += `<li>${szamok}</li>`;
    }
    tartalom += "</ul>";
    listaElem.innerHTML = tartalom;
}

function elemekFormazasa1() {
    listaElem.classList.add("formazott")
}

function esemenykezeles1() {
    listaElem.addEventListener("click", esemenykezeles1);
    divElem.innerHTML = listaElem.innerHTML;    
}

function esemenykezeles2() {
    feladatElem.innerHTML = "<button id='gomb'>Nyomj meg!</button>";
    let gombElem = document.querySelector("#gomb");
    gombElem.addEventListener("click", gomb);
}

function gomb() {
    feladatElem.innerHTML += kepElem;
}

function esemenykezeles3() {
    if (kep) {
        feladatElem.addEventListener("mouseover", egerKepen);
    }
    feladatElem.addEventListener("mouseout", egerNincsKepen);
}

function egerKepen() {
    kep.style.width = "50%";
}

function egerNincsKepen() {
    kep.style.width = "100%";
}