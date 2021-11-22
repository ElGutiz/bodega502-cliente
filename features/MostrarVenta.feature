Feature: Mostrar ventas


Scenario: Un cliente dispone de Q200 para comprar un producto para el dia del padre
	Given El cliente al ingresar al catologo, observa que hay ofertas por el dia del padre
	When Ingresa a la oferta, observa que venden un par de cinchos negros a Q150
	Then El cliente encarga los dos cinchos y "observa que el precio total de su compra es de 300Q"
	