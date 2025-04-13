function calculatefine(items){
    const standardfine = 0.25
    const reservedfine = standardfine*2
    const peridicalfine = 10

    const calFine = (item) =>{
        let fines;
        if(item.category == "Periodical"){
            fines = item.daysOverdue * standardfine
            if(fines > peridicalfine){
                fines = peridicalfine
            }
            return fines
        }else if(item.isReserved){
            return item.daysOverdue * reservedfine
        }else{
            return item.daysOverdue * standardfine
        }
    }

    const fine =items.map(calFine)
    const totalfine = fine.reduce((acc, fine)=> acc + fine,0)

    const discount =items.length > 3 ? totalfine * 0.5 : 0 ;

    const finalfine = totalfine - discount
    console.log("Original fine amount: $" + totalfine)
    console.log("After special category adjustments: $"+ (totalfine + discount))
    console.log("Final fine after all calculations: $"+ finalfine)

}

const items = [
    { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
    { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
    { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
    { title: "Programming Guide", daysOverdue: 8, category: "Academic", isReserved: false }
  ]
  
calculatefine(items)