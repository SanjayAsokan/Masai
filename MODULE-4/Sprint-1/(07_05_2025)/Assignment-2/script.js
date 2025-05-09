var item2 = document.getElementById("item2")

item2.addEventListener("click", function(){
    let parent = item2.parentNode
    let previous = item2.previousElementSibling
    let next = item2.nextElementSibling

    alert("Parent Content: " + parent.tagName)

    console.log("Previous item is:"+ previous.innerText)
    console.log("Next item is:" + next.innerText)
})