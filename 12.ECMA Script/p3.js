// functions in loops 

var funs = []

for(let i=0; i<100; i++){
    funs.push(function(){
        console.log(`output =`, i)
    })
}

console.log(`funs =`, funs)

funs.forEach(item =>{
    item()
})