const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Mostrar_Ventas(producto, monto_total, venta_realizada) {
  if (venta_realizada === true){
    return producto + "a un total de " + monto_total

  }else{
    return "No se realizo una venta"
  }
}

Given('El cliente al ingresar al catologo, observa que hay ofertas por el dia del padre', function () {
  this.producto = ""
});

When('Ingresa a la oferta, observa que venden un par de cinchos negros a Q150', function () {
  this.respuesta = Mostrar_Ventas(this.producto,this.monto_total,this.venta_realizada)
});

Then('El cliente encarga ,{string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});