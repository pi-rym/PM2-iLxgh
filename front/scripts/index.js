console.log(tempData);

//navbar
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});


//mouse

const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circleSize = 925; // Tamaño del círculo

    circle.style.left = `${x - circleSize / 2}px`;
    circle.style.top = `${y - circleSize / 2}px`;
});









// .contenedor-pointing a {
//     color: #97a1ffb6;
//     font-size: 30px;
//     transition: .5s;
// }

// .contenedor-pointing a::before {
//     content: '';
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background: #100cf1;
//     transition: .5s;
//     transform: scale(.9);
//     z-index: -1;
// }

// .contenedor-pointing a:hover::before {
//     transform: scale(1.1);
//     box-shadow: 0 0 15px #0400fd;
// }

// .contenedor-pointing a:hover {
//     color: #0400ff;
// }