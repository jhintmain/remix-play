// keyof
interface User{
    id:number;
    name:string;
    gender : "m"| "f";
}

type UserKey = keyof User; // "id" | "name" | "gender"

const uk : UserKey = "age"

const ukError : UserKey = "g";

