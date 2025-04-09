//Object array

var users = [
    {
        id : 1,
        name : "john",
        email : "john@gmail.com",
        age : 27,
        city : "bangalore"
    },
    {
        id : 2,
        name : "tom",
        email : "tom12@gmail.com",
        age : 28,
        city : "Tumkur"
    }
]
console.log(`users = `, users)

users.forEach(function(val,index){
    document.writeln(`<h3>${val.id} ${val.name}</h3>`)
    document.writeln(`<h3>${val.email}</h3>`)
    document.writeln(`<h3>${val.age}</h3>`)
    document.writeln(`<h3>${val.city}</h3>`)
})

// array using constructor(assignment)

var course = new Array()

course[0]={
    id : 1,
    title : "javascript",
    type : "frontend"
};

course[1]={
    id : 2,
    title : "java",
    type : "backend"
};

console.log(`course = `, course)

//array using constructor (parameter)

var bikes = new Array({id:1,title:"hero"},{id:2,title:"yamaha"},{id:3,title:"suzuki"})

console.log(`bikes = `, bikes)