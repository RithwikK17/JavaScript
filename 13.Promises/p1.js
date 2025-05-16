/* 
    Promise Constructor has 4 states 
        1. Fullfilled - resolve - then(res=> {})
        2. rejected - reject - catch(err=> {})
        3. pending
        4. settled
*/

function product(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a !== "number" || typeof b !== "number"){
            reject(new Error("the input must be number."))
        }
        resolve(a * b)
    })
}

let out = product(10,"3")

// console.log(`out =`, out)
out.then(res=>{
    console.log(`output =`, res)
}).catch(err => {
    console.error(`Error:`, err.message);
});