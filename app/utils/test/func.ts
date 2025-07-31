
console.log("========== overload ==============");
interface User {
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;

function join(name: string, age: number | string): Use r | string {
    if (typeof age === 'number') {
        return {name, age};
    }
    return "나이는 숫자로 입력하세요";
}

const sam : User = join("Sam", 20);
console.log(sam); // { name: 'Sam', age: 20 }

const jon : string = join("Jon", "20");
console.log(jon); // 나이는 숫자로 입력하세요