"use strict";
let holidaySales2 = (product, sales, tax, discount) => {
    let price = 0;
    if (product === 'laptops')
        price = 29;
    if (product === 'monitors')
        price = 19;
    if (product === 'keyboards')
        price = 59;
    let totalSalesforIndividualProduct = price * sales;
    return totalSalesforIndividualProduct - tax * totalSalesforIndividualProduct - discount * totalSalesforIndividualProduct;
};
const laptops = holidaySales2("laptops", 20, 0.15, 0.25);
console.log(`The total profit from the sales of laptops is $${laptops}`);
