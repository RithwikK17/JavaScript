//Rest Operator ...
// parameters are converted to array

function sum(...x){
    console.log(`x =`, x)
}

sum(10,23,5,6,9,3,1,7,9,13,34,45,24)

console.log(`\n`)

//spread operator ...
// array converted to individual parameters 

function findMin(a){
    console.log(`input =`, ...a)
    console.log(`min =`, Math.min(...a))
}

findMin([10,2,44,6,12,4,6,9,8,7])