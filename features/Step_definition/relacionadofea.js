const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Relacionado(producto) {
  if (producto === "Mesa"){
    return "Se le podria complementar con una silla"
  }else if(medio === "Lampara"){
    return "Se le podria complementar con una mesa de noche"


  }else{
    return "No se puede complementar con nada"
  }
}

Given('El usuario ingresa a la página de la mesa', function () {
  this.producto = ""
});

When('Quiera complementarla con otro producto', function () {
  this.respuesta = Relacionado(this.producto)
});

Then('Se le mostrará un repertorio de productos complementarios o similares como por ejemplo, {string} ', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});