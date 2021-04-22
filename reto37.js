/*
E37
Escribe una función buscarProducto que reciba un arreglo
de objetos y un número. La función deberá buscar el número 
dentro de cada objeto (en la llave id) y retornar el objeto encontrado.
Si no encuentra un objeto con ese id deberá retornar null.
*/
let productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ]
  
function buscarProducto (array, number) {
   
    for (let i=0; i<array.length; i++){
         if (array[i].id === number){
            return array[i]
         }        
    }
    return null    
}

console.log(buscarProducto(productos, 5)); // { id: 1, nombre: "A" }
console.log(buscarProducto(productos, 566)); // null

