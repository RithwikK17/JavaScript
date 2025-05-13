let u1 ={
    name: "Sam",
    email: "Sam@gmail.com"
}

let u2 = {
    age: 22,
    mobile: "9987765544",
    __proto__: u1
}

let u3 ={
    city: "Bengaluru",
    zip: "560040",
    __proto__: u2
}

let u4 ={
    state: "Karnataka",
    country: "India",
    __proto__: u3
}

console.log(`u4 =`, u4)