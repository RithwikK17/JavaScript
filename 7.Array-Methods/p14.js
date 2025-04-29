// array.fill()

var list = [1,2,3,4,5,6,7]

console.log(`list =`, list)
console.log(`fill =`, list.fill(""))

console.log('\n')

// array.of()

var names = Array.of("John", "tom", "nick", "mike")
console.log(`names =`, names)

console.log(`\n`)

// isArray(input)
console.log(`prototype =`, Array.isArray(names))


var names ="Mac"
console.log(`prototype =`, Array.isArray(names))

console.log(`\n`)

// Array.at()

var colors = ["red", "blue", "green", "orange", "black"]
console.log(`colors =`, colors.at(-1)) // last index
console.log(`colors =`, colors.at(-2)) // 2nd last index

console.log(`colors =`, colors.at(2))

console.log(`\n`)