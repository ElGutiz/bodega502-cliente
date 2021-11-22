const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Contacto(medio) {
  if (medio === "Numero"){
    return "Respuesta de bodega"
  }else if(medio === "Correo"){
    return "Respuesta de bodega"


  }else{
    return "No es posible un contacto"
  }
}

Given('el usuario buscará un número de teléfono o un correo en la página', function () {
  this.medio = ""
});

When('el usuario utiliza uno de los medios para comunicarse con la bodega', function () {
  this.respuesta = Contacto(this.medio)
});

Then('el usuario recibirá {string} por medio de alguno de los medios de comunicación de la bodega ', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});