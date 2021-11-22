Feature: Organización y administración de los productos de la BODEGA502
 
  Scenario: El encargado de ventas necesita tener un inventario rapido de la bodega 502
	Given El encargado de ventas se dirige al catologo de la página
	When Dentro del catalogo, ingresa al producto para ver su exitencia
	Then Al comparar la exitencia del producto, se concluye que "Existencia concuerda"
