/*Ejercicio 36
Escribe una función llamada saludar que reciba un objeto que representa una persona y retorne la frase como se muestra a continuación:

// escribe tu función acá
*/
/*function saludar (persona){
  let keyArray = Object.keys (persona)
  if (keyArray.length === 2){
    return "Hola " + persona.nombre + ", tienes " + persona.edad + " años"
  } else if (keyArray.length === 1){
    return "Hola " + persona.nombre 
  } else {
    return "no datos"
  }  
}
*/
//otra opcion mejor
function  saludar(persona){
    let msm = "Hola "+persona.nombre
    if(persona.edad){
      msm +=", tienes "+persona.edad+" años"
    }
    return msm    
}
// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"
/*
El objeto siempre tendrá la llave nombre. La llave edad es opcional y cuando no está presente deberás omitir la parte ", tienes x años".
*/
