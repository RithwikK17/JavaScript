var user =[
    {
        id: 1,
        first: "Raju",
        last: "kumar",
        email: "raju@gmail.com"
    },
    {
        id: 2,
        first: "John",
        last: "Micheal",
        email: "john@gmail.com"
    },
    {
        id: 3,
        first: "Raju",
        last: "sharma",
        email: "raju123@gmail.com"
    },
    {
        id: 4,
        first: "Chand",
        last: "sharma",
        email: "chandu@gmail.com"
    }
];

console.log('users =', user)

// find method - single object
/* 
    array.find(function(item){
        return item.property === value
    })
*/

let res1 = user.find(function(item){
    return item.id === 3;
})
console.log('find =', res1)


// filter method = array
/* 
    array.filter(function(item){
        return item.property === value
    })
*/

let res2 = user.filter(function(item){
    return item.first === "Raju";
})
console.log('filter =', res2)