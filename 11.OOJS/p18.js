// prototype keyword
// used to create propertiesfor constructor from outside 

function Car(){
    this.title = "Jeep"
}

// Constructor.prototype.property = value;
Car.prototype.color = "red";

let x = new Car()
console.log(`X =`, x)

document.writeln(`<h3> car title is ${x.title}</h3>`)
document.writeln(`<h3> car color is ${x.color}</h3>`)

