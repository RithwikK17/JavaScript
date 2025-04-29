// conditional statements
/* 
    if(condition){
        true
    }
*/

let x = 30;
if(x<56){
    console.log(`input ${x} is less than 56`);
}

console.log(`\n`);

/* 
    if(condition){
        true
    } else{
        false 
    }
*/

let z = 33;
if(z < x){
    console.log(`condition is true`);
} else{
    console.log(`condition is false`);
}

/* 
    if(condition-1){
        true
    } else if(condition-2){
        true 
    } else if(condition-3){
        true 
    } else {
        fasle 
    }
*/

console.log(`\n`);

let day = 6;

if(day === 1){
    console.log(`monday`);
} else if(day===2){
    console.log(`tuesday`);
} else if(day===3){
    console.log(`wednesday`);
} else if(day===4){
    console.log(`thursday`)
} else if(day===5){
    console.log(`friday`);
} else if(day===6){
    console.log(`saturday`);
} else if(day===7){
    console.log(`sunday`);
} else {
    console.log(`invalid day`);
}

console.log(`\n`);

/* 
    switch(key){
        case value1:
            break;
        case value2:
            break;
        case value3:
            break;
        case value4:
            break;
        default:
    }
*/

let c = 9;

switch(c){
    case 1: console.log(`Monday`);
        break;
    case 2: console.log(`Tuesday`);
        break;
    case 3: console.log(`Wednesday`);
        break;
    case 4: console.log(`Thursday`);
        break;
    case 5: console.log(`Friday`);
        break;
    case 6: console.log(`Saturday`);
        break;
    case 7: console.log(`Sunday`);
        break;
    default: console.log(`Invalid Entry`);
}

console.log(`\n`)

/* 
    Task - 1 maths subject marks
    S1
    S2
    S3

    Find Total Marks 
    Find Avg = marks/3
*/

let s1 = 69;
let s2 = 75;
let s3 = 85;

total = s1 + s2 + s3;
avg = total / 3;

console.log(`Total marks = `, total);
console.log(`Average marks = `, avg);