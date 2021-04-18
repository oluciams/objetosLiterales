let recipe = {
    "leche en polvo": "1 litro",
    "chocolete en barra": "3 barras",
    azucar: "3 gramos",
        }
  
  recipe.mixIngredients = function(){
    return "Mezclando los ingredientes ..."
  }
  
  console.log(recipe.mixIngredients())

