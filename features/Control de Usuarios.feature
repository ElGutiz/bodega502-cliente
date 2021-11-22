Feature: Control de usuarios

Scenario: Un trabajador no cumple sus responsabilidades como encargado de mostrar ofertas.
	Given La administradora ve que la parte de ofertas no se esta llevando bien a cabo
	When La administradora le revoca los permisos al trabajador
	Then El trabajador sera borrado de la base de datos y recibira un mensaje que dice "ususario eliminado"

