// Functions in JavaScript
/* 
    function is a block of program or logic which executes through call.

    1. function body
        function name(parameter){
            //statements
        }

        // assignment
        
        var getName = function(paramenter){
            //statements
        }

        // arrow function 
        var getUser = () =>{
                // statements
            }

    2. call 
        by value
        through events
        through event listners (event attributes)
        using DOM elements
*/
// Main use of a Function is Reusability 

function display(){
    document.writeln(`<h3>Welcome to JavaScript</h3>`)
}
display()

var getName = function(name){
    document.writeln(`<h2>My name is ${name} </h2>`)
}
getName("Harry")

var getCity = (addr) =>{
    document.writeln(`I live in ${addr}`)
}
getCity("Licester Square")