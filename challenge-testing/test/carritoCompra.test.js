const CarritoCompra = require("../index.js");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Agregar producto al carrito", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
    expect(carrito.productos.length).toBe(1);
  });

  test("Calcular total de la compra", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
    expect(carrito.calcularTotal()).toBe(30);
  });

  test("Aplicar descuento al total de la compra", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(27);
  });
});
