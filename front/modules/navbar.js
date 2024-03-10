const navBarFunction = () => {
    const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});
}

module.exports = {navBarFunction};