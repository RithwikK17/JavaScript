// default parameter

function product(x,y=4){
    document.writeln(`<h3> product is ${x * y}</h3>`)
}

product(10) // 40
product(10,2) // 20