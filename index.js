let productoSeleccionado = parseInt(
  prompt(
    "Escoge el producto que deseas comprar: 1.Laptop - 2.Monitor - 3.Maiboard - 4.Memoria"
  )
);
let seguirComprando = true;
let totalCompra = 0;
let decision;

// arreglo de productos
const productosArray = [];

// clase producto
class NewProduct {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
const laptop = new NewProduct(1, "laptop", 800, 10);
productosArray.push(laptop);
const monitor = new NewProduct(2, "monitor", 400, 20);
productosArray.push(monitor);
const maiboard = new NewProduct(3, "maiboard", 300, 30);
productosArray.push(maiboard);
const memoria = new NewProduct(4, "memoria", 100, 25);
productosArray.push(memoria);

const carrito = [];

while (seguirComprando === true) {
  const producto = productosArray.find(
    (prod) => prod.id === productoSeleccionado
  );
  if (producto) {
    carrito.push(producto);
  }

  decision = parseInt(prompt("Quieres seguir comprando? 1.Si - 2.No"));
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        "Escoge el producto que deseas comprar: 1.Laptop - 2.Monitor - 3.Maiboard - 4.Memoria"
      )
    );
  } else {
    seguirComprando = false;
  }
}

carrito.forEach((producto) => {
  totalCompra = totalCompra + producto.price;
});

const totalCompraConDescuento = descuento(totalCompra);
alert(`El total de tu compra con dscto es ${totalCompraConDescuento}`);

//1.Laptop(800) - 2.Monitor(350) - 3.Maiboard(200) - 4.Memoria(50)'

function descuento(valor) {
  let descuento = 0;
  if (valor <= 1000) {
    descuento = 0.1;
  } else if (valor > 1000 && valor <= 2000) {
    descuento = 0.15;
  } else {
    descuento = 0.2;
  }

  let valorDescuento = valor * descuento;
  let valorFinal = valor - valorDescuento;
  return valorFinal;
}
