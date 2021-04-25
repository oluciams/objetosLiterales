/*
E 38. Escribe una función llamada descifrar que reciba 
un string y un objeto. Utiliza las propiedades del objeto 
para reemplazar los caracteres de la cadena y retorna el resultado:

escribe tu función acá

function descifrar (string, obj) {
    const arr = string.split("")
    let chars = ""
    for (let i=0; i<arr.length; i++){        
        const char = arr[i]    
        if(obj[char]){      // si esa llave existe
            chars += obj[char]    // se le suma el valor de la llave al string que se esta construyendo   
        }else {
            chars += char
        }     
    } 
    return chars
}
// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"

*/
function descifrar (string, obj) {
    let chars = ""
    for (let char of string) {
        if(obj[char]){      // si esa llave existe
            chars += obj[char]    // se le suma el valor de la llave al string que se esta construyendo   
        }else {
            chars += char
        } 
    }
    return chars  
}
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"
