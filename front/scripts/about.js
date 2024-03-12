const { circle } = require("../modules/mouse");
const { navBarFunction } = require("../modules/navbar");
navBarFunction();

//about

let btnBlur = document.getElementById("blur-btn");
let text = document.querySelector(".blur");

btnBlur.addEventListener("click", () => {
  text.classList.toggle("active");
});

let btnBlur2 = document.getElementById("blur-btn2");
let text2 = document.querySelector(".blur2");

btnBlur2.addEventListener("click", () => {
  text2.classList.toggle("active");
});

let btnBlur3 = document.getElementById("blur-btn3");
let text3 = document.querySelector(".blur3");

btnBlur3.addEventListener("click", () => {
  text3.classList.toggle("active");
});

let btnBlur4 = document.getElementById("blur-btn4");
let text4 = document.querySelector(".blur4");

btnBlur4.addEventListener("click", () => {
  text4.classList.toggle("active");
});

let btnBlur5 = document.getElementById("blur-btn5");
let text5 = document.querySelector(".blur5");

btnBlur5.addEventListener("click", () => {
  text5.classList.toggle("active");
});

//codigo para que se quede de un color el boton despues del click.
btnBlur.addEventListener("click", () => {
  btnBlur.classList.toggle("activo");
});
btnBlur2.addEventListener("click", () => {
  btnBlur2.classList.toggle("activo");
});
btnBlur3.addEventListener("click", () => {
  btnBlur3.classList.toggle("activo");
});
btnBlur4.addEventListener("click", () => {
  btnBlur4.classList.toggle("activo");
});
btnBlur5.addEventListener("click", () => {
  btnBlur5.classList.toggle("activo");
});
