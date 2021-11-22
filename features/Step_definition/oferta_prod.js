const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


function Oferta(producto) {
    if (producto === "dañado"){
      return "se muestra en la seccion de ofertas"
    }else{
      return "El producto no esta dañado"
    }
  }

Given('los encargados determinan que el precio del mismo producto ya no es el mismo debido al daño que recibió', function () {
    this.producto = "dañado"
});


When('el producto reciba su descuento', function () {
    this.respuesta = Oferta(this.producto)
});


Then('el producto {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal);
});