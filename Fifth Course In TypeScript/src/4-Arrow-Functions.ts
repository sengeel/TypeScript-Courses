let holidaySales2 = (product: string, sales: number, tax: number, discount: number, ) :number =>{
    // let department: string = "tech"
    let price: number =0
    
    if(product==='laptops') price=  29
    if(product==='monitors') price=  19
    if(product==='keyboards') price=  59
    
    let totalSalesforIndividualProduct: number = price* sales
    
    return totalSalesforIndividualProduct - tax*totalSalesforIndividualProduct - discount*totalSalesforIndividualProduct
    }
    
    const laptops: number= holidaySales2("laptops", 20, 0.15, 0.25)
    // const monitors: number= holidaySales2("monitors", 20, 0.15, 0.25) 
    // const keyboards: number= holidaySales2("keyboards", 20, 0.15, 0.25)
    
    console.log( `The total profit from the sales of laptops is $${laptops}`)
    // console.log( `The total profit from the sales of erasers is $${monitors}`)
    // console.log( `The total profit from the sales of pencil is $${keyboards}`)