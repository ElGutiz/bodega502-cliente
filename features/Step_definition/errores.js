const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion() {
    return "realiza los cambios"
  }


Given('el encargado de redes sociales ingresará a la página para realizar el cambio.', function () {
    this.producto = "existe"
});

When('encuentre el producto con el error.', function () {
    this.respuesta = Organizacion(this.producto)
});



Then('Ingresa al producto y {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal);
});