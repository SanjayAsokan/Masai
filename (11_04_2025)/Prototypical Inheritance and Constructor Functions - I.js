
function Car(make, model, year, basePrice, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.basePrice = basePrice;
    this.isAvailable = isAvailable;
}// Here I'm creating constructor function for Car with some parameters

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}// Takeing one more function for customer and in that I'm  note that in Array

Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {// checking car is available or Not
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} has rented ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is Not available.`);
    }
};//We checking car is available or Not, If means giving to customer and storing that details

function PremiumCustomer(name) {
    Customer.call(this, name);
}//Function for Premium customer and inherit from customer

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

PremiumCustomer.prototype.DiscountedPrice = function(price) {
    return price * 0.9;
};// setting the Discount for premium custromer

Customer.prototype.cal_RentalPrice = function(car, days) {
    const price = car.basePrice * days;
    return price;
};// Calculate rental price for Normal customer for per-day

PremiumCustomer.prototype.cal_RentalPrice = function(car, days) {
    const basePrice = car.basePrice * days;
    const discountedPrice = this.DiscountedPrice(basePrice);
    return discountedPrice;
};// Calculate rental price for premium customer for per-day

Customer.prototype.returnCar = function(car) {// Taking car's Back and Noteing back car returned
    const index = this.rentedCars.indexOf(car);
    if (index !== -1) {
        car.isAvailable = true;//we checking if car's coming back to return and remove from rented car to returned cars
        this.rentedCars.splice(index, 1);
        console.log(`${this.name} is  returned that's ${car.make} ${car.model}.`);
    } else {
        console.log(`Actually this car was not rented by ${this.name}.`);
    }
};// Noteing returned cars

function performMaintenance(car, delay) {
    console.log(`Performing maintenance on ${car.make} ${car.model}...`);// we telling that which car is in maintainence now
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available for rent.`);// Giving the information car is available now after the timeout
    }, delay);
}

const car1 = new Car("Toyota", "Corolla", 2020, 40);
const car2 = new Car("Honda", "Civic", 2022, 40);
// Adding two Cars details
const customer1 = new Customer("Sanjay");
const premiumCustomer1 = new PremiumCustomer("Hema");
//setting customers
customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);
//giving the cars rent to customers
const rentalDays = 5;
const price1 = customer1.cal_RentalPrice(car1, rentalDays);
const price2 = premiumCustomer1.cal_RentalPrice(car2, rentalDays);

console.log(`Total rental price for ${customer1.name}: $${price1}`);
console.log(`Total rental price for ${premiumCustomer1.name}: $${price2}`);

customer1.returnCar(car1);
performMaintenance(car2, 1000);

