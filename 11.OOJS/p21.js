// param in class 

class Product{
    constructor(a,b){
        this.x = a
        this.y = b
    }

    calculate(){
        return this.x * this.y
    }
}

let p = new Product(10,30)
document.writeln(`<h3>product = ${p.calculate()}</h3>`)

p = new Product(65,2)
document.writeln(`<h3>product = ${p.calculate()}</h3>`)

p = new Product(12,2)
document.writeln(`<h3>product = ${p.calculate()}</h3>`)