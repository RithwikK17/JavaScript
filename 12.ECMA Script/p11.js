// function hoisting = calling function before function body

sum(10,4)

// body
function sum(a,b){
    document.writeln(`<h3>sum ${a + b}</h3>`)
}

// sum(10,12)

/* 
    Questions: 
    what if the function called before the function body is not defined/ declared does not exist?
    how to differentiate b/w the Rest and Spread Operators in real time projects?
*/