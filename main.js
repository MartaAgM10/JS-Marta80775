// Variables y Constantes aplicadas al usuaario que utiliza la app
//Utilización de método prompt
const edad = 63; /* constante*/
let apellido = prompt(`Por favor ingrese su apellido: `);
let nombre = "Marta"; /* variable*/
console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");

// valor de producto con misma variable , diferente valor
let precio = 250;
precio = 300;
console.log("Nuevo precio: $" + precio);

// Ejemplo de Ciclos Iterativos

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// FUNCIONES
//Funcion declarada
/*function sumar(producto1, producto2) {
  return producto1 + producto2;
}
console.log(sumar(250, 300));*/
//Funcion Flecha

let sumar = (producto1, producto2) => producto1 + producto2;
alert(sumar(250, 300));

// Arrays
//Recorrido a traves del ciclo for los elementos  teniendo en cuenta la longitud
//En este caso muestra todos
let nombres = ["Pablo", "Gastón", "Hernán", "Agustín", "Marta"];
for (let i = 0; i < nombres.length; i++) {
  console.log("Hola, " + nombres[i]);
}
// En este caso se muestra un elemento menos
let clientes = ["Pablo", "Hernán", "Agustín", "Marta"];
for (let i = 0; i < clientes.length; i++) {
  console.log("Hola, " + clientes[i]);
}
//SIMULACION DE COMPRA
// Integración mediante simulación para la venta de productos donde el cliente realiza solicitud y precio e ir almacenando
//Se muetra lista de compra y total a pagar por los mismos

let productos = []; // declaro el array productos

function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio }); // agrego los objetos nombre del producto y precio
}

function calcularTotal() {
  //calculo de total de productos
  let total = 0;
  for (let producto of productos) {
    total += producto.precio;
  }
  return total;
}
// funcion para listar los productos y el total
function listarCompra() {
  console.log("Estos son sus productos adquiridos:");
  for (let producto of productos) {
    console.log(`- ${producto.nombre}: $${producto.precio}`);
  }
  console.log(`Total a pagar: $${calcularTotal()}`); // Uso de literals
}

let seguir = true;
//Uso de ciclo while para que el usuario continúe ingresando productos hasta que su opción sea no
while (seguir) {
  let nombre = prompt("Ingrese el nombre del producto: ");
  let precio = parseFloat(prompt("Ingrese el precio de " + nombre + ": "));
  agregarProducto(nombre, precio);

  let opcion = prompt("¿Desea agregar otro producto? (si/no): ").toLowerCase();
  if (opcion !== "si") {
    seguir = false;
  }
}
listarCompra();
