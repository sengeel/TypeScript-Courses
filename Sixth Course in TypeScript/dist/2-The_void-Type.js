"use strict";
function printHello() {
    console.log("Hello");
}
printHello();
let productCategory;
let shoopingCart = (category) => {
    productCategory = category;
};
console.log(shoopingCart("fresh"));
