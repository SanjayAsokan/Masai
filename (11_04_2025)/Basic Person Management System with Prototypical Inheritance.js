
function Person(name, age){
    this.name = name
    this.age = age
}// constructor function for person

Person.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
}// Assigne Instance prototype to Person

function Employee(name, age, jobTitle){
    Person.call(this, name, age)// Inheriting from person
    this.jobTitle=jobTitle
 }//constructor function for Employee

Employee.prototype = Object.create(Person.prototype)// creating prototyp chaining here
Employee.prototype.constructor = Employee

Employee.prototype.work = function(){
    console.log(`${this.name} is working as a ${this.jobTitle}`)// chaing to work
}

const person1 = new Person("sanjay", 23);
const employee1 = new Employee("sanju", 25, "software Developer")

person1.introduce()
employee1.introduce()
employee1.work()
