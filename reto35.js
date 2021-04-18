/*Objetos literales
Ejercicio 35
Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:

nombre - "Pedro Perez"
edad - 30
activo - true
hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano".
Ahora haz lo siguiente:

Imprime en consola el valor de la llave edad.
Agrega una propiedad con llave estatura y valor 1.8.
Elimina la propiedad con llave activo.
Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
El resultado en consola debería ser parecido al siguiente (puede que las propiedades no salgan en el mismo orden):

30
nombre: "Pedro Perez"
edad: 30
hobbies: ["programar", "squash", "piano"]
estatura: 1.8
*/

let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  }
  
  console.log (pedro["edad"])
  
  pedro.estatura = 1.8
  
  delete pedro.activo
  //console.log (pedro["estatura"])
  
  //recorriendo el objeto
  for (let llave in pedro){
    if(pedro.hasOwnProperty(llave)){
      console.log(llave + ":" + pedro[llave])
    }
  }
  
  