/* 
    Find the Students grades ref using marks 

    Student  grades
    david     80
    john      77.5
    mary      67.36
    lora      89.53
    tom       34.6

    70 > marks <= 100 Distinction
    60 >= marks < 70  First
    35 >= marks < 60  Second
    35 < marks        Fail
*/

let marks = 77.5;

if(marks>70 && marks<=100){
    console.log(`Distinction`)
} else if(marks>=60 && marks <70){
    console.log(`First class`)
} else if(marks>=35 && marks<60){
    console.log(`Second class`)
} else {
    console.log(`Fail`);
}