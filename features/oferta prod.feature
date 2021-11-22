
Feature: Ofertas en productos


Scenario: Uno de los prodcutos de la página fue dañado en la bodega por algún accidente.
	Given los encargados determinan que el precio del mismo producto ya no es el mismo debido al daño que recibió
	When el producto reciba su descuento
	Then el producto "se muestra en la seccion de ofertas"