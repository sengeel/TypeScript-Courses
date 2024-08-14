function holidaySales(product: string, sales: number, tax: number, discount: number) :number{
let price: number =0

if(product==='sunglasses') price=  29
if(product==='hat') price=  19
if(product==='shoes') price=  59

let totalSalesforIndividualProduct: number = price* sales

return totalSalesforIndividualProduct - tax*totalSalesforIndividualProduct - discount*totalSalesforIndividualProduct
}

const sunglasses: number= holidaySales("sunglasses", 20, 0.15, 0.25)

console.log( `The total profit from the sales of sunglasses is $${sunglasses}`)