class Vehicle {
	wheel: number;
	fuel: string;
	private color: string;

	constructor(wheel: number, fuel: string, color: string = 'white'){
		this.color = color;
		this.fuel = fuel;
		this.wheel = wheel;
	}
}

class Car extends Vehicle {
	constructor(){
		super(4, 'gas', 'red');
	}
}

class Motorcycle extends Vehicle {
	deluxe:boolean;

	constructor(deluxe: boolean){
		super(2, 'gasoline');
		this.deluxe = deluxe;
	}

	setFuel(fuel: string): void{
		this.fuel = fuel;
	}

	getFuel(): string{
		return this.fuel;
	}
}

var car = new Car();
var motorcycle = new Motorcycle(false);

console.log(car);
console.log(motorcycle);