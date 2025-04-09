async function productfetch(){
    try{
        let details = await fetch("https://fakestoreapi.com/products")
        let data = await details.json()
        console.log(data)

        let sum = data.reduce((acc, curr)=>acc + curr.price,0)
        console.log("Total Price :",Math.floor(sum))
    }
    catch(err){
    console.log("Failed to fetch products. Please try again later",err)

    }
}
productfetch()

//async Function it's the keyword that handles the await keyword
// we need to mention it before the function

//I fetch the data from some URL using fetch method

//Extrach the data to javascript object

//I used try and catch block to handle the error 

//i used and variable to sum the all product-price totally
//using reduch HOF 

// Finally i call the function