/* 
    1.Object
        Object constructor
        Object Constructor Methods
        Inheritance
        Inheritance Chain
            __proto__ keyword
    2.Constructor
        Custom Constructor
        Types
        Constructor Methods
        Prototype
    3.Class 
        Types
        OOPS Concepts
    4.Promise Constructor
        AJAX Call
        REST API Call
    5.Map Constructor -entries
    6.Set Constructor
    7.Properties
*/

// object is a group of key value pairs
/* 
    type name = {
        key: value -> property of an object
    }
*/

var user = {
    name: "John",
    email: "john@gmail.com",
    age:22,
    isAdmin: false,
    hobbies: ["riding","cycling","driving"],
    city: "bengaluru",
    getName: function(){
        document.writeln(`<h1>User name is ${this.name}</h1>`)
    },
    getCity: () =>{
        //this keyword is not functional
        return "city name is"+this.city;
    }
}

user.getName()
document.writeln(`<h3>email is= ${user.email}</h3>`)
document.writeln(`<h3>age is${user.age}</h3>`) //object.key
document.writeln(`<h3>isAdmin is = ${user["isAdmin"]}</h3>`) //object["key"]

document.writeln(`<h3>${user.getCity()}</h3>`)

user.hobbies.forEach(function(item){
    document.writeln(`<h4>${item}</h4>`)
})

console.log(`user =`, user)
document.writeln(`${user}`) // [object Object]