// prototype keyword
// used to create propertiesfor constructor from outside 

function Car(){}

// Constructor.prototype.property = value;
Car.prototype.title = "Innova";
Car.prototype.color = "White";
Car.prototype.year = "2025";

Car.prototype.getCarInfo = function(){
    document.writeln(`<h1>car is ${this.title}, color of the car is ${this.color} and year is ${this.year}</h1>`)
}

let x = new Car()
x.getCarInfo()

console.log(`title =`, x.title)
console.log(`color =`, x.color)
console.log(`year =`, x.year)
