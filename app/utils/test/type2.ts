console.log("========== interface ==============");
type Score = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

interface User{
    id: number;
    name: string;
    email: string;
    gender?: string; // Optional property
    readonly birth : string;
    [grade: number]: Score; //
}

let user : User = {
    id: 1,
    name: "John Doe",
    email: "jhintmain",
    birth: "1999-03-01",
    1:'A',
    2:'B',
    3:'I'
}
user.id = 2;
user.gender = "male";
user.birth = "1999-03-02";  // Error: Cannot assign to 'birth' because it is a read-only property

console.log(user);

console.log("========== interface function ==============");
interface Add{
    (num1: number, num2: number): number;
}

const addFn : Add = function (x: number, y: number): number {
    return x + y;
}

const rs = addFn(10,20);
console.log(rs);



interface IsAdult {
    (age: number): boolean;
}
const isAdultFn : IsAdult = function (age: number): boolean {
    return age >= 18;
}

console.log(isAdultFn(20)); // true

