function printHello(){
    console.log("Hello");
}
printHello()

let productCategory:string

let shoopingCart =  (category: string): void => {
    productCategory = category
}

console.log(shoopingCart("fresh"))

// let movieName: void = 123