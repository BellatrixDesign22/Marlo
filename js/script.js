// CARRITO DE COMPRAS

// Carrito
class Productos {
  constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}

let catalogo = [
  { nombre: "Tapiz Marlo", categoria: "Tapices", precio: 12000 },
  { nombre: "Tapiz Hedera", categoria: "Tapices", precio: 10000 },
  { nombre: "Tapiz Raices", categoria: "Tapices", precio: 7000 },
  { nombre: "Tapiz Gaia", categoria: "Tapices", precio: 10000 },
  { nombre: "Cesto Cedro", categoria: "Cestos", precio: 2500 },
];

const agregarProd = () => {
  let nombre = prompt("Nombre del producto");
  let categoria = prompt("Categoria del producto");
  let precio = parseFloat(prompt("Determine el precio"));
  let prod = new Productos(nombre, categoria, precio);
  catalogo.push(prod);
};

catalogo.push(new Productos("Posavasos Rectangular", "Posavasos", 500));

catalogo.forEach((objeto) => {
  console.log(
    `el producto es ${objeto.nombre}, de la categoría ${objeto.categoria} y su precio es $${objeto.precio}`
  );
});

 let search = document.getElementById("nombreProducto").value;
let buscar = catalogo.find((obj) => {
  return obj.nombre == search;
});

console.log(buscar); */

let search = document.getElementById("nombreProducto").value;
let buscar = catalogo.find((obj) => {
  return obj.nombre == search;
});

console.log(buscar);

let buscarPrecio = catalogo.filter((obj) => obj.precio < 8000);
console.log(buscarPrecio);

console.log(catalogo.some((obj) => obj.nombre == "Cesto Cedro"));

let listaNueva = catalogo.map((obj) => {
  return { nombre: obj.nombre, precio: obj.precio * 1.21 };
});
console.log(listaNueva);

let totalCarrito = listaNueva.reduce(
  (acumulador, el) => acumulador + el.precio,
  0
);
console.log(totalCarrito);

catalogo.forEach((el) => {
  let nodo = document.createElement("div");
  nodo.innerHTML = `
      <h3>${el.nombre}</h3>
      <p>${el.categoria}</p>
      <p>Precio $${el.precio}</p>
      `;
  document.getElementById("prods").appendChild(nodo);
});

// AL SELECCIONAR EL BOTON BUSCAR, SE VISUALIZA EL TEXTO ESCRITO EN EL INPUT.
btn.onclick = () => {
  console.log(nombreProducto.value);
};

let carrito = [];
const pieza = document.getElementById(".cestoCedro");
console.log(pieza);


const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

guardarLocal("lista", JSON.stringify(catalogo));



//FORMULARIO DE CONTACTO

class Persona {
  constructor(nombre, apellido, email, direccion, ciudad, pais, consulta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.ciudad = ciudad;
    this.pais = pais;
    this.consulta = consulta;
  }
}

const listaPersonas = [];

const nuevaPersona = () => {
  let nombre = prompt("Cual es tu nombre");
  let apellido = prompt("Cual es tu apellido");
  let email = prompt("Cual es tu email");
  let ciudad = prompt("Cual es tu ciudad");
  let pais = prompt("Cual es tu nompaisbre");
  let observaciones = prompt("Cual es tu consulta");

  let persona = new Persona(
    nombre,
    apellido,
    email,
    direccion,
    ciudad,
    pais,
    consulta
  );

  if (localStorage.getItem("personas") == null) {
    listaPersonas.push(persona);
    localStorage.setItem("personas0".JSON.stringify(listaPersonas));
  } else {
    const listaPersonaNueva = JSON.parse(localStorage.getItem("personas"));
    listaPersonaNueva.push(persona);
    localStorage.setItem("personas", JSON.stringify(listaPersonaNueva));
  }
};