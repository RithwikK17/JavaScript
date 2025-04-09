// function call by event

function printName(name){
    document.writeln(`<h3>My name is ${name}</h3>`)
}

var btnEl = document.getElementById("btn")

// through EventListener
// dom_element.addEventListner(event,function(event_ref){})
btnEl.addEventListener("click",function(event){
    var name = "john"
    document.writeln(`<h2>My name is ${name}</h2>`)
});

//using DOM elements
var loginEl = document.getElementById("login")

//dom_element.event = function(event){}
loginEl.onclick = function(event){
    alert('Login Success')
}