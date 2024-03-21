const navBarFunction = () => {
    const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});
}

module.exports = {navBarFunction};


// const navBarFunction = () => {
//     // Función para manejar el evento DOMContentLoaded
//     const handleDOMContentLoaded = () => {
//       const menuBtn = document.getElementById("menu-btn");
//       const menu = document.querySelector(".menu");
  
//       // Verificar si los elementos existen
//       if (menuBtn && menu) {
//         // Agregar el event listener al botón del menú
//         menuBtn.addEventListener("click", () => {
//           menu.classList.toggle("active");
//         });
//       } else {
//         console.error("No se pudo encontrar el botón de menú o el menú.");
//       }
//     };
  
//     // Verificar si el DOM ya está completamente cargado
//     if (document.readyState === "loading") {
//       // Si el DOM aún no está cargado, esperar al evento DOMContentLoaded
//       window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
//     } else {
//       // Si el DOM ya está completamente cargado, ejecutar la función directamente
//       handleDOMContentLoaded();
//     }
//   };