let data: (string | number)[]= ["Cosmos", 13, 50, "Star"];

for (let dataPoint in data){
    // console.log(dataPoint)
    // console.log(typeof dataPoint)
    // console.log(typeof + dataPoint)
    console.log(`${+dataPoint + 1}- ${data[dataPoint]}`)
}






