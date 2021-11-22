const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function CategoryPord(categoria, producto) {
  if (producto === "Mesa rota"){
      if(categoria=== "no existe"){
        return "Crea categoria de muebles rotos"
      }
    
  }
  
  else if (producto === "Silla"){
    if(categoria=== "no existe"){
      return "Crea categoria de asientos"
    }
  
  }else if(producto === "Comedor"){
    if(categoria=== "no existe"){
        return "Crea categoria de cocina"
      }
  }else{
    return "La categoria ya existe"
  }
}

Given('el encargado de ventas buscara una categoria para este productos', function () {
  this.producto = ""
  this.categoria=""
});

When('el encargado de ventas se dara cuenta que no existe una categoria para muebles dañados', function () {
  this.respuesta = CategoryPord(this.categoria, this.producto)
});

Then('este creara una nueva categoria para almacenar estos, se concluye que {string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});