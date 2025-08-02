// 1. keyof
console.log("========== keyof ==============");

interface User {
    id: number;
    name: string;
    gender: "m" | "f";
}

type UserKey = keyof User; // "id" | "name" | "gender"

const uk: UserKey = "id"
console.log(uk);

const ukError: UserKey = "g";  // TypeScript will raise an error here

// Partial<T>
console.log("========== Partial<T> ==============");
console.log("property를 선택적으로 설정할 수 있는 유틸리티 type.");

interface UserProfile {
    id: number;
    name: string;
    age: number;
}

const admin: Partial<UserProfile> = {
    id: 1,
    name: "Admin"
}

console.log(admin);

// Readonly<T>
console.log("========== Readonly<T> ==============");
console.log("property를 읽기 전용으로 설정할 수 있는 유틸리티 type.");
const manager: Readonly<UserProfile> = {
    id: 2,
    name: "Manager",
    age: 30
}
manager.id = 3; // TypeScript will raise an error here
console.log(manager)

// Record<K, T>
console.log("========== Record<K, T> ==============");
console.log("key와 value의 타입을 지정할 수 있는 유틸리티 type.");

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";

let StudentScores: Record<Grade, Score> = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D"
}
StudentScores["4"] = "F"; // Valid
console.log(StudentScores);

interface Student {
    id: number;
    name: string;
    age: number;
}

function isValidStudent(student: Student): boolean {
    const result: Record<keyof Student, boolean> = {
        id: student.id > 0,
        name: student.name !== "",
        age: student.age > 14,
    }
    return result;
}

console.log(isValidStudent({id: 1, name: "John", age: 15})); // { id: true, name: true, age: true }

// Pick<T, K>
console.log("========== Pick<T, K> ==============");
console.log("특정 property만 선택할 수 있는 유틸리티 type.");

interface UserDetails {
    id: number;
    name: string;
    email: string;
    age: number;
}

type UserContact = Pick<UserDetails, "email" | "name">;
const userContact: UserContact = {
    email: "hong123@gmail.com",
    name: "Hong"
};
console.log(userContact);
// Omit<T, K>
console.log("========== Omit<T, K> ==============");
console.log("특정 property를 제외할 수 있는 유틸리티 type.");
type UserWithoutEmail = Omit<UserDetails, "email">;
const userWithoutEmail: UserWithoutEmail = {
    id: 1,
    name: "Kim",
    age: 25
}
console.log(userWithoutEmail);

// Exclude<T, U>
console.log("========== Exclude<T, U> ==============");
console.log("T에서 U를 제외한 타입을 생성하는 유틸리티 type.");
type AllKeys = "id" | "name" | "email" | "age";
type NonEmailKeys = Exclude<AllKeys, "email">; // "id" | "name" | "age"
const nonEmailKey: NonEmailKeys = "name"; // Valid
// const nonEmailKeyError: NonEmailKeys = "email"; // TypeScript will raise an error here
console.log(nonEmailKey);


// Extract<T, U>
console.log("========== Extract<T, U> ==============");
console.log("T에서 U에 포함된 타입만 추출하는 유틸리티 type.");
type AllKeys2 = "id" | "name" | "email";
type ValidKeys = Extract<AllKeys2, "id" | "email">; // "id" | "email"
const validKey: ValidKeys = "email"; // Valid
// const validKeyError: ValidKeys = "name"; // TypeScript will raise an error here
console.log(validKey);

// ReturnType<T>
console.log("========== ReturnType<T> ==============");
console.log("함수의 반환 타입을 추출하는 유틸리티 type.");
function getUserInfo(id: number): { id: number; name: string } {
    return { id, name: "User" + id };
}
type UserInfo = ReturnType<typeof getUserInfo>; // { id: number; name: string }
const userInfo: UserInfo = getUserInfo(1);
console.log(userInfo); // { id: 1, name: 'User1' }'

// Parameters<T>
console.log("========== Parameters<T> ==============");
console.log("함수의 매개변수 타입을 추출하는 유틸리티 type.");
function createUser(id: number, name: string): { id: number; name: string } {
    return { id, name };
}
type CreateUserParams = Parameters<typeof createUser>; // [number, string]
const params: CreateUserParams = [1, "Alice"];
const newUser = createUser(...params);
console.log(newUser); // { id: 1, name: 'Alice' }

// InstanceType<T>
console.log("========== InstanceType<T> ==============");
console.log("클래스의 인스턴스 타입을 추출하는 유틸리티 type.");
class UserClass {
    constructor(public id: number, public name: string) {}
}
type UserInstance = InstanceType<typeof UserClass>; // UserClass
const userInstance: UserInstance = new UserClass(1, "Bob");
console.log(userInstance); // UserClass { id: 1, name: 'Bob' }

// NonNullable<T>
console.log("========== NonNullable<T> ==============");
console.log("null 또는 undefined를 제외한 타입을 생성하는 유틸리티 type.");
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>; // string
const nonNullableString: NonNullableString = "Hello";
// const nonNullableStringError: NonNullableString = null; // TypeScript will raise an error here
console.log(nonNullableString); // Hello