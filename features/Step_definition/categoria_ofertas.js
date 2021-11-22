const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion(producto) {
    if(producto === "descuento"){
        return "cambiado"
    }
    
  }

Given('El encargado de redes va a ser un calculo de cual seria el porcentaje de descuento adecuado', function () {
    this.producto = "descuento"
});



When('El encargado de redes colocara el producto con el porcentaje de descuento en la seccion de ofertas.', function () {
    this.respuesta = Organizacion(this.producto)
});


Then('El precio sera {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal)
});