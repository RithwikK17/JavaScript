// array.slice(start,end)

var colors = ["green", "red", "blue", "orange", "slateblue", "white"]

let newArray = colors.slice(1,4)

console.log(`array =`, colors)
console.log(`sliced array =`,newArray)

// toString() and toLocaleString()
// converts array elements into string

let arr = [123,true,"welcome",null,undefined]
console.log(`array =`, arr)

console.log(`string =`, arr.toString())
console.log(`string =`, arr.toLocaleString())