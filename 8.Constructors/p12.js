console.log(`random =`, Math.random()) // random number between 0 to 1

console.log(`\n`)

console.log(`math exp(1)`, Math.exp(1)) // 2.718
console.log(`math exp(-1)`, Math.exp(-1)) // 0.367
console.log(`math exp(0)`, Math.exp(0)) // 1

// math constants

document.writeln(`<h3>Eulers .E=${Math.E}</h3>`)
document.writeln(`<h3> Math.PI  = ${Math.PI}</h3>`)
document.writeln(`<h3> Math.LN2  = ${Math.LN2}</h3>`)
document.writeln(`<h3> Math.LN10 = ${Math.LN10}</h3>`)
document.writeln(`<h3> Math.LOG2E = ${Math.LOG2E}</h3>`)
document.writeln(`<h3> Math.LOG10E = ${Math.LOG10E}</h3>`)
document.writeln(`<h3> Math.SQRT1_2 = ${Math.SQRT1_2}</h3>`)
document.writeln(`<h3> Math.SQRT2 = ${Math.SQRT2}</h3>`)

document.writeln(`<hr/>`)

// min and max values 
var x = Math.min()
var y = Math.max()
document.writeln(`<h3>min = ${Math.min()}</h3>`)
document.writeln(`<h3>max = ${Math.max()}</h3>`)

// lexicographical comparision x > y =1, x < y = -1, x === y = 0

console.log(`Infinity > -Infinity=`, x>y) // true
console.log(`Infinity < -Infinity=`, x<y) // false
console.log(`Infinity === -Infinity=`, x===y) // fasle