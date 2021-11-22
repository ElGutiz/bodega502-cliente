const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Ofrecer_Prod(existe) {
  if (existe === true){
    return "Hay existencias"

  }else{
    return "Ya no hay existencias"
  }
}

Given('Un cliente encuentra un producto con unica existencia en la pagína web.', function () {
  this.producto = ""
});

When('El cliente se comunica con la encargada de ventas para confirmar la existencia', function () {
  this.respuesta = Ofrecer_Prod(this.existe)
});

Then('La encargada de ventas revisa en la bodega si es veridica la información,{string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});