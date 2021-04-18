let recipe = {
  "leche en polvo": "1 litro",
  "chocolete en barra": "3 barras",
  "azucar": "3 gramos"
}
// una opcion
let recipeKeys = Object.keys(recipe)

for(let i=0; i<recipeKeys.length;i++){
  let key = recipeKeys[i]
  console.log("Agregar " + (recipe [key]) + " de " + key)
}
// otra opcion
for (let key in recipe){
  if(recipe.hasOwnProperty(key)){
    console.log( "Agrega " + recipe[key] + " de " + key)
  }
}