/*
let persona = {
  nombre: "Germán",
  apellido: "Escobar",
  edad: 35,
  estatura: 1.8
  }
*/
//console.log(persona.nombre); // imprime Germán
//console.log(persona.apellido); // imprime Escobar
//console.log(persona.edad); // imprime 35
//console.log(persona.estatura); // imprime 1.8
/*
let llave = "peso";
console.log(persona[llave])
*/
/*
persona.peso=70
persona.peso=65
delete persona.peso

console.log(persona.peso)
*/
/*
for (var llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log(persona[llave])
  }
}
*/
/*var llaves = Object.keys(persona);
for (var i=0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(persona[llave]);
}
*/
/*
var person = {
  name: "Pedro",
  sayHi: function() {
    console.log("Hola!");
  }
}
*/
let person = {
  name: "Pedro",
  sayHi: function() {
    console.log("Hola, me llamo " + this.name);
  }
}

person.sayHi()