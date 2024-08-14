"use strict";
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product === 'sunglasses')
        price = 29;
    if (product === 'hat')
        price = 19;
    if (product === 'shoes')
        price = 59;
    let totalSalesforIndividualProduct = price * sales;
    return totalSalesforIndividualProduct - tax * totalSalesforIndividualProduct - discount * totalSalesforIndividualProduct;
}
const sunglasses = holidaySales("sunglasses", 20, 0.15, 0.25);
console.log(`The total profit from the sales of sunglasses is $${sunglasses}`);
