const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Disponible(producto) {
    if (producto === "Silla"){
        return "No disponible"
      }else if(producto === "Sofa"){
        return "No disponible"
    
      }else if(producto === "Comedor"){
        return "No disponible"
    
      }else{
        return "El producto se encuentra"
      }
}

Given('El usuario nota que su producto no se encuentra', function () {
  this.producto = ""

});

When('Lo trate de buscar', function () {
  this.respuesta = Disponible(this.producto)
});

Then('Abrá una pestaña con productos no disponibles que estarán marcados como {string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});