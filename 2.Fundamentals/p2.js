//variables
//datatype variable = value;

/* 
    var - global scope
    let - local scope
    const
*/

var x = 20;
console.log('x =',x);

var x = 40;
console.log('x = ',x);

let y = 20;
console.log('y = ',y);

y = 50; //re-assign(Owerwrite) 
console.log('y = ',y);

const z = 77;
console.log('z =',z);

//z = 50; //reasssignment error
console.log('z =',z);

// var - is used to declare multiple values with the same variable name re-assignment is possible

// let - can be initialized once and the values can be overwritten but cannot be re-assigned

// const - only initialized once and cannot be changed throughout the script for primitive data types cannot be re-assigned or overwritten (can be changed only in non- primitive data type)