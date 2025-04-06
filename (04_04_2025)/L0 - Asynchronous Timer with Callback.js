var count = 0
function timer(onComplete){
  let delay =1000
    setTimeout(()=>{
    count++
      onComplete(delay)
    },delay)
            

}
timer((ms)=>{
    console.log(`Timer of ${ms} ms finished`) 
})