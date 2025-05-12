//Object inheritance
let u1 ={
    name: "tom",
    email: "tom@gmail.com"
}
console.log(`u1 =`, u1)

let u2 = Object.create(u1, {
    age:{
        value:22
    },
    mobile:{
        value: "8073905733"
    }
})
console.log(`u2 =`, u2)

let u3 =Object.create(u2, {
    city:{
        value:"Bengaluru"
    },
    pincode:{
        value: "560010"
    }
})

console.log(`u3 =`, u3)