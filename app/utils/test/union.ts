
console.log("========== union type ==============");
interface UnionCar{
    name: "car";
    color: string;
    start(): void;
}

interface Mobile{
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(item: UnionCar | Mobile): void {
    if (item.name === "car") {
        item.start();
    } else {
        item.call();
    }
}

const carGift: UnionCar = {
    name: "car",
    color: "red",
    start() {
        console.log(`The ${this.color} car is starting.`);
    }
}

const mobileGift: Mobile = {
    name: "mobile",
    color: "blue",
    call() {
        console.log(`The ${this.color} mobile is calling.`);
    }
}

getGift(carGift);
getGift(mobileGift);

console.log("========== intersection type ==============");

interface Vehicle {
    wheels: number;
    start(): void;
}

interface Door{
    doors: number;
    open(): void;
}


const motorbike: Vehicle & Door = {
    wheels: 2,
    doors: 0,
    start() {
        console.log(`The motorbike with ${this.wheels} wheels is starting.`);
    },
    open() {
        console.log(`The motorbike has no doors to open.`);
    }
}

motorbike.open();
motorbike.start();