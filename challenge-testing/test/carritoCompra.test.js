const CarritoCompra = require('../index.js');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it('Agregar producto al carrito', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'leche', precio: 30})
    carrito.agregarProducto({ nombre: 'cereal', precio: 20})
    carrito.agregarProducto({ nombre: 'pan', precio: 10})
    carrito.agregarProducto({ nombre: 'platano', precio: 5})
    expect(carrito.productos.length).toBe(5)
  });

  it('Calcular total de la compra', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    carrito.agregarProducto({ nombre: 'leche', precio: 30})
    carrito.agregarProducto({ nombre: 'cereal', precio: 20})
    carrito.agregarProducto({ nombre: 'pan', precio: 10})
    carrito.agregarProducto({ nombre: 'platano', precio: 5})
    expect(carrito.calcularTotal()).toBe(95);
  });

  it('Aplicar descuento al total de la compra', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(27);
  });
});