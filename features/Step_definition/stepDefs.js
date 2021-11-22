const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion(producto) {
  if (producto === "existe"){
    return "Existencia concuerda"
  }else{
    return "El producto no existe en la página"
  }
}

Given('El encargado de ventas se dirige al catologo de la página', function () {
  this.producto = "existe"
});


When('Dentro del catalogo, ingresa al producto para ver su exitencia', function () {
  this.respuesta = Organizacion(this.producto)
});

Then('Al comparar la exitencia del producto, se concluye que {string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});