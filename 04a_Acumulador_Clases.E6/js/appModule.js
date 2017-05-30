// código del controlador en AngularJS

class AppController {

$onInit () {
	this.incremento = 10;
	this.total = this.incremento;
	this.ajustarColor()
}

sumar (){;
	this.total += parseInt(this.incremento);
	this.ajustarColor()

	}

restar (){
	this.total -= parseInt(this.incremento);
	this.ajustarColor()
	}	

ajustarColor () {
	this.oClaseTotal = { positivo : (this.total >= 0),
					   negativo : (this.total < 0)}
}	

} // Fin de la clase AppController



angular.module("appModule", [])
.controller('AppController', AppController)

