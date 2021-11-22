const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion(mensaje) {
    if(mensaje === "enviado"){
        return "mensaje recibido"
    }
    
  }

Given('el usuario buscará un número de teléfono o un correo en la página.', function () {
    this.mensaje = "enviado"
});


When('el usuario utiliza uno de los medios para comunicarse con la bodega', function () {
    this.respuesta = Organizacion(this.mensaje)
});


Then('el usuario recibirá una confirmacion de su duda que dice {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal);
});
