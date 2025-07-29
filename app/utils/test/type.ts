function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(3, 4,5));
console.log(add("apple", "banana")); // TypeScript will raise an error here

console.log("========================");

function showItems(arr:number[]){
    arr.forEach((item) => {
        console.log(item);
    });
}

showItems([1,2,3]); // 1 2 3
showItems([1,2,"apple"]); // TypeScript will raise an error here