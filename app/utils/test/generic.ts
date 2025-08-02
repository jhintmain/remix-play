/*function getSize(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}*/

function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);  // 3

const arr2 = ["apple", "banana", "cherry"];
getSize<string>(arr2);  // 3

const arr3 = [ture, false, false];
getSize<boolean>(arr3); // 3