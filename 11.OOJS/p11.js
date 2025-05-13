//Object.entries()

let car = {
    title:"Model S",
    company: "Tesla",
    color: "Space Grey",
    year: "2025"
}

console.log(`car =`, car)

let out = Object.entries(car)

console.log(`entries =`, out)

// Object.fromEntries()

let out1 = Object.fromEntries(out)// entries to object
console.log(`object =`, out1)

