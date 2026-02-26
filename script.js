window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    elemekFormazasa2();

});

function elemekElerese1() {
   const h2Elem = document.querySelectorAll("section h2") [0];
   console.log(h2Elem.innerHTML);
}
function elemekElerese2() {
   const ideElem = document.querySelectorAll("#ide") [0];
   ideElem.innerHTML= "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
   const ideElem = document.querySelectorAll(".ide") [0];
   ideElem.innerHTML= "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
   const listaElem = document.querySelectorAll(".lista") [0];
   let tartalom = "<ul>";
   for (let index = 0; index < 5; index++) {
    let szamok = Math.floor(Math.random()*21+10);
    tartalom += `<li>${szamok}</li>`;
   }
   tartalom += "</ul>";
   listaElem.innerHTML=tartalom;
}
function elemekFormazasa1() {
    const listaElem = document.querySelectorAll(".lista") [0];
    listaElem.classList.add("formazott")
}
function elemekFormazasa2() {
    const listaElem = document.querySelectorAll(".lista") [0];
    let divElem = document.getElementById(".kattintasutan")
    divElem.addEventListener("click", fv);
    function fv() {
        divElem.innerHTML = listaElem.innerHTML; 
    }
    
    console.log(divElem)
    
}