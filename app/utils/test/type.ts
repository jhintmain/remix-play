/*
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(3, 4, 5));
console.log(add("apple", "banana")); // TypeScript will raise an error here

console.log("========================");

function showItems(arr: number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItems([1, 2, 3]); // 1 2 3
showItems([1, 2, "apple"]); // TypeScript will raise an error here

console.log("========== 기본 타입 ==============");

const age: number = 20;
const isAdult: boolean = age >= 18;
const a: number[] = [12, 3, 4];
const b: Array<number> = [1, 2, 3];


console.log(age);
console.log(isAdult);
a.push(2);
b.push(5);
console.log(a);
console.log(b)

console.log("========== 튜플 ==============");
let tu: [number, string][];
// eslint-disable-next-line prefer-const
tu = [[1, "apple"]];
// tu[0].toLowerCase(); // TypeScript will raise an error here
tu[0][1].toLowerCase(); // "apple"

tu.forEach(([id,name]) => {
    console.log(`Number: ${id}, String: ${name}`);
})

console.log("========== void/never ==============");

function logMessage(message: string): void {
    console.log(message);
}
function showError(message: string): never {
    throw new Error(message);
}

function infLoop(): never {
    while (true) {
        console.log("Infinite loop");
    }
}
logMessage("This is a log message"); // This will log the message
// showError("This is an error message"); // This will throw an error and stop execution


console.log("========== enum ==============");
enum Os{
    Windows,
    MacOS,
    Linux,
    Android =10,
    iOS
}

console.log(Os["Windows"]);
console.log(Os[10]);

let myOs: Os;

myOs = Os.MacOS;
console.log(myOs); // 1*/
