function Animal(){
    this.type = 'Animal'
}
Animal.prototype.sound = function(){
    console.log("Animal sound")
} 
function Dog(){
    Animal.call(this)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constorctor = Dog

Dog.prototype.sound =  function(){
    console.log("Bark")
}
 const MyDog = new Dog()
 MyDog.sound()