
function createCar(make, model, year){
    let  obj = {}
 
    obj.make =make;
    obj.model =model;
    obj.year =model;
    obj.describeCar = function(){
     console.log(`This car is a ${year} ${make} ${model}`)
    }
 return obj
 }
 const car = createCar("Toyota", "Camry", 2022);
 car.describeCar();
 
 