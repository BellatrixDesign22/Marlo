//FORMULARIO DE CONTACTO

class Persona {
  constructor(nombre, apellido, email, direccion, ciudad, pais, consulta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
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
  let direccion = prompt("Cual es tu direccion");
  let ciudad = prompt("Cual es tu ciudad");
  let pais = prompt("Cual es tu pais");
  let consulta = prompt("Cual es tu consulta");

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
    localStorage.setItem("personas", JSON.stringify(listaPersonas));
  } else {
    const listaPersonaNueva = JSON.parse(localStorage.getItem("personas"));
    listaPersonaNueva.push(persona);
    localStorage.setItem("personas", JSON.stringify(listaPersonaNueva));
  }
};
