"use strict";
let holidaySales1 = function (product, sales, tax, discount) {
    let price = 0;
    if (product === 'pens')
        price = 29;
    if (product === 'erasers')
        price = 19;
    if (product === 'pencils')
        price = 59;
    let totalSalesforIndividualProduct = price * sales;
    return totalSalesforIndividualProduct - tax * totalSalesforIndividualProduct - discount * totalSalesforIndividualProduct;
};
const pens = holidaySales1("sunglasses", 20, 0.15, 0.25);
const erasers = holidaySales1("sunglasses", 20, 0.15, 0.25);
const pencils = holidaySales1("sunglasses", 20, 0.15, 0.25);
console.log(`The total profit from the sales of pens is $${pens}`);
console.log(`The total profit from the sales of erasers is $${erasers}`);
console.log(`The total profit from the sales of pencil is $${pencils}`);
