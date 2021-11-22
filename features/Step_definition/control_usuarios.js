const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function Organizacion(usuario) {
    if(usuario === "inactivo"){
        return "ususario eliminado"
    }
    
  }

Given('La administradora ve que la parte de ofertas no se esta llevando bien a cabo', function () {
    this.usuario = "inactivo"
});


When('La administradora le revoca los permisos al trabajador', function () {
    this.respuesta = Organizacion(this.usuario)
});



Then('El trabajador sera borrado de la base de datos y recibira un mensaje que dice {string}', function (respuestaFinal) {
    assert.strictEqual(this.respuesta, respuestaFinal);
});