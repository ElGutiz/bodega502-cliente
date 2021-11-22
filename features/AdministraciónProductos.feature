Feature: Organización y administración de los productos de la BODEGA502

Scenario Dos clientes ingresan a la pagina y buscan un juego de sofas
	Given El catalogo les muestra el mismo juego de sofas con existencia de 2
	When Los clientes quieren encargar el inmueble
	Then Uno de ellos se queda sin poder encargarlo recibiendo un mensaje de "error"