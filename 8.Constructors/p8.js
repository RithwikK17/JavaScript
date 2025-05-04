// object constructor

var user = new Object(); // instance of an object 

// ref.key = value; property
user.name = "Harvey";
user.email = "harvey@gmail.com";
user.city = "New York";
user.age = 30;

console.log(`user =`, user)

document.writeln(`<h3>name= ${user.name}</h3>`)
document.writeln(`<h3>email= ${user.email}</h3>`)
document.writeln(`<h3>city= ${user.city}</h3>`)
document.writeln(`<h3>age= ${user.age}</h3>`)