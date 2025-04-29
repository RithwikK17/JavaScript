// array.map(function(val,index){ return val})

var names = ["john", "mark", "tom", "harry", "sam"]

console.log(`names =`, names)

var out = names.map(function(val,index){
    return "Mr/Mrs " + val
})

console.log(`out =`, out)