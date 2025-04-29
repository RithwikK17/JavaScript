var x = 123.345566;

console.log(`x =`, x)
console.log(`x =`, typeof x) // number

console.log(`\n`)

console.log(`x =`, x.toFixed(2)) // return 123.34
console.log(`x =`, typeof x.toFixed(4)) // string

console.log(`\n`)

console.log(`x =`, x.toPrecision(2)) // 1.2e+

console.log(`\n`)

console.log(`valueof =`, x.valueOf())// 123.345566

console.log(`\n`)

// any value to integer
console.log(`int =`, parseInt(x))

console.log(`\n`)

// any value to floating point value conversion
var y = 33;
console.log(`y =`, y)
console.log(`y in float =`, parseFloat(y))

console.log(`\n`)

// string to number 
var str = "3.4 days"
console.log(`str =`, str)
console.log(`str =`, Number(str)) // NaN (Not A Number)
console.log(`parseFloat(str) =`, parseFloat(str))
console.log(`parseInt(str) =`, parseInt(str))