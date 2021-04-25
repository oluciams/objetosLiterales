/*
e39 Escribe una función llamada frecuencias que reciba 
un string y retorne un objeto con el número de veces que 
aparece cada carácter (exceptuando el espacio en blanco):

// escribe tu función acá
*/
function frecuencias (string){
    const result ={}

    const chars= string.split("")
    for (let i=0; i<chars.length; i++){
        const char= chars[i]
        if (char !== " "){
            if (result[char]){      // si existe la llave
                result[char] += 1 // incrementa 1 si la llave existe
            } else {
                result[char] = 1  // crea una llave y le asigno como valor 1 ej h:1
            }
        }        
    }
    return result
}

console.log (frecuencias("lala"))
//código de prueba
console.log(frecuencias("hola mundo"));
//{ h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
