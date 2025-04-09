//Array 

/* 
    Group of values (not mandatory to be similar type)

    types:
    1. Single array
        a. literal array
        b. array using constructor (assignment)
        b. array using constructor (parameter)

    2. Object Array
        group of objects
        a. literal array
        b. array using constructor (assignment)
        b. array using constructor (parameter)

    3. JSON Array (Server Response)

*/

//Single (literal array)
var users = ["john", "tom", "harry", "brooke"]
console.log(`array =`, users);
console.log(`2nd user =`, users[1]);

document.writeln(`<h3>users =${users}</h3>`)
document.writeln(`<h3>users =${users[2]}</h3>`)

//loop iteration
let i=0;
while(i < users.length){
    document.writeln(`<p>${users[i]}</p>`)
    i++
}

// array.foreach(function(val,index){});    // array iterator
users.forEach(function(val,index){
    document.writeln(`<h5>${index} ${val}</h5>`)
});

// Single => array using constructor (assignment)
var color = new Array(); // instance creation
color[0]= "red";
color[1]= "green";
color[2]= "blue";
color[3]= "yellow";
color[4]= "orange";

console.log(`colors =`, color);

document.writeln(`<hr>`)

//using for loop
for(let i=0; i< color.length; i++){
    document.writeln(`<h4>${i} ${color[i]}</h4>`)
}

document.writeln(`<hr>`)

// single => array using constructor (parameter)
var cars = new Array("Toyota Vellfire", "Mahindra Thar", "Hyundai Ionic 5")
console.log(`cars =`, cars)

//using for in loop => for(let index in array)
for(let index in cars){
    document.writeln(`<h4>${index} ${cars[index]}</h4>`)
}

//using for of loop => for(let val of array)
for(let val in cars){
    document.writeln(`<h4>${val}</h4>`)
}

document.writeln(`<hr>`)

//array.map(function(val,index){return})

let out = users.map(function(val,index){
    return `Mr/Mrs ${val}`;
})

console.log(`map output =`, out);