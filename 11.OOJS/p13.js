// inheritance using __proto__ keyword
let u1 ={
    name:"Harry",
    email: "harry@gmail.com"
}

let u2 ={
    age: 22,
    __proto__: u1
}

console.log(`u1=`, u1)
console.log(`u2=`, u2)

