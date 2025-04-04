// Object
// group of key-value pairs

var car = {
    // key: value;
    title : "Thar",
    make : 2025,
    color : "red",
    fwd : false,
    rwd : true,
    body : ["base","hardtop","softtop","topend"],
    extra : {
        fuel : "diesel"
    }
}

console.log("car = ", car) // prototype = object
console.log("car =", typeof car)// datatype = object

document.writeln(`<h1>car = ${car}</h1>`); // can't destructure object on DOM

document.writeln(`<h3>title = ${car.title}</h3>`)
document.writeln(`<h3>make = ${car.make}</h3>`)//object.key
document.writeln(`<h3>fwd = ${car['fwd']}</h3>`)//object['key]

document.writeln(`<h3>fuel = ${car.extra.fuel}</h3>`)// object.key
document.writeln(`<h3>fuel= ${car['extra']['fuel']}</h3>`)//object ['key]
