Feature: Página de contacto con la bodega


Scenario:  Un usuario tiene una duda sobre como funciona la bodega para poner un pedido.
	Given el usuario buscará un número de teléfono o un correo en la página.
	When  el usuario utiliza uno de los medios para comunicarse con la bodega
	Then el usuario recibirá una confirmacion de su duda que dice "mensaje recibido"
