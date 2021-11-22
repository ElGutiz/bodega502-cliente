const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Control_Usuarios(borrar_usuario) {
  if (borrar_usuario === true){
    return "El usuario ha sido borrado"
  }else{
    return "El usuario no ha sido borrado"
  }
}

Given('La administradora (gerente) ve que la parte de ofertas no se esta llevando bien a cabo', function () {
  this.producto = ""
});

When('La administradora le revoca los permisos al trabajador', function () {
  this.respuesta = Control_Usuarios(this.borrar_usuario)
});

Then('{string}', function (respuestaFinal) {
  assert.strictEqual(this.respuesta, respuestaFinal);
});