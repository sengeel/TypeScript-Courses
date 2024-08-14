let number: number[] =[1, 2, 3, 4, 5];
// console.log(number);

// Array of Strings
let products: string[] =["Hats", "Shirts", "Jeans"]
// console.log(products);

// Array of strings and numbers
let mixData1: (string | number)[] = ["hi", 25, "hello"]
// console.log(mixData1);

// Array of strings, numbers and booleans
let mixData2: (string | number | boolean)[] = ["hi", 25, "hello", true];
// console.log(mixData2);

// nested number type array
let myNums: number[][] = [
    [1, 2],
    [2, 3],
];

// nested string type array
let myStrings: string[][] =[
    ["hi"],
    ["hello", "there"]
];

// nested array type of string and number

let mixDataNested: (string | number)[][]=[
    [15, "hello"]
];
console.log(mixDataNested);




