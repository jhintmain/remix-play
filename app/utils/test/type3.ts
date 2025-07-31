console.log("========== class ==============");

interface Car{
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color: string;
    wheels: number;

    constructor(color: string) {
        this.color = color;
        this.wheels = 4; // Default value for wheels
    }

    start(){
        console.log(`The ${this.color} BMW is starting with ${this.wheels} wheels.`);
    }
}

const bmwCar = new Bmw("red");
bmwCar.start(); // The red BMW is starting with 4 wheels.


const bmwCar2 = new Bmw("yellow");
bmwCar2.start(); // The red BMW i

console.log("========== extends ==============");

interface Benz extends Car {
    door: number,
    stop(): void
}

const benzCar: Benz = {
    color: "blue",
    wheels: 4,
    door: 4,
    start() {
        console.log(`The ${this.color} Benz is starting with ${this.wheels} wheels and ${this.door} doors.`);
    },
    stop() {
        console.log(`The ${this.color} Benz is stopping.`);
    }
};

benzCar.start(); // The blue Benz is starting with 4 wheels and 4 doors.
benzCar.stop(); // The blue Benz is stopping.


console.log("========== multiple extends ==============");

interface Toy {
    name: string;
    play(): void;
}

interface TCar {
    brand: string;
    speed: number;
}

interface ToyCar extends Toy, TCar {
    color: string;
    drive(): void;
}

const toyCar: ToyCar = {
    name: "또봇",
    play() {
        console.log(`${this.name} is playing!`);
    },
    brand: "또봇 브랜드",
    speed: 100,
    color: "red",
    drive() {
        console.log(`Driving the ${this.color} ${this.brand} at ${this.speed} km/h!`);
    }
};
toyCar.play(); // 또봇 is playing!
toyCar.drive(); // Driving the red 또봇 브랜드 at 100 km/h!