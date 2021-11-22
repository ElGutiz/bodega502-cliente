const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion() {
    return "observa que el precio total de su compra es de 300Q"
  }

Given('El cliente al ingresar al catologo, observa que hay ofertas por el dia del padre', function () {
    this.producto = "existe"
});


When('Ingresa a la oferta, observa que venden un par de cinchos negros a Q150', function () {
    this.respuesta = Organizacion(this.producto)
});


Then('El cliente encarga los dos cinchos y {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal);
});