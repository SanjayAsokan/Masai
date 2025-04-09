var count =1
function timer(onComplete){
    let time = 5000
    setTimeout(()=>{
        count++
        onComplete(time)
    },time)
}
timer((count)=>{
    console.log(`Timer of ${count} ms finished`)
})