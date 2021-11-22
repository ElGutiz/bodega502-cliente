const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Category(sale, producto ) {
  if (producto === "Silla"){
    return "Ha cambiado el precio"+ sale
  }else if(producto === "Sofa"){
    return "Ha cambiado el precio"+ sale

  }else if(producto === "Comedor"){
    return "Ha cambiado el precio"+ sale

  }else{
    return "No se ha cambiado ningun producto"
  }
}

Given('El encargado de redes va a ser un calculo de cual seria el porcentaje de descuento adecuado', function () {
  this.producto = ""
  this.sale= ""
});

When('El encargado de redes colocara el producto con el porcentaje de descuento en la seccion de ofertas', function () {
  this.respuesta = Category(this.sale, this.producto)
});

Then('Este llamara la atencion de los clientes, se concluye que {string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});