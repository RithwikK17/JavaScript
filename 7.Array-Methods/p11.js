let ageGroup = [18,21,1,1,51,18,21,5,18,7,10]

// every 

let res1 = ageGroup.every(function(age){
    return age >= 18
})
console.log(`every age >= 18`, res1) // false

let ageGroup1 =[18,19,20,42,32]

let res2 = ageGroup1.every(function(val){
    return val >= 18
})
console.log(`every age >= 18`, res2)

// some
let res3 = ageGroup.some(function(val){
    return val >= 18
})

let ageGroup2 =[12,6,4,8,13]
let res4 = ageGroup2.some(function(val){
    return val >= 18
})

console.log(`some`, res3)
console.log(`some`, res4)