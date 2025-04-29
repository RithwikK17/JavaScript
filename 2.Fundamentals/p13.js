//JSON Array
//JavaScript Object Notation (server request/ response)

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

// to convert object to JSON string
var out = JSON.stringify(users)
console.log(`string =`, out)

// to convert back JSON string to object format
console.log(`object =`, JSON.parse(out))


var course = [
    {
        id : 1,
        title : "javascript",
        type : "frontend"
    },
    {
        id : 2,
        title : "java",
        type : "backend"
    }
]
console.log(`course =`, course)

// to convert to JSON string
var obj = JSON.stringify(course)
console.log(`string=`,obj)

// to convert JSON String to Object
console.log(`object=`, JSON.parse(obj))