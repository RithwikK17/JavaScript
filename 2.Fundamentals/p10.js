/* Patterns */

/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.writeln(`${j}`);
    }
    document.writeln(`<br>`);
}

document.writeln(`<hr>`)

/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.writeln(`${i}`);
    }
    document.writeln(`<br>`);
}

document.writeln(`<hr>`)

/* 
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
let n=1;
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.writeln(`${n} `);
        n++;
    }
    document.writeln(`<br>`);
}

document.writeln(`<hr>`)

/* 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        document.writeln(`${j} `);
    }
    document.writeln(`<br>`);
}

document.writeln(`<hr>`)

/* 
        1
      1   2
    1   2   3
  1   2   3   4
1   2   3   4   5
*/

let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern+"");

document.writeln(`<hr>`)

/* 
        1
      1   2
    1   2   3
  1   2   3   4
1   2   3   4   5
  1   2   3   4
    1   2   3
      1   2
        1
*/



document.writeln(`<hr>`)

/* 
*
* *
* * *
* * * *
* * * * *

*/
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.writeln(` * `);
    }
    document.writeln(`<br>`);
}
document.writeln(`<hr>`)


/* 
* * * * *
* * * *
* * *
* *
*

*/
for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        document.writeln(` * `);
    }
    document.writeln(`<br>`);
}
document.writeln(`<hr>`)