//Object.getPrototypeOf(cloned obj)

let car ={
    title:"Innova",
    company: "Toyota",
    model: 2024,
    color: "White"
}

let car1 = Object.create(car) // cloned object

console.log(`car =`, car)
console.log(`car1 =`, car1)

//retrieve the obect properties from cloned object
let car2 = Object.getPrototypeOf(car1)
console.log(`car2 =`, car2)

//Object.setPrototypeOf(clone,new)
//to update new set of property to cloned object
let car3 = Object.setPrototypeOf(car1,{
    title:"Thar",
    company: "Mahindra",
    model: 2025,
    color: "White"
})

console.log(`car 3=`, car3)