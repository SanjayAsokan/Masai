fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json()
})
.then((res)=>{
    let names = res.map((ele)=>ele.name)
    console.log(names)
   
})
.catch((err)=>{
    console.log("Notable to Fetch the Details",err)
})