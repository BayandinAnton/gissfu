window.onload = init();

function init(){
	
	function Car(){
		this.speed = 5;

	}

	Car.prototype.honk = function() {
	    console.log('би-би');
	}

	var myCar1 = new Car();
	var myCar2 = new Car();

	myCar1.honk(); // вызовет метод Car.prototype.honk() и выведет «би би»
	myCar2.honk();
	console.log(myCar2.speed);
}

