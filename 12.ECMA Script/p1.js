// Scope 

/* 
    var -> global scope
    let & const -> local scope / block scope
*/

//to avoid run time exception(errors) -> we use try-catch.
try {
    if(true){
        var x = 12;
        console.log(`local scope =`, x)
    }
    
    console.log(`global scope =`, x)
} catch (error) {
    console.log(error)
}