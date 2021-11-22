Feature: Edición de productos de la página


Scenario: Al ingresar un nuevo producto se ingresa la cantidad equivocada del mismo.
	Given el encargado de redes sociales ingresará a la página para realizar el cambio.
	When encuentre el producto con el error.
	Then Ingresa al producto y "realiza los cambios"