function fetchData(){
return new Promise((res, rej)=>{
    let num = Math.random();
    setTimeout(()=>{
        if(num>0.5){
            res("Sucess!")
            }
        else{
            rej("Error")
            }
        },2000)
})
}
fetchData()
.then((para)=>{
    console.log("reslove",para)
})
.catch((para)=>{
    console.log("Not gonna Fetch",para)
})
