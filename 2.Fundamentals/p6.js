//Oprators in JavaScript
/* 
    1.Arithmetic operators + - * / %
    2.Logical && || !
    3.Relational < > <= >= !== == ===
        == equal to  (values)
        === strictly equal to (values and datatype)
    4.Assignment = += -= *= /= %=
    5.Increment & Decrement
        pre  ++i   --i
        post i++   i--
    6. Ternary = (condition) ? true : false
    7. others () [] {} ' '  " "  ` ` ^ $ # @ : ; , . \
*/

let x = 123;
let z = 1434.5;
let a = "12434.556";

console.log(`sum =`, x + z);

console.log(`sum =`, x + a);

console.log(`diff =`, x - z);

console.log(`prod =`, x * z);

console.log(`quotient =`, x / z);

console.log(`remainder =`, x % z);

console.log('\n');

let r1 = 20 > 30;
let r2 = 44 > 10;
let r3 = r2 & r1;

console.log(`and =`, r1 && r2);
console.log(`or =`, r1 || r2);
console.log(`not =`, !r3 );

console.log(`\n`);

let a1 = "344";
let a2 = 344;
let a3 = 344;

console.log(`equal to =`, a2 == a3);
console.log(`equal to =`, a1 == a3);

console.log(`strictly equal to =`, a2 === a3);
console.log(`strictly equal to =`, a1 === a3);

console.log(`\n`);

let p = 23;
console.log(`p = `, p); //23

p += 40;
console.log(`p = `, p); //63

p -= 10;
console.log(`p = `, p); //53

p *= 5;
console.log(`p = `, p); //265

p %= 4;
console.log(`p = `,p); //1

p /= 5;
console.log(`p = `,p); //0.2

console.log(`\n`);

let f = 33;
console.log(` ++i =`, ++f);
console.log(` --i =`, --f);

let t = 44;
console.log(` i++ =`, t++);
console.log(` i-- =`, t--);

console.log(`\n`);

//contidion ? true : false

let res1 = 10 > 4 ? "Hi Prateek" : "Invalid";
console.log(`res1 =`, res1);

let res2 = 4 > 10 ? "invalid" : "Welcome to JavaScript";
console.log(`res2 =`, res2);