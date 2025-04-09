/* 
    parameter
    return

    1. parameter return type functions
    2. parameter non-return type
    3. non-paramenter return type
    4. non-parameter non-return type
*/

// 1. parameter return type functions

function user(name,email){
    return `name is ${name} and email is ${email}`
}

var res = user("tom","tom@gmail.com")
document.writeln(`<h3>${res}</h3>`)